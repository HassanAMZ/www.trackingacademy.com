"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

// Load stripe outside of component to avoid recreating it on each render
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
          receipt_email: email,
          payment_method_data: {
            billing_details: {
              name,
              email,
            },
          },
        },
      });

      if (submitError) {
        if (
          submitError.type === "card_error" ||
          submitError.type === "validation_error"
        ) {
          setError(
            submitError.message || "An error occurred with your payment.",
          );
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        setIsLoading(false);
      } else {
        // The payment has been processed!
        setSuccess("Payment successful! Redirecting...");
        // The result will be handled by the return_url
      }
    } catch (e) {
      setError("Payment failed. Please try again.");
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "tabs" as const,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-12"
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12"
        />
      </div>

      <div className="rounded-lg border bg-white p-4">
        <PaymentElement options={paymentElementOptions} />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-700">Success</AlertTitle>
          <AlertDescription className="text-green-600">
            {success}
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="h-12 w-full text-base font-medium"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          "Secure Payment - $1,200"
        )}
      </Button>

      <p className="text-muted-foreground text-center text-xs">
        Your payment is secured with 256-bit SSL encryption
      </p>
    </form>
  );
}

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#0f172a",
      colorBackground: "#ffffff",
      borderRadius: "8px",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      ) : (
        <div className="p-4 text-center">
          <Loader2 className="mx-auto mb-2 h-8 w-8 animate-spin" />
          <p>Loading payment form...</p>
        </div>
      )}
    </div>
  );
}
