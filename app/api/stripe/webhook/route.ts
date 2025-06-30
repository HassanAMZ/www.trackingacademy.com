import { NextResponse } from "next/server";
import { db } from "@/app/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import {
  InvoicePaymentSuccessEmailData,
  PaymentFailedEmailData,
  PaymentSuccessEmailData,
  sendInvoicePaymentSuccessEmail,
  sendPaymentFailedEmail,
  sendPaymentSuccessEmail,
  sendSubscriptionCreatedEmail,
  SubscriptionCreatedEmailData,
} from "@/lib/emails/email-services";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(body, signature!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", (err as Error).message);
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
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
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: any) {
  console.log("Processing successful payment:", paymentIntent.id);

  try {
    // Get customer details from the payment intent
    let customerDetails: any = {};

    // Expand the customer if it exists
    if (paymentIntent.customer) {
      const customer = await stripe.customers.retrieve(paymentIntent.customer);
      if (!customer.deleted) {
        customerDetails = {
          email: customer.email,
          name: customer.name,
          phone: customer.phone,
        };
      }
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
      const emailData: PaymentSuccessEmailData = {
        email: customerDetails.email,
        name: customerDetails.name || "Customer",
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntentId: paymentIntent.id,
        productName: paymentIntent.metadata?.productName || "Digital Product",
        receiptUrl: paymentIntent.charges?.data?.[0]?.receipt_url,
      };

      await sendPaymentSuccessEmail(emailData);
    }

    console.log("Payment processed successfully:", paymentIntent.id);
  } catch (error) {
    console.error("Error processing successful payment:", error);
    throw error;
  }
}

async function handlePaymentIntentFailed(paymentIntent: any) {
  console.log("Processing failed payment:", paymentIntent.id);

  try {
    // Get customer details
    let customerDetails: any = {};
    if (paymentIntent.customer) {
      const customer = await stripe.customers.retrieve(paymentIntent.customer);
      if (!customer.deleted) {
        customerDetails = {
          email: customer.email,
          name: customer.name,
        };
      }
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

    // Send payment failed email
    if (customerDetails.email) {
      const emailData: PaymentFailedEmailData = {
        email: customerDetails.email,
        name: customerDetails.name || "Customer",
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntentId: paymentIntent.id,
        error: paymentIntent.last_payment_error?.message,
      };

      await sendPaymentFailedEmail(emailData);
    }

    console.log("Failed payment logged:", paymentIntent.id);
  } catch (error) {
    console.error("Error processing failed payment:", error);
    throw error;
  }
}

async function handleCheckoutSessionCompleted(session: any) {
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

async function handleInvoicePaymentSucceeded(invoice: any) {
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

    // Send invoice payment success email
    if (invoice.customer_email) {
      // Get customer name
      let customerName = "Customer";
      if (invoice.customer) {
        try {
          const customer = await stripe.customers.retrieve(invoice.customer);
          if (!customer.deleted) {
            customerName = customer.name || "Customer";
          }
        } catch (error) {
          console.warn("Could not retrieve customer name:", error);
        }
      }

      const emailData: InvoicePaymentSuccessEmailData = {
        email: invoice.customer_email,
        name: customerName,
        amount: invoice.amount_paid,
        currency: invoice.currency,
        invoiceId: invoice.id,
        subscriptionId: invoice.subscription,
      };

      await sendInvoicePaymentSuccessEmail(emailData);
    }

    console.log("Invoice payment processed:", invoice.id);
  } catch (error) {
    console.error("Error processing invoice payment:", error);
    throw error;
  }
}

async function handleSubscriptionCreated(subscription: any) {
  console.log("Processing new subscription:", subscription.id);

  try {
    const subscriptionsCollection = collection(db, "subscriptions");
    const docRef = doc(subscriptionsCollection, subscription.id);

    await setDoc(docRef, {
      subscriptionId: subscription.id,
      customerId: subscription.customer,
      status: subscription.status,
      currentPeriodStart: Timestamp.fromDate(new Date(subscription.current_period_start * 1000)),
      currentPeriodEnd: Timestamp.fromDate(new Date(subscription.current_period_end * 1000)),
      items: subscription.items.data.map((item: any) => ({
        priceId: item.price.id,
        productId: item.price.product,
        quantity: item.quantity,
      })),
      createdAt: Timestamp.fromDate(new Date(subscription.created * 1000)),
      processedAt: Timestamp.now(),
      eventType: "customer.subscription.created",
    });

    // Send subscription created email
    if (subscription.customer) {
      try {
        const customer = await stripe.customers.retrieve(subscription.customer);

        if (!customer.deleted && customer.email) {
          // Get plan details
          const firstItem = subscription.items.data[0];
          let planName = "Subscription Plan";
          let amount = 0;

          if (firstItem) {
            const price = await stripe.prices.retrieve(firstItem.price.id);
            const product = await stripe.products.retrieve(price.product as string);
            planName = product.name;
            amount = price.unit_amount || 0;
          }

          const emailData: SubscriptionCreatedEmailData = {
            email: customer.email,
            name: customer.name || "Customer",
            subscriptionId: subscription.id,
            planName,
            amount,
            currency: subscription.currency || "usd",
            nextBillingDate: new Date(subscription.current_period_end * 1000),
          };

          await sendSubscriptionCreatedEmail(emailData);
        }
      } catch (error) {
        console.warn("Could not send subscription created email:", error);
      }
    }

    console.log("Subscription created:", subscription.id);
  } catch (error) {
    console.error("Error processing subscription creation:", error);
    throw error;
  }
}

async function handleSubscriptionUpdated(subscription: any) {
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
        currentPeriodStart: Timestamp.fromDate(new Date(subscription.current_period_start * 1000)),
        currentPeriodEnd: Timestamp.fromDate(new Date(subscription.current_period_end * 1000)),
        items: subscription.items.data.map((item: any) => ({
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

async function handleSubscriptionDeleted(subscription: any) {
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
