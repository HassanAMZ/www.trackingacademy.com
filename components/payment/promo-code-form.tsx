// components/payment/promo-code-form.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PromoCode } from "@/types/index";
import { Check, Loader2, X } from "lucide-react";
import React, { useState } from "react";

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
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-green-700 font-medium">
                Code "{appliedPromo.code}" applied
              </span>
            </div>
            <span className="text-green-700 font-semibold">
              {appliedPromo.percentOff
                ? `-${appliedPromo.percentOff}%`
                : `-$${(appliedPromo.amountOff / 100).toFixed(2)}`}
            </span>
          </div>
        </div>
      )}

      {/* Promo Code Input */}
      {!appliedPromo && (
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
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
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <X className="h-4 w-4 text-red-600" />
            <span className="text-red-700 text-sm">{error}</span>
          </div>
        </div>
      )}

      {/* Success Message */}
      {success && !error && !appliedPromo && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-green-700 text-sm">
              Promo code applied successfully!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
