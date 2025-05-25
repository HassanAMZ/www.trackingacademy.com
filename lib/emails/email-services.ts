import InvoicePaymentSuccessEmail from "@/components/emails/stripe-invoice-payment-success";
import PaymentFailedEmail from "@/components/emails/stripe-payment-failed";
import PaymentSuccessEmail from "@/components/emails/stripe-payment-success";
import SubscriptionCreatedEmail from "@/components/emails/stripe-subscription-created";
import { Resend } from "resend";

// Ensure Resend API Key exists
if (!process.env.RESEND_API_KEY) {
  console.error("Missing Resend API Key");
  throw new Error("Internal server error");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface PaymentSuccessEmailData {
  email: string;
  name: string;
  amount: number;
  currency: string;
  paymentIntentId: string;
  productName: string;
  receiptUrl?: string;
}

export interface PaymentFailedEmailData {
  email: string;
  name: string;
  amount: number;
  currency: string;
  paymentIntentId: string;
  error?: string;
}

export interface InvoicePaymentSuccessEmailData {
  email: string;
  name: string;
  amount: number;
  currency: string;
  invoiceId: string;
  subscriptionId?: string;
}

export interface SubscriptionCreatedEmailData {
  email: string;
  name: string;
  subscriptionId: string;
  planName: string;
  amount: number;
  currency: string;
  nextBillingDate: Date;
}

export async function sendPaymentSuccessEmail(data: PaymentSuccessEmailData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    const emailData = {
      name: data.name,
      amount: (data.amount / 100).toFixed(2), // Convert from cents
      currency: data.currency.toUpperCase(),
      paymentIntentId: data.paymentIntentId,
      productName: data.productName,
      receiptUrl: data.receiptUrl,
    };

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@trackingacademy.com"],

      subject: `Payment Confirmation - ${data.productName}`,
      react: PaymentSuccessEmail(emailData),
    });

    console.log("Payment success email sent to:", data.email);
  } catch (error) {
    console.error("Error sending payment success email:", error);
    throw error;
  }
}

export async function sendPaymentFailedEmail(data: PaymentFailedEmailData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    const emailData = {
      name: data.name,
      amount: (data.amount / 100).toFixed(2),
      currency: data.currency.toUpperCase(),
      paymentIntentId: data.paymentIntentId,
      error: data.error,
    };

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@trackingacademy.com"],

      subject: "Payment Failed - Please Try Again",
      react: PaymentFailedEmail(emailData),
    });

    console.log("Payment failed email sent to:", data.email);
  } catch (error) {
    console.error("Error sending payment failed email:", error);
    throw error;
  }
}

export async function sendInvoicePaymentSuccessEmail(
  data: InvoicePaymentSuccessEmailData,
) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    const emailData = {
      name: data.name,
      amount: (data.amount / 100).toFixed(2),
      currency: data.currency.toUpperCase(),
      invoiceId: data.invoiceId,
      subscriptionId: data.subscriptionId,
    };

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@trackingacademy.com"],

      subject: "Invoice Payment Confirmation",
      react: InvoicePaymentSuccessEmail(emailData),
    });

    console.log("Invoice payment success email sent to:", data.email);
  } catch (error) {
    console.error("Error sending invoice payment success email:", error);
    throw error;
  }
}

export async function sendSubscriptionCreatedEmail(
  data: SubscriptionCreatedEmailData,
) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Resend API key not configured, skipping email");
      return;
    }

    const emailData = {
      name: data.name,
      subscriptionId: data.subscriptionId,
      planName: data.planName,
      amount: (data.amount / 100).toFixed(2),
      currency: data.currency.toUpperCase(),
      nextBillingDate: data.nextBillingDate,
    };

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@trackingacademy.com"],

      subject: `Welcome to ${data.planName} - Subscription Confirmed`,
      react: SubscriptionCreatedEmail(emailData),
    });

    console.log("Subscription created email sent to:", data.email);
  } catch (error) {
    console.error("Error sending subscription created email:", error);
    throw error;
  }
}
