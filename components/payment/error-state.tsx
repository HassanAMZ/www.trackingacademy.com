import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
};
