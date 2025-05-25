// src/app/api/stripe/stripe-email/route.js
import { db } from "@/app/firebase";
import {
  PaymentSuccessEmailData,
  sendPaymentSuccessEmail,
} from "@/lib/emails/email-services";
import { stripe } from "@/lib/stripe";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { paymentIntentId, fallbackData } = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: "Missing payment_intent parameter" },
        { status: 400 },
      );
    }

    // Check if email was already sent for this payment
    const emailLogRef = doc(db, "email-logs", paymentIntentId);
    const emailLogDoc = await getDoc(emailLogRef);

    if (emailLogDoc.exists()) {
      console.log(`Email already sent for payment: ${paymentIntentId}`);
      return NextResponse.json({
        success: true,
        message: "Email already sent",
        alreadySent: true,
      });
    }

    // Retrieve the payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId,
      {
        expand: ["customer", "payment_method", "charges"],
      },
    );

    // Verify the payment was successful
    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json(
        { error: "Payment was not successful", status: paymentIntent.status },
        { status: 400 },
      );
    }

    // Extract customer information with fallback to localStorage data
    let customerEmail = null;
    let customerName = null;
    let customerPhone = null;

    // Try to get from Stripe first
    if (paymentIntent.customer && typeof paymentIntent.customer === "object") {
      customerEmail = paymentIntent.customer.email;
      customerName = paymentIntent.customer.name;
      customerPhone = paymentIntent.customer.phone;
    }

    // Try from charges billing details
    if (paymentIntent.charges?.data?.length > 0) {
      const charge = paymentIntent.charges.data[0];
      if (charge.billing_details) {
        customerEmail = customerEmail || charge.billing_details.email;
        customerName = customerName || charge.billing_details.name;
        customerPhone = customerPhone || charge.billing_details.phone;
      }
    }

    // Try from receipt email
    customerEmail = customerEmail || paymentIntent.receipt_email;

    // Use fallback data from localStorage if still missing
    if (fallbackData) {
      customerEmail = customerEmail || fallbackData.email_address;
      customerName = customerName || fallbackData.name;
      customerPhone = customerPhone || fallbackData.phone_number;
    }

    // Must have email to send
    if (!customerEmail) {
      return NextResponse.json(
        { error: "No customer email found in payment data or fallback" },
        { status: 400 },
      );
    }

    // Prepare email data
    const emailData = {
      email: customerEmail,
      name: customerName || "Customer",
      amount: paymentIntent.amount_received || paymentIntent.amount,
      currency: paymentIntent.currency,
      paymentIntentId: paymentIntent.id,
      productName: paymentIntent.metadata?.productName || "Digital Product",
      receiptUrl: paymentIntent.charges?.data?.[0]?.receipt_url,
      // Add any additional data you need for your email template
      phone: customerPhone,
      metadata: paymentIntent.metadata || {},
    };

    // Send the email
    await sendPaymentSuccessEmail(emailData);

    // Log that email was sent to prevent duplicates
    await setDoc(emailLogRef, {
      paymentIntentId: paymentIntent.id,
      emailSent: true,
      recipientEmail: customerEmail,
      recipientName: customerName,
      sentAt: Timestamp.now(),
      emailType: "payment_success",
      fallbackDataUsed: {
        email:
          !paymentIntent.customer?.email &&
          !paymentIntent.charges?.data?.[0]?.billing_details?.email &&
          !paymentIntent.receipt_email,
        name:
          !paymentIntent.customer?.name &&
          !paymentIntent.charges?.data?.[0]?.billing_details?.name,
        phone:
          !paymentIntent.customer?.phone &&
          !paymentIntent.charges?.data?.[0]?.billing_details?.phone,
      },
    });

    console.log(
      `Success email sent to ${customerEmail} for payment ${paymentIntentId}`,
    );

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      recipient: customerEmail,
      paymentIntentId: paymentIntentId,
    });
  } catch (error) {
    console.error("Error sending payment success email:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
