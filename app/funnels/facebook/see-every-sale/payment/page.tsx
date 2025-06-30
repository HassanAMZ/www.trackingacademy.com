import { Suspense } from "react";
import { PaymentLoading } from "@/components/payment/payment-loading";
import PaymentPage from "@/components/payment/payment-page";

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
