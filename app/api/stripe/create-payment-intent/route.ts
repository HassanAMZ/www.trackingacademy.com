import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { priceId, productId, promotionCode } = await req.json();

    if (!priceId || !productId) {
      return NextResponse.json(
        { error: "Missing priceId or productId" },
        { status: 400 },
      );
    }

    let discountId: string | undefined;

    // If a promotion code is provided
    if (promotionCode) {
      const promoList = await stripe.promotionCodes.list({
        code: promotionCode,
        active: true,
      });

      const promo = promoList.data[0];
      if (!promo) {
        return NextResponse.json(
          { error: "Invalid or expired promotion code" },
          { status: 400 },
        );
      }

      const coupon = await stripe.coupons.retrieve(promo.coupon.id);

      // 🔐 Validate that the promo applies to this product
      const price = await stripe.prices.retrieve(priceId, {
        expand: ["product"],
      });

      const targetProductId =
        typeof price.product === "string" ? price.product : price.product.id;

      if (
        coupon.applies_to &&
        coupon.applies_to.products &&
        !coupon.applies_to.products.includes(targetProductId)
      ) {
        return NextResponse.json(
          { error: "This promotion code is not valid for this product" },
          { status: 400 },
        );
      }

      discountId = promo.id;
    }

    // Retrieve the price to get the amount
    const price = await stripe.prices.retrieve(priceId);

    if (!price.unit_amount) {
      return NextResponse.json(
        { error: "Invalid price or missing amount" },
        { status: 400 },
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        productId,
        priceId,
      },
      ...(discountId && { discounts: [{ promotion_code: discountId }] }),
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error("Error creating payment intent:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
