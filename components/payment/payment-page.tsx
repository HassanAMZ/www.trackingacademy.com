"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PaymentContentProps } from "@/types/index";
import { AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Container from "../ui/container";
import PaymentContent from "./payment-content";
import { PaymentLoading } from "./payment-loading";

const PaymentPage = () => {
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
      <div className="container mx-auto py-12">
        <Alert variant="destructive" className="mx-auto max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Missing Payment Information</AlertTitle>
          <AlertDescription>
            Price ID and Product ID are required to process payment.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <Container className="py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">Secure Checkout</h1>
      <PaymentContent
        productId={productId}
        priceId={priceId}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </Container>
  );
};

export default PaymentPage;
