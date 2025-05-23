// components/payment/ErrorState.tsx
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  className?: string;
  message?: string;
}

export const ErrorState = ({
  className = "",
  message = "Failed to load payment information. Please refresh and try again.",
}: ErrorStateProps) => {
  return (
    <div className={`p-6 ${className}`}>
      <div className="border p-4">
        <div className="flex items-center space-x-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};
