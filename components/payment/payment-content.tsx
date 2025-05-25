"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type {
  PaymentContentProps,
  PaymentData,
  Product,
  PromoCode,
} from "@/types/index";
import { stripePromise } from "@/utils/payment";
import { AddressElement, Elements } from "@stripe/react-stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { PaymentErrorBanner } from "./payment-error-banner";
import { PaymentForm } from "./payment-form";
import { ProductDetails } from "./product-details";
import { PromoCodeForm } from "./promo-code-form";

const PaymentContent = ({
  productId,
  priceId,
  onSuccess,
  onError,
  className = "",
}: PaymentContentProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [currentPriceId, setCurrentPriceId] = useState<string | null>(null);

  // Initialize payment
  useEffect(() => {
    const initPayment = async () => {
      try {
        let productData: Product;
        let effectivePriceId: string;

        if (productId) {
          // Fetch product details if productId is provided
          const productRes = await fetch(
            `/api/stripe/get-product?productId=${productId}`,
          );
          if (!productRes.ok) throw new Error("Failed to load product");
          productData = await productRes.json();
          effectivePriceId = priceId || productData.priceId;
        } else {
          // Use the existing get-product endpoint (fallback)
          const productRes = await fetch("/api/stripe/get-product");
          if (!productRes.ok) throw new Error("Failed to load product");
          productData = await productRes.json();
          effectivePriceId = priceId || productData.priceId;
        }

        setProduct(productData);
        setCurrentPriceId(effectivePriceId);

        // Create payment intent
        const paymentRes = await fetch("/api/stripe/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId: effectivePriceId,
            productId: productData.id,
          }),
        });

        if (!paymentRes.ok) throw new Error("Failed to initialize payment");
        const { clientSecret } = await paymentRes.json();
        setClientSecret(clientSecret);
        const currency = (productData.currency || "usd").toUpperCase();

        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ ecommerce: null });
          (window as any).dataLayer.push({
            event: "gtm_custom_event",
            datalayer_event_event: "begin_checkout",
            ecommerce: {
              currency: currency,
              value: (productData.unitAmount || 0) / 100, // convert from cents to dollars
              items: [
                {
                  item_id: productData.id,
                  item_name: productData.name,
                  currency: currency,
                  price: (productData.unitAmount || 0) / 100,
                  quantity: 1,
                },
              ],
            },
          });
        }
      } catch (err) {
        console.error("Payment initialization error:", err);
        onError?.("Failed to initialize payment. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    initPayment();
  }, [productId, priceId, onError]);

  // Handle promo code application
  const handleApplyPromoCode = async (code: string) => {
    if (!product || !currentPriceId) return;

    setIsApplyingPromo(true);
    setPromoError(null);
    setPromoSuccess(false);

    try {
      const res = await fetch("/api/stripe/apply-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: currentPriceId,
          promotionCode: code,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPromoError(data.error || "Failed to apply promo code");
        return;
      }

      // Update the client secret with the new discounted payment intent
      setClientSecret(data.clientSecret);
      setAppliedPromo(data.promoDetails);
      setPromoSuccess(true);

      // Clear any previous payment errors
      setPaymentError(null);
    } catch (err) {
      console.error("Promo application error:", err);
      setPromoError("An unexpected error occurred. Please try again.");
    } finally {
      setIsApplyingPromo(false);
    }
  };

  const handlePaymentSuccess = (paymentData: PaymentData) => {
    onSuccess?.(paymentData);
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
    onError?.(error);
  };

  if (isLoading) {
    return <LoadingState className={className} />;
  }

  if (!product || !clientSecret) {
    return <ErrorState className={className} />;
  }

  const elementsOptions: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#2563eb",
        borderRadius: "8px",
        fontFamily: "system-ui, sans-serif",
      },
    },
  };

  return (
    <Container className={`max-w-6xl  ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product and Promo Section */}
        <div className="space-y-6">
          <Card className="">
            <CardHeader>
              <h3>Not sure?</h3>
            </CardHeader>
            <CardContent>
              <p>
                Have questions or need to discuss your specific needs? Let's
                talk first.
              </p>
              <Button asChild>
                <Link href="./success">Book a Meeting</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium">Have a promo code?</h3>
            </CardHeader>
            <CardContent>
              <PromoCodeForm
                onApply={handleApplyPromoCode}
                appliedPromo={appliedPromo}
                isLoading={isApplyingPromo}
                error={promoError}
                success={promoSuccess}
              />
            </CardContent>
          </Card>
          <ProductDetails product={product} appliedPromo={appliedPromo} />
        </div>
        {/* Payment Section */}

        <Card className="w-full h-fit">
          <CardHeader>
            <h2 className="text-xl font-semibold">Payment Details</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {paymentError && <PaymentErrorBanner error={paymentError} />}

            <Elements
              stripe={stripePromise}
              options={elementsOptions}
              key={clientSecret}
            >
              <AddressElement options={{ mode: "shipping" }} className="mb-6" />
              <PaymentForm
                product={product}
                appliedPromo={appliedPromo}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Elements>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default PaymentContent;
