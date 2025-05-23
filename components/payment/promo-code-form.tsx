"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PromoCode } from "@/types/index";
import { Check, Loader2, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface PromoCodeFormProps {
  onApply: (code: string) => void;
  appliedPromo?: PromoCode | null;
  isLoading?: boolean;
  error?: string | null;
  success?: boolean;
}

export const PromoCodeForm = ({
  onApply,
  appliedPromo,
  isLoading = false,
  error = null,
  success = false,
}: PromoCodeFormProps) => {
  const [promoCode, setPromoCode] = useState("");

  const handleApply = () => {
    if (promoCode.trim()) {
      onApply(promoCode.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <div className="space-y-3">
      {/* Applied Promo Display */}
      {appliedPromo && (
        <Alert
          variant="default"
          className="bg-green-50 border-green-200 text-green-700"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="font-medium">
                Code "{appliedPromo.code}" applied
              </span>
            </div>
            <span className="font-semibold">
              {appliedPromo.percentOff
                ? `-${appliedPromo.percentOff}%`
                : `-$${(appliedPromo.amountOff / 100).toFixed(2)}`}
            </span>
          </div>
        </Alert>
      )}

      {/* Promo Code Input */}
      {!appliedPromo && (
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
            aria-label="Promo code"
          />
          <Button
            type="button"
            onClick={handleApply}
            disabled={!promoCode.trim() || isLoading}
            variant="outline"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Apply"}
          </Button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="destructive">
          <X className="h-4 w-4 text-destructive" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Success Message */}
      {success && !error && !appliedPromo && (
        <Alert
          variant="default"
          className="bg-green-50 border-green-200 text-green-700"
        >
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription>Promo code applied successfully!</AlertDescription>
        </Alert>
      )}
    </div>
  );
};
