// src/app/api/stripe/apply-promo/route.js
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req) {
  try {
    const body = await req.json();
    const { priceId, promotionCode } = body;

    if (!promotionCode || !priceId) {
      return NextResponse.json(
        { error: "Promotion code and price ID are required" },
        { status: 400 },
      );
    }

    // Get the Stripe price to retrieve the amount and product
    const price = await stripe.prices.retrieve(priceId, {
      expand: ["product"],
    });

    if (!price || !price.unit_amount) {
      throw new Error("Invalid price object from Stripe");
    }

    // Validate promotion code exists and is active
    const promotionCodes = await stripe.promotionCodes.list({
      code: promotionCode,
      active: true,
    });

    if (promotionCodes.data.length === 0) {
      return NextResponse.json({ error: "Invalid or expired promotion code" }, { status: 400 });
    }

    const validPromo = promotionCodes.data[0];

    // Get the coupon details to validate restrictions
    const coupon = await stripe.coupons.retrieve(validPromo.coupon.id);

    // Check if the coupon is restricted to specific products
    if (coupon.applies_to && coupon.applies_to.products) {
      const productId = typeof price.product === "string" ? price.product : price.product.id;

      if (!coupon.applies_to.products.includes(productId)) {
        return NextResponse.json(
          { error: "This promotion code is not valid for this product" },
          { status: 400 },
        );
      }
    }

    // Validate other coupon restrictions
    if (coupon.currency && coupon.currency !== price.currency) {
      return NextResponse.json(
        { error: "This promotion code cannot be used with this currency" },
        { status: 400 },
      );
    }

    // Check if coupon has usage limits
    if (coupon.max_redemptions && coupon.times_redeemed >= coupon.max_redemptions) {
      return NextResponse.json(
        { error: "This promotion code has reached its usage limit" },
        { status: 400 },
      );
    }

    // Calculate discount amount
    let amountOff = 0;
    if (coupon.amount_off) {
      amountOff = coupon.amount_off;
    } else if (coupon.percent_off) {
      amountOff = Math.round((price.unit_amount * coupon.percent_off) / 100);
    }

    // Calculate final amount after discount
    const finalAmount = Math.max(50, price.unit_amount - amountOff); // Minimum 50 cents for Stripe

    // Create a new payment intent with the discounted amount
    // Note: We store the promotion details in metadata since Stripe PaymentIntents
    // don't directly accept promotion codes - the discount is already calculated
    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency: price.currency || "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        priceId,
        collect_billing_details: "auto",

        productId: typeof price.product === "string" ? price.product : price.product.id,
        productName: typeof price.product === "string" ? "Product" : price.product.name,
        appliedPromoCode: promotionCode,
        promoCodeId: validPromo.id,
        promoCouponId: coupon.id,
        originalAmount: price.unit_amount.toString(),
        discountAmount: amountOff.toString(),
        finalAmount: finalAmount.toString(),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      promoDetails: {
        id: validPromo.id,
        code: promotionCode,
        amountOff: amountOff,
        percentOff: coupon.percent_off,
        active: true,
        couponId: coupon.id,
        finalAmount: finalAmount,
      },
    });
  } catch (err) {
    console.error("Promo application error:", err);

    // Handle specific Stripe errors
    if (err.type === "StripeCardError") {
      return NextResponse.json({ error: "Card error: " + err.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: err.message || "Failed to apply promotion code" },
      { status: 500 },
    );
  }
}
