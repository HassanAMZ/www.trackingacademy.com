// app/payment/page.tsx
"use client";

import { Suspense } from "react";
import { PaymentLoading } from "@/components/payment/payment-loading";
import PaymentPage from "@/components/payment/payment-page";

export default function Page() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentPage />
    </Suspense>
  );
}
