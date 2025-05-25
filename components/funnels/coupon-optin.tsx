"use client";

import { createCouponRequest } from "@/actions/coupon-request";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { usePathname } from "next/navigation";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

type CouponOptInFormProps = {
  redirectUrl?: string;
  buttonText?: string;
  buttonElement?: React.ReactElement;
};

const initialState = {
  error: null,
  success: false,
};

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
      className={`bg-primary hover:bg-primary/90 w-full p-6 text-lg font-bold ${
        pending ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      {pending ? "Processing..." : "Claim Your $300 Coupon Now"}
    </Button>
  );
}

export default function CouponOptInForm({
  redirectUrl,
  buttonText = "🎟️ Claim $300 OFF + $7,600 in Free Bonuses",
  buttonElement,
}: CouponOptInFormProps) {
  const pathname = usePathname();
  const service = services.find((s) => s.name === "See Every Sale");
  const redirectPaymentUrl = `${pathname.replace(/\/$/, "")}/payment?product_id=${service?.product_id}&price_id=${service?.price_id}&prefilled_promo_code=SEEEVERYSALE300OFF`;
  const [isOpen, setIsOpen] = useState(false);

  const [state, formAction] = useActionState(
    clientCreateCouponRequest(redirectUrl ? redirectUrl : redirectPaymentUrl),
    initialState,
  );

  return (
    <>
      {/* Trigger Button */}
      {buttonElement ? (
        <div onClick={() => setIsOpen(true)}>{buttonElement}</div>
      ) : (
        <div className="pt-24 pb-12 from-primary/5 to-background bg-linear-to-b">
          <Button
            className="flex max-w-5xl flex-col items-center text-center font-bold mx-auto w-fit p-6 text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div>
              {buttonText}
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        </div>
      )}

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-bold">
              Claim Your $300 Coupon
            </DialogTitle>
          </DialogHeader>

          {state.success ? (
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
          ) : (
            <div className="mx-auto w-full max-w-md py-6">
              <form action={formAction}>
                {state.error && (
                  <div className="text-destructive border-destructive bg-destructive/50 mb-4 rounded border p-3">
                    {state.error}
                  </div>
                )}
                <div className="flex flex-col space-y-4">
                  <div className="grid w-full items-start gap-1.5">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="h-12 p-2.5"
                    />
                  </div>
                  <div className="grid w-full items-start gap-1.5">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="h-12 p-2.5"
                    />
                  </div>
                  <div className="grid w-full items-start gap-1.5">
                    <Label htmlFor="phone">Your Phone</Label>
                    <Input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="h-12 p-2.5"
                    />
                  </div>
                  <div className="mt-4">
                    <SubmitButton />
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-center text-xs">
                  Limited offer for the first 10 clients only — act fast before
                  it expires!
                </p>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
