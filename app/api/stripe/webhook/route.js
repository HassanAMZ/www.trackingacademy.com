// src/app/api/stripe/webhook/route.js
import { db } from "@/app/firebase";
import CouponRequestEmail from "@/components/emails/coupon-request";
import { stripe } from "@/lib/stripe";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.text();
    const headersList = headers();
    const signature = headersList.get("stripe-signature");
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
    } // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    ); // Handle specific event types
    if (
      event.type === "checkout.session.completed" ||
      event.type === "payment_intent.succeeded"
    ) {
      await handleSuccessfulPayment(event);
    }
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 },
    );
  }
}

async function handleSuccessfulPayment(event) {
  try {
    // Extract payment data
    const paymentData =
      event.type === "checkout.session.completed"
        ? event.data.object
        : event.data.object; // Extract customer details
    const customerId = paymentData.customer;
    const paymentIntentId = paymentData.id;
    const amount = paymentData.amount;
    const createdAt = new Date(paymentData.created * 1000); // Get customer information from Stripe
    const customer = await stripe.customers.retrieve(customerId); // Get payment intent to access metadata
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    const metadata = paymentIntent.metadata || {};
    const appliedPromoCode = metadata.appliedPromoCode || null; // Create entry in Firebase
    const payments = collection(db, "payments");
    const docRef = doc(payments, paymentIntentId);
    const paymentRecord = {
      paymentIntentId,
      customerId,
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      amount,
      currency: paymentData.currency,
      status: paymentData.status,
      createdAt: Timestamp.fromDate(createdAt),
      metadata: metadata,
      promotionCode: appliedPromoCode,
      productName:
        metadata.productName || "3-Day See Every Sale Tracking System",
    }; // Save to Firestore
    await setDoc(docRef, paymentRecord); // Send confirmation email if Resend API key is available
    if (process.env.RESEND_API_KEY && customer.email) {
      const resend = new Resend(process.env.RESEND_API_KEY); // Format data for email
      const emailData = {
        name: customer.name || "Customer",
        email: customer.email,
        phone: customer.phone || "",
        couponCode: appliedPromoCode || "N/A",
        createdAt: Timestamp.fromDate(createdAt),
      }; // Send thank you/welcome email
      await resend.emails.send({
        from: "no-reply@trackingacademy.com",
        to: customer.email,
        cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
        subject: `Thank You for Your Purchase, ${customer.name || "Valued Customer"}!`,
        react: CouponRequestEmail(emailData), // Could use a different email template
      });
    }
    console.log(`Successfully processed payment: ${paymentIntentId}`);
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
}
