import { PaymentLoading } from "@/components/payment/payment-loading";
import PaymentPage from "@/components/payment/payment-page";
import { Suspense } from "react";

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
