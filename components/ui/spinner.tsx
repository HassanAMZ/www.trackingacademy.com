// components/ui/spinner.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

export function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-2 border-b-2",
        {
          "h-4 w-4 border-2": size === "sm",
          "h-8 w-8 border-2": size === "md",
          "h-12 w-12 border-4": size === "lg",
          "border-muted border-t-foreground": variant === "default",
          "border-primary/30 border-t-primary": variant === "primary",
        },
        className,
      )}
      {...props}
    >
      <span className="sr-only">Loading</span>
    </div>
  );
}
