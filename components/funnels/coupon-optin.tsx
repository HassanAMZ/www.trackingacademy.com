"use client";

import { createCouponRequest } from "@/actions/coupon-request";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// Initial state for form
const initialState = {
  error: null,
  success: false,
};

// Client action wrapper
const clientCreateCouponRequest =
  (redirectUrl: string) => async (_prevState: any, formData: FormData) => {
    try {
      await createCouponRequest(formData, redirectUrl);
      return { error: null, success: true };
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during submission. Please try again.",
        success: false,
      };
    }
  };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant="default"
      className={`bg-primary hover:bg-primary/90 cursor-pointer w-full p-6 text-lg font-bold ${
        pending ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {pending ? "Processing..." : "Claim Your $300 Coupon Now"}
    </Button>
  );
}

type ContactFormProps = {
  redirectUrl?: string;
};
export default function CouponOptInForm({
  redirectUrl = "/contact/book-a-meeting",
}: ContactFormProps) {
  const [state, formAction] = useActionState(
    clientCreateCouponRequest(redirectUrl),
    initialState,
  );

  if (state.success) {
    return (
      <div className="w-full py-6 text-center">
        <div className="mb-6 rounded-lg border p-4">
          <h3 className="mb-2 text-xl font-bold">
            Success! Your coupon has been sent.
          </h3>
          <p className="mb-4">
            Check your email for your $300 coupon code:{" "}
            <strong>SEEEVERYSALE300OFF</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md py-6">
      <form action={formAction}>
        {state.error && (
          <div className="text-destructive border-destructive bg-destructive/50 mb-4 rounded border p-3">
            {state.error}
          </div>
        )}{" "}
        <div className="flex flex-col space-y-4">
          {/* Name Input */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="name" className="font-medium">
              Your Name<span className="text-destructive">*</span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="h-12 p-2.5"
            />
          </div>{" "}
          {/* Email Input */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="email" className="font-medium">
              Your Email<span className="text-destructive">*</span>
            </Label>
            <Input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="h-12 p-2.5"
            />
          </div>{" "}
          {/* Phone Input */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="phone" className="font-medium">
              Your Phone<span className="text-destructive">*</span>
            </Label>
            <Input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="h-12 p-2.5"
            />
          </div>{" "}
          {/* Submit Button */}
          <div className="mt-4">
            <SubmitButton />
          </div>
        </div>{" "}
        <p className="text-muted-foreground mt-4 text-center text-xs">
          Limited offer for the first 10 clients only — act fast before it
          expires!
        </p>
      </form>
    </div>
  );
}
