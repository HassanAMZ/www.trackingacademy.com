// src/app/api/stripe/apply-promo/route.js
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { priceId, promotionCode } = body;

    if (!promotionCode) {
      return NextResponse.json(
        { error: "Promotion code is required" },
        { status: 400 },
      );
    }

    // Get the Stripe price to retrieve the amount
    const price = await stripe.prices.retrieve(priceId);
    if (!price || !price.unit_amount) {
      throw new Error("Invalid price object from Stripe");
    }

    // Validate promotion code
    const promotionCodes = await stripe.promotionCodes.list({
      code: promotionCode,
      active: true,
    });

    if (promotionCodes.data.length === 0) {
      return NextResponse.json(
        { error: "Invalid or expired promotion code" },
        { status: 400 },
      );
    }

    const validPromo = promotionCodes.data[0];

    // Get the coupon details to calculate discount amount
    const coupon = await stripe.coupons.retrieve(validPromo.coupon.id);

    // Calculate discount amount
    let amountOff = 0;
    if (coupon.amount_off) {
      amountOff = coupon.amount_off;
    } else if (coupon.percent_off) {
      amountOff = Math.round((price.unit_amount * coupon.percent_off) / 100);
    }

    // Calculate final amount after discount
    const finalAmount = Math.max(1, price.unit_amount - amountOff); // Ensure minimum 1 cent

    // Create a new payment intent with the discounted amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency: price.currency || "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        priceId,
        productName: "3-Day See Every Sale Tracking System",
        appliedPromoCode: promotionCode,
        originalAmount: price.unit_amount,
        discountAmount: amountOff,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      promoDetails: {
        id: validPromo.id,
        code: promotionCode,
        amountOff: amountOff,
        active: true,
      },
    });
  } catch (err) {
    console.error("Promo application error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to apply promotion code" },
      { status: 500 },
    );
  }
}
