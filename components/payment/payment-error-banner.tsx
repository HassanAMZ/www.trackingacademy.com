// components/payment/PaymentErrorBanner.tsx
import { AlertCircle } from "lucide-react";

interface PaymentErrorBannerProps {
  error: string;
}

export const PaymentErrorBanner = ({ error }: PaymentErrorBannerProps) => {
  return (
    <div className="mb-4 bg-destructive/50 border border-destructive/50 p-4">
      <div className="flex items-center space-x-2 text-destructive">
        <AlertCircle className="h-5 w-5" />
        <span>{error}</span>
      </div>
    </div>
  );
};
