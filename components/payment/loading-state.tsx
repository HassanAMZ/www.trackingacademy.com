// components/payment/LoadingState.tsx
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  className?: string;
  message?: string;
}

export const LoadingState = ({
  className = "",
  message = "Loading payment...",
}: LoadingStateProps) => {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <Loader2 className="h-8 w-8 animate-spin" />
      <span className="ml-2 text-muted-foreground">{message}</span>
    </div>
  );
};
