// src/app/api/stripe/payment-info/route.js
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get("payment_intent");

    if (!paymentIntentId) {
      return NextResponse.json({ error: "Missing payment_intent parameter" }, { status: 400 });
    }

    // Retrieve the payment intent from Stripe with expanded data
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ["customer", "payment_method", "charges"],
    });

    // Verify the payment was successful
    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json(
        {
          error: "Payment was not successful",
          status: paymentIntent.status,
          id: paymentIntent.id,
        },
        { status: 400 },
      );
    }

    // Extract customer information from multiple sources
    let customerDetails = {};

    // Try to get customer info from customer object
    if (paymentIntent.customer && typeof paymentIntent.customer === "object") {
      customerDetails = {
        email: paymentIntent.customer.email,
        name: paymentIntent.customer.name,
        phone: paymentIntent.customer.phone,
      };
    }

    // Try to get customer info from charges billing details
    if (paymentIntent.charges?.data?.length > 0) {
      const charge = paymentIntent.charges.data[0];
      if (charge.billing_details) {
        customerDetails = {
          email: customerDetails.email || charge.billing_details.email,
          name: customerDetails.name || charge.billing_details.name,
          phone: customerDetails.phone || charge.billing_details.phone,
          address: charge.billing_details.address,
        };
      }
    }

    // Try to get customer info from latest charge if not found yet
    if (paymentIntent.latest_charge && (!customerDetails.name || !customerDetails.email)) {
      try {
        const latestCharge = await stripe.charges.retrieve(paymentIntent.latest_charge);

        if (latestCharge.billing_details) {
          customerDetails = {
            email: customerDetails.email || latestCharge.billing_details.email,
            name: customerDetails.name || latestCharge.billing_details.name,
            phone: customerDetails.phone || latestCharge.billing_details.phone,
            address: customerDetails.address || latestCharge.billing_details.address,
          };
        }
      } catch (chargeError) {
        // Silently continue if charge retrieval fails
      }
    }

    // Use receipt email as fallback
    if (!customerDetails.email && paymentIntent.receipt_email) {
      customerDetails.email = paymentIntent.receipt_email;
    }

    // Build the response object with all relevant payment information
    const response = {
      id: paymentIntent.id,
      amount_received: paymentIntent.amount_received,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      created: paymentIntent.created,
      description: paymentIntent.description,
      customer_details: customerDetails,
      metadata: paymentIntent.metadata || {},

      // Payment method information
      payment_method: paymentIntent.payment_method
        ? {
            id: paymentIntent.payment_method.id,
            type: paymentIntent.payment_method.type,
            card: paymentIntent.payment_method.card
              ? {
                  brand: paymentIntent.payment_method.card.brand,
                  last4: paymentIntent.payment_method.card.last4,
                  exp_month: paymentIntent.payment_method.card.exp_month,
                  exp_year: paymentIntent.payment_method.card.exp_year,
                }
              : null,
          }
        : null,

      // Shipping information
      shipping: paymentIntent.shipping || null,

      // Additional useful information
      confirmation_method: paymentIntent.confirmation_method,
      payment_method_types: paymentIntent.payment_method_types,
      receipt_email: paymentIntent.receipt_email,
      latest_charge: paymentIntent.latest_charge,
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error("Payment info API error:", err.message);

    // Return detailed error information
    const errorResponse = {
      error: "Failed to fetch payment information",
      details: err.message,
      type: err.type || "unknown_error",
      timestamp: new Date().toISOString(),
      stripe_error_code: err.code || null,
      stripe_error_type: err.type || null,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
