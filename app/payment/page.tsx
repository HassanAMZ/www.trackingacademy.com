// app/payment/page.tsx
"use client";

import { PaymentLoading } from "@/components/payment/payment-loading";
import PaymentPage from "@/components/payment/payment-page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentPage />
    </Suspense>
  );
}
