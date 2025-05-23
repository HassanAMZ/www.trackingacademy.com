// src/app/api/stripe/payment-info/route.js
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get("payment_intent");

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: "Missing payment_intent parameter" },
        { status: 400 },
      );
    }

    console.log("Fetching payment intent:", paymentIntentId);

    // Retrieve the payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId,
      {
        expand: ["customer", "payment_method"],
      },
    );

    console.log("Payment intent status:", paymentIntent.status);

    // Verify the payment was successful
    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json(
        { error: "Payment was not successful" },
        { status: 400 },
      );
    }

    // Extract customer information
    let customerDetails = {};

    // If there's a customer object, get details from there
    if (paymentIntent.customer && typeof paymentIntent.customer === "object") {
      customerDetails = {
        email: paymentIntent.customer.email,
        name: paymentIntent.customer.name,
        phone: paymentIntent.customer.phone,
      };
    }

    // If no customer object but we have charges, get from billing details
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
      metadata: paymentIntent.metadata,

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

      // Charges information
      charges:
        paymentIntent.charges?.data?.map((charge) => ({
          id: charge.id,
          amount: charge.amount,
          currency: charge.currency,
          paid: charge.paid,
          receipt_url: charge.receipt_url,
          billing_details: charge.billing_details,
          payment_method_details: charge.payment_method_details,
        })) || [],

      // Additional useful information
      confirmation_method: paymentIntent.confirmation_method,
      payment_method_types: paymentIntent.payment_method_types,
      receipt_email: paymentIntent.receipt_email,
    };

    console.log("Payment data retrieved successfully:", {
      id: response.id,
      amount: response.amount_received,
      email: customerDetails.email,
      name: customerDetails.name,
    });

    return NextResponse.json(response);
  } catch (err) {
    console.error("Error fetching payment information:", err);

    // Return detailed error information
    return NextResponse.json(
      {
        error: "Failed to fetch payment information",
        details: err.message,
        type: err.type || "unknown_error",
      },
      { status: 500 },
    );
  }
}
