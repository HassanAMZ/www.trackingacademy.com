"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { CheckCircle, Loader2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  unitAmount: number;
  priceId: string;
}

export interface PromoCode {
  id: string;
  code: string;
  amountOff: number;
  active: boolean;
}

export interface PaymentInfo {
  amount: number;
  currency: string;
  paymentId: string;
  status?: string;
}

export interface BillingDetails {
  name?: string;
  email?: string;
  phone?: string;
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
  };
}

export interface PaymentFormProps {
  clientSecret: string;
  productDetails: Product & {
    finalAmount: string;
  };
}

export interface ProductDetailsProps {
  product: Product;
  appliedPromo: PromoCode | null;
  currency?: string;
}

export interface PromoCodeFormProps {
  onApply: (code: string) => void;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);

// Product details component
const ProductDetails = ({
  product,
  appliedPromo,
  currency = "USD",
}: ProductDetailsProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });

  // Calculate display amounts
  const originalAmount = formatter.format(product.unitAmount / 100);
  const discountAmount = appliedPromo
    ? formatter.format(appliedPromo.amountOff / 100)
    : null;
  const finalAmount = appliedPromo
    ? formatter.format((product.unitAmount - appliedPromo.amountOff) / 100)
    : originalAmount;

  return (
    <div className="bg-muted space-y-4 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <span className="text-lg font-bold">{originalAmount}</span>
      </div>

      <p className="text-muted-foreground text-sm">{product.description}</p>

      {appliedPromo && (
        <div className="bg-accent border-accent rounded border p-3">
          <div className="flex items-center justify-between">
            <span className="text-accent-foreground font-medium">
              Promo: {appliedPromo.code}
            </span>
            <span className="text-accent-foreground">-{discountAmount}</span>
          </div>
        </div>
      )}

      <Separator />

      <div className="flex items-center justify-between pt-2">
        <span className="font-medium">Total</span>
        <span className="text-xl font-bold">{finalAmount}</span>
      </div>
    </div>
  );
};

// Promo code form with success indicator
const PromoCodeForm = ({
  onApply,
  isLoading,
  error,
  success,
}: PromoCodeFormProps) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onApply(code);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter promo code"
          className="flex-1"
          disabled={isLoading || success}
        />
        <Button
          type="submit"
          variant="outline"
          disabled={isLoading || !code.trim() || success}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : success ? (
            <CheckCircle className="text-primary h-4 w-4" />
          ) : (
            "Apply"
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="py-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-accent border-accent py-2">
          <AlertDescription className="text-accent-foreground">
            Promo code applied successfully!
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
};

// Payment form using Stripe Elements
const CheckoutForm = ({ clientSecret, productDetails }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setPaymentError("");

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
          payment_method_data: {
            billing_details: {
              name: productDetails.name,
            },
          },
        },
      });

      if (error) {
        setPaymentError(error.message || "Payment failed. Please try again.");
      }
    } catch (err) {
      setPaymentError("An unexpected error occurred. Please try again.");
      console.error("Payment submission error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <PaymentElement />

      {paymentError && (
        <Alert variant="destructive">
          <AlertDescription>{paymentError}</AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={!stripe || isProcessing}
        size="lg"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay ${productDetails.finalAmount}`
        )}
      </Button>
    </form>
  );
};

// Main checkout page component
const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  // Initial product and payment intent fetch
  useEffect(() => {
    const initCheckout = async () => {
      try {
        // Fetch product details
        const productRes = await fetch("/api/stripe/get-product", {
          method: "GET",
        });
        if (!productRes.ok) throw new Error("Failed to load product");
        const productData = await productRes.json();
        setProduct(productData);

        // Create initial payment intent
        const paymentRes = await fetch("/api/stripe/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId: productData.priceId,
          }),
        });
        if (!paymentRes.ok) throw new Error("Failed to initialize payment");
        const { clientSecret } = await paymentRes.json();
        setClientSecret(clientSecret);
      } catch (err) {
        console.error("Checkout initialization error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initCheckout();
  }, []);

  // Handle promo code application
  const handleApplyPromoCode = async (code: string) => {
    setIsApplyingPromo(true);
    setPromoError("");
    setPromoSuccess(false);

    try {
      const res = await fetch("/api/stripe/apply-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: product?.priceId,
          promotionCode: code,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPromoError(data.error || "Failed to apply promo code");
        return;
      }

      // Update client secret and promo details
      setClientSecret(data.clientSecret);
      setAppliedPromo(data.promoDetails);
      setPromoSuccess(true);
    } catch (err) {
      console.error("Promo application error:", err);
      setPromoError("An unexpected error occurred. Please try again.");
    } finally {
      setIsApplyingPromo(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
        <span className="ml-2">Loading checkout...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto max-w-md p-6">
        <Alert variant="destructive">
          <AlertDescription>
            Failed to load product information. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const calculatedProductDetails = {
    ...product,
    finalAmount: appliedPromo
      ? `$${((product.unitAmount - appliedPromo.amountOff) / 100).toFixed(2)}`
      : `$${(product.unitAmount / 100).toFixed(2)}`,
  };

  const elementsOptions: StripeElementsOptions = {
    clientSecret: clientSecret || undefined,
    appearance: { theme: "stripe" },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">Checkout</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product info and promo section */}
          <div className="space-y-6">
            <ProductDetails product={product} appliedPromo={appliedPromo} />

            <Card className="p-4">
              <h3 className="mb-3 font-medium">Have a promo code?</h3>
              <PromoCodeForm
                onApply={handleApplyPromoCode}
                isLoading={isApplyingPromo}
                error={promoError}
                success={promoSuccess}
              />
            </Card>
          </div>

          {/* Payment section */}
          <div>
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Payment Details</h2>
              {clientSecret ? (
                <Elements stripe={stripePromise} options={elementsOptions}>
                  <CheckoutForm
                    clientSecret={clientSecret}
                    productDetails={calculatedProductDetails}
                  />
                </Elements>
              ) : (
                <div className="flex justify-center">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
