import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface PaymentErrorBannerProps {
  error: string;
}

export const PaymentErrorBanner = ({ error }: PaymentErrorBannerProps) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
