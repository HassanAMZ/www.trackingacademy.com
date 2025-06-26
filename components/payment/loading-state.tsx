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
    <div className={`flex items-center justify-center p-8 ${className}`} aria-live="polite">
      <div className="flex items-center gap-2">
        <Loader2 className="text-primary h-6 w-6 animate-spin" />
        <span className="text-muted-foreground">{message}</span>
      </div>
    </div>
  );
};
