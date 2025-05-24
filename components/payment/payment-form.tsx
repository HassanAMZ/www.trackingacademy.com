import { Button } from "@/components/ui/button";
import { PaymentData, Product, PromoCode } from "@/types/index";
import { getSuccessUrl } from "@/utils/payment";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Loader2, LockIcon } from "lucide-react";
import { FormEvent, useState } from "react";

interface PaymentFormProps {
  product: Product;
  appliedPromo: PromoCode | null;
  onSuccess?: (paymentData: PaymentData) => void;
  onError?: (error: string) => void;
}

export const PaymentForm = ({
  product,
  appliedPromo,
  onSuccess,
  onError,
}: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const finalAmount = appliedPromo
    ? (product.unitAmount - appliedPromo.amountOff) / 100
    : product.unitAmount / 100;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: getSuccessUrl(),
          payment_method_data: {
            billing_details: {
              name,
              email,
            },
          },
        },
      });

      if (error) {
        const errorMessage =
          error.message || "Payment failed. Please try again.";
        onError?.(errorMessage);
      } else {
        onSuccess?.({ amount: finalAmount, currency: product.currency });
      }
    } catch (err) {
      const errorMessage = "An unexpected error occurred. Please try again.";
      onError?.(errorMessage);
      console.error("Payment submission error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFormSubmit = () => {
    if (!stripe || !elements) return;
    handleSubmit({ preventDefault: () => {} } as FormEvent);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg">
        <PaymentElement
          options={{
            layout: "accordion", // 'accordion', 'tabs', or 'auto'
            fields: {
              billingDetails: "auto", // or 'never' to hide them
            },
          }}
        />
      </div>

      <Button
        type="button"
        onClick={handleFormSubmit}
        disabled={!stripe || isProcessing}
        className="w-full"
        size="lg"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Processing...</span>
          </div>
        ) : (
          `Pay $${finalAmount.toFixed(2)}`
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <LockIcon className="h-4 w-4" />
        <span>Your payment is secured with 256-bit SSL encryption</span>
      </div>
    </div>
  );
};
