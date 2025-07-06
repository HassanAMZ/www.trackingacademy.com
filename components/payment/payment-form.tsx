import { saveUserData } from "@/actions/stripe-user-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentData, Product, PromoCode } from "@/types/index";
import { getSuccessUrl } from "@/utils/payment";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Loader2, LockIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

interface PaymentFormProps {
  product: Product;
  appliedPromo: PromoCode | null;
  onSuccess?: (paymentData: PaymentData) => void;
  onError?: (error: string) => void;
}

export const PaymentForm = ({ product, appliedPromo, onSuccess, onError }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const finalAmount = appliedPromo
    ? (product.unitAmount - appliedPromo.amountOff) / 100
    : product.unitAmount / 100;

  // Check localStorage on component mount
  useEffect(() => {
    try {
      const storedEmail = localStorage.getItem("email_address");
      const storedPhone = localStorage.getItem("phone_number");

      if (storedEmail && storedEmail.trim() !== "" && storedPhone && storedPhone.trim() !== "") {
        setEmail(storedEmail);
        setPhone(storedPhone);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, []);

  // Function to save data to localStorage
  const saveToLocalStorage = (email: string, phone: string) => {
    try {
      localStorage.setItem("email_address", email);
      localStorage.setItem("phone_number", phone);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      onError?.("Please enter a valid email address");
      return;
    }

    setIsProcessing(true);

    try {
      // Save user data to localStorage
      saveToLocalStorage(email, phone);

      // Save user data to Firebase via server action
      const result = await saveUserData({
        email: email.trim(),
        phone: phone.trim(),
      });

      if (!result.success) {
        console.error("Failed to save user data:", result.error);
        // Continue with payment even if user data saving fails
      }

      // Process payment
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: getSuccessUrl(),
          payment_method_data: {
            billing_details: {
              email,
              phone,
            },
          },
        },
      });

      if (error) {
        const errorMessage = error.message || "Payment failed. Please try again.";
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User Information Section */}
      <div className="space-y-4 text-muted-foreground">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={"p-5"}
            disabled={isProcessing}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            className={"p-5"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={isProcessing}
          />
        </div>
      </div>

      {/* Payment Element */}
      <div className="rounded-lg">
        <PaymentElement
          options={{
            layout: "accordion",
            fields: {
              billingDetails: "auto",
            },
          }}
        />
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing || !email.trim() || !phone.trim()}
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

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <LockIcon className="h-4 w-4" />
        <span>Your payment is secured with 256-bit SSL encryption</span>
      </div>
    </form>
  );
};
