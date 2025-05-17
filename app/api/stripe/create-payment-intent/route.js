// src/app/api/stripe/create-payment-intent/route.js
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { priceId, promotionCode } = body;

    // Get the Stripe price to retrieve the amount
    const price = await stripe.prices.retrieve(priceId);

    if (!price || !price.unit_amount) {
      throw new Error("Invalid price object from Stripe");
    }

    let finalAmount = price.unit_amount;
    let discountAmount = 0;
    let promoDetails = null;

    // Add promotion code if provided
    if (promotionCode) {
      // Validate promotion code
      const promotionCodes = await stripe.promotionCodes.list({
        code: promotionCode,
        active: true,
      });

      if (promotionCodes.data.length > 0) {
        const validPromo = promotionCodes.data[0];

        // Get the coupon details
        const coupon = await stripe.coupons.retrieve(validPromo.coupon.id);

        // Calculate discount
        if (coupon.amount_off) {
          discountAmount = coupon.amount_off;
        } else if (coupon.percent_off) {
          discountAmount = Math.round(
            (price.unit_amount * coupon.percent_off) / 100,
          );
        }

        // Calculate final amount
        finalAmount = Math.max(1, price.unit_amount - discountAmount);

        promoDetails = {
          id: validPromo.id,
          code: promotionCode,
          amountOff: discountAmount,
          active: true,
        };
      } else {
        return NextResponse.json(
          { error: "Invalid or expired promotion code" },
          { status: 400 },
        );
      }
    }

    // Create the payment intent with the calculated amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency: price.currency || "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        priceId,
        productName: "3-Day See Every Sale Tracking System",
        ...(promoDetails && {
          appliedPromoCode: promotionCode,
          originalAmount: price.unit_amount,
          discountAmount,
        }),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      ...(promoDetails && { promoDetails }),
    });
  } catch (err) {
    console.error("Payment Intent creation error:", err);
    return NextResponse.json(
      { error: err.message || "Payment Intent failed" },
      { status: 500 },
    );
  }
}
