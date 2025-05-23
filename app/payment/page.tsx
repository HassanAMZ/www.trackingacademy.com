// app/payment/page.tsx
"use client";

import { PaymentPage } from "@/components/payment";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Separate component for the payment logic
function PaymentContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product_id");
  const priceId = searchParams.get("price_id");

  const handleSuccess = (paymentData: any) => {
    console.log("Payment successful:", paymentData);
    // Additional success handling
  };

  const handleError = (error: string) => {
    console.error("Payment error:", error);
    // Show error toast or notification
  };

  if (!priceId || !productId) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">
            Missing Payment Information
          </h1>
          <p className="mt-2 text-muted-foreground">
            Price ID and Product ID are required to process payment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Secure Checkout</h1>
      <PaymentPage
        productId={productId!}
        priceId={priceId!}
        onSuccess={handleSuccess}
        onError={handleError}
        className="max-w-6xl mx-auto"
      />
    </div>
  );
}

// Loading component
function PaymentLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Loading...</h1>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

// Main page component
export default function Page() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentContent />
    </Suspense>
  );
}
