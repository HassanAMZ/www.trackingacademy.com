// src/app/api/stripe/webhook/route.js
import { db } from "@/app/firebase";
import PaymentSuccessEmail from "@/components/emails/payment-success";
import { stripe } from "@/lib/stripe";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 },
    );
  }

  console.log("Webhook event received:", event.type);

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        await handlePaymentIntentSucceeded(event.data.object);
        break;

      case "payment_intent.payment_failed":
        await handlePaymentIntentFailed(event.data.object);
        break;

      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(event.data.object);
        break;

      case "invoice.payment_succeeded":
        await handleInvoicePaymentSucceeded(event.data.object);
        break;

      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object);
        break;

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object);
        break;

      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}

async function handlePaymentIntentSucceeded(paymentIntent) {
  console.log("Processing successful payment:", paymentIntent.id);

  try {
    // Get customer details from the payment intent
    let customerDetails = {};

    // Expand the customer if it exists
    if (paymentIntent.customer) {
      const customer = await stripe.customers.retrieve(paymentIntent.customer);
      customerDetails = {
        email: customer.email,
        name: customer.name,
        phone: customer.phone,
      };
    }

    // If no customer, try to get from charges
    if (!customerDetails.email && paymentIntent.charges?.data?.length > 0) {
      const charge = paymentIntent.charges.data[0];
      if (charge.billing_details) {
        customerDetails = {
          email: charge.billing_details.email,
          name: charge.billing_details.name,
          phone: charge.billing_details.phone,
          address: charge.billing_details.address,
        };
      }
    }

    // Prepare transaction data for Firebase
    const transactionData = {
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      amountReceived: paymentIntent.amount_received,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      customerEmail: customerDetails.email,
      customerName: customerDetails.name,
      customerPhone: customerDetails.phone,
      metadata: paymentIntent.metadata || {},
      createdAt: Timestamp.fromDate(new Date(paymentIntent.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "payment_intent.succeeded",
    };

    // Save to Firebase
    const transactionsCollection = collection(db, "transactions");
    const docRef = doc(transactionsCollection, paymentIntent.id);
    await setDoc(docRef, transactionData);

    // Send confirmation email if we have customer email
    if (customerDetails.email) {
      await sendPaymentSuccessEmail({
        email: customerDetails.email,
        name: customerDetails.name || "Customer",
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntentId: paymentIntent.id,
        productName: paymentIntent.metadata?.productName || "Digital Product",
        receiptUrl: paymentIntent.charges?.data?.[0]?.receipt_url,
      });
    }

    console.log("Payment processed successfully:", paymentIntent.id);
  } catch (error) {
    console.error("Error processing successful payment:", error);
    throw error;
  }
}

async function handlePaymentIntentFailed(paymentIntent) {
  console.log("Processing failed payment:", paymentIntent.id);

  try {
    // Get customer details
    let customerDetails = {};
    if (paymentIntent.customer) {
      const customer = await stripe.customers.retrieve(paymentIntent.customer);
      customerDetails = {
        email: customer.email,
        name: customer.name,
      };
    }

    // Save failed payment to Firebase
    const failedPaymentsCollection = collection(db, "failedPayments");
    const docRef = doc(failedPaymentsCollection, paymentIntent.id);

    await setDoc(docRef, {
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      customerEmail: customerDetails.email,
      customerName: customerDetails.name,
      lastPaymentError: paymentIntent.last_payment_error,
      metadata: paymentIntent.metadata || {},
      createdAt: Timestamp.fromDate(new Date(paymentIntent.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "payment_intent.payment_failed",
    });

    // Optional: Send payment failed email
    if (customerDetails.email) {
      await sendPaymentFailedEmail({
        email: customerDetails.email,
        name: customerDetails.name || "Customer",
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntentId: paymentIntent.id,
        error: paymentIntent.last_payment_error?.message,
      });
    }

    console.log("Failed payment logged:", paymentIntent.id);
  } catch (error) {
    console.error("Error processing failed payment:", error);
    throw error;
  }
}

async function handleCheckoutSessionCompleted(session) {
  console.log("Processing completed checkout session:", session.id);

  try {
    // Save checkout session data
    const checkoutSessionsCollection = collection(db, "checkoutSessions");
    const docRef = doc(checkoutSessionsCollection, session.id);

    await setDoc(docRef, {
      sessionId: session.id,
      paymentIntentId: session.payment_intent,
      customerEmail: session.customer_details?.email,
      customerName: session.customer_details?.name,
      amountTotal: session.amount_total,
      currency: session.currency,
      paymentStatus: session.payment_status,
      metadata: session.metadata || {},
      createdAt: Timestamp.fromDate(new Date(session.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "checkout.session.completed",
    });

    console.log("Checkout session processed:", session.id);
  } catch (error) {
    console.error("Error processing checkout session:", error);
    throw error;
  }
}

async function handleInvoicePaymentSucceeded(invoice) {
  console.log("Processing successful invoice payment:", invoice.id);

  try {
    const invoicesCollection = collection(db, "invoices");
    const docRef = doc(invoicesCollection, invoice.id);

    await setDoc(docRef, {
      invoiceId: invoice.id,
      customerId: invoice.customer,
      subscriptionId: invoice.subscription,
      amountPaid: invoice.amount_paid,
      currency: invoice.currency,
      status: invoice.status,
      customerEmail: invoice.customer_email,
      createdAt: Timestamp.fromDate(new Date(invoice.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "invoice.payment_succeeded",
    });

    console.log("Invoice payment processed:", invoice.id);
  } catch (error) {
    console.error("Error processing invoice payment:", error);
    throw error;
  }
}

async function handleSubscriptionCreated(subscription) {
  console.log("Processing new subscription:", subscription.id);

  try {
    const subscriptionsCollection = collection(db, "subscriptions");
    const docRef = doc(subscriptionsCollection, subscription.id);

    await setDoc(docRef, {
      subscriptionId: subscription.id,
      customerId: subscription.customer,
      status: subscription.status,
      currentPeriodStart: Timestamp.fromDate(
        new Date(subscription.current_period_start * 1000),
      ),
      currentPeriodEnd: Timestamp.fromDate(
        new Date(subscription.current_period_end * 1000),
      ),
      items: subscription.items.data.map((item) => ({
        priceId: item.price.id,
        productId: item.price.product,
        quantity: item.quantity,
      })),
      createdAt: Timestamp.fromDate(new Date(subscription.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "customer.subscription.created",
    });

    console.log("Subscription created:", subscription.id);
  } catch (error) {
    console.error("Error processing subscription creation:", error);
    throw error;
  }
}

async function handleSubscriptionUpdated(subscription) {
  console.log("Processing subscription update:", subscription.id);

  try {
    const subscriptionsCollection = collection(db, "subscriptions");
    const docRef = doc(subscriptionsCollection, subscription.id);

    // Update existing subscription document
    await setDoc(
      docRef,
      {
        subscriptionId: subscription.id,
        customerId: subscription.customer,
        status: subscription.status,
        currentPeriodStart: Timestamp.fromDate(
          new Date(subscription.current_period_start * 1000),
        ),
        currentPeriodEnd: Timestamp.fromDate(
          new Date(subscription.current_period_end * 1000),
        ),
        items: subscription.items.data.map((item) => ({
          priceId: item.price.id,
          productId: item.price.product,
          quantity: item.quantity,
        })),
        updatedAt: Timestamp.now(),
        eventType: "customer.subscription.updated",
      },
      { merge: true },
    );

    console.log("Subscription updated:", subscription.id);
  } catch (error) {
    console.error("Error processing subscription update:", error);
    throw error;
  }
}

async function handleSubscriptionDeleted(subscription) {
  console.log("Processing subscription deletion:", subscription.id);

  try {
    const subscriptionsCollection = collection(db, "subscriptions");
    const docRef = doc(subscriptionsCollection, subscription.id);

    await setDoc(
      docRef,
      {
        status: "canceled",
        canceledAt: Timestamp.now(),
        eventType: "customer.subscription.deleted",
      },
      { merge: true },
    );

    console.log("Subscription deleted:", subscription.id);
  } catch (error) {
    console.error("Error processing subscription deletion:", error);
    throw error;
  }
}

async function sendPaymentSuccessEmail({
  email,
  name,
  amount,
  currency,
  paymentIntentId,
  productName,
  receiptUrl,
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    const emailData = {
      name,
      amount: (amount / 100).toFixed(2), // Convert from cents
      currency: currency.toUpperCase(),
      paymentIntentId,
      productName,
      receiptUrl,
    };

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: email,
      subject: `Payment Confirmation - ${productName}`,
      react: PaymentSuccessEmail(emailData),
    });

    console.log("Payment success email sent to:", email);
  } catch (error) {
    console.error("Error sending payment success email:", error);
  }
}

async function sendPaymentFailedEmail({
  email,
  name,
  amount,
  currency,
  paymentIntentId,
  error,
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: email,
      cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
      subject: "Payment Failed - Please Try Again",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Payment Failed</h2>
          <p>Hi ${name},</p>
          <p>We were unable to process your payment of ${currency.toUpperCase()} ${(amount / 100).toFixed(2)}.</p>
          <p><strong>Payment ID:</strong> ${paymentIntentId}</p>
          ${error ? `<p><strong>Error:</strong> ${error}</p>` : ""}
          <p>Please try again or contact our support team if you continue to experience issues.</p>
          <p>Best regards,<br>Tracking Academy Team</p>
        </div>
      `,
    });

    console.log("Payment failed email sent to:", email);
  } catch (error) {
    console.error("Error sending payment failed email:", error);
  }
}
