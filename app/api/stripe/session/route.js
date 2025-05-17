import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  if (!session_id) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    return NextResponse.json({
      id: session.id,
      customer_email: session.customer_details?.email,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
    });
  } catch (err) {
    console.error("Stripe session fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch session" },
      { status: 500 },
    );
  }
}
