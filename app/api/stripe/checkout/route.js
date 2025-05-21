import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const headersList = headers();
    const origin = headersList.get("origin"); // 1) Get the price ID from the request
    const { priceId } = await request.json(); // 2) Create a checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/landing-page/success?session_id={CHECKOUT_SESSION_ID}`,
    }); // 3) Return the session URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { message: "Error creating checkout session" },
      { status: 500 },
    );
  }
}
