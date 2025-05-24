import { PaymentLoading } from "@/components/payment/payment-loading";
import PaymentPage from "@/components/payment/payment-page";
import Link from "next/link";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Suspense fallback={<PaymentLoading />}>
        <PaymentPage />
      </Suspense>
    </>
  );
};

export default Page;
