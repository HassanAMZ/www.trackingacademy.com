"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url:
          "http://localhost:3000/landing-page/3-days-see-every-sale/success",
        receipt_email: email,
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message || "An error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion" as const,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PaymentElement options={paymentElementOptions} />
      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full"
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Pay now
      </Button>
      {message && <div className="text-destructive text-sm">{message}</div>}
    </form>
  );
}

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const appearance: { theme: "flat" | "stripe" | "night" | undefined } = {
    theme: "stripe",
  };

  return (
    <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
      <PaymentForm />
    </Elements>
  );
}
