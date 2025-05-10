import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    customer_email: email,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?payment_intent={CHECKOUT_SESSION:PAYMENT_INTENT}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  });

  return NextResponse.json({ url: session.url });
}
