"use client";

import { createCouponRequest } from "@/actions/coupon-request";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
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
      // Store form data in localStorage before submitting
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone_number = formData.get("phone")?.toString() || "";
      const website_url = formData.get("website_url")?.toString() || "";

      // Store in localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email_address", email);
      localStorage.setItem("phone_number", phone_number);
      localStorage.setItem("website_url", website_url);
      localStorage.setItem("coupon_form_submitted", "true");

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
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting Request...
        </>
      ) : (
        "Claim Your $300 Coupon Now"
      )}
    </Button>
  );
}

export default function CouponOptInForm({
  redirectUrl,
  buttonText = "🎟️ Claim $300 OFF + $7,600 in Free Bonuses ",
  buttonElement,
}: CouponOptInFormProps) {
  const pathname = usePathname();
  const service = services.find((s) => s.name === "See Every Sale");
  const redirectPaymentUrl = `${pathname.replace(/\/$/, "")}/payment?product_id=${service?.product_id}&price_id=${service?.price_id}&prefilled_promo_code=SEEEVERYSALE300OFF`;
  const [isOpen, setIsOpen] = useState(false);

  // Form field values to track when to show next field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteUrl, setWebsiteURL] = useState("");

  const [state, formAction] = useActionState(
    clientCreateCouponRequest(redirectUrl ? redirectUrl : redirectPaymentUrl),
    initialState,
  );

  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      // Check localStorage for existing values and pre-populate
      const storedName = localStorage.getItem("name") || "";
      const storedEmail = localStorage.getItem("email_address") || "";
      const storedPhone = localStorage.getItem("phone_number") || "";
      const storedWebsite = localStorage.getItem("website_url") || "";

      // Only set if the current state is empty (to avoid overwriting user input)
      if (!name && storedName) setName(storedName);
      if (!email && storedEmail) setEmail(storedEmail);
      if (!phone && storedPhone) setPhone(storedPhone);
      if (!websiteUrl && storedWebsite) setWebsiteURL(storedWebsite);
    }
  }, [isOpen]); // Run when modal opens

  return (
    <>
      {/* Trigger Button */}
      {buttonElement ? (
        <div onClick={() => setIsOpen(true)}>{buttonElement}</div>
      ) : (
        <div className="from-primary/5 to-background bg-linear-to-b pt-24 pb-12">
          <Button
            className="mx-auto flex w-fit max-w-5xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold"
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
                <h3 className="mb-2 text-xl font-bold">Success! Your coupon has been sent.</h3>
                <p className="mb-4">
                  Check your email for your $300 coupon code: <strong>SEEEVERYSALE300OFF</strong>
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
                <div className={`flex flex-col space-y-2`}>
                  {/* Field 1: Name - Always visible */}
                  <div className="grid w-full items-start gap-1.5 transition-all duration-300 ease-in-out">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 p-2.5"
                    />
                  </div>

                  {/* Field 2: Email - Show when name has content */}
                  <div
                    className={`grid w-full items-start gap-1.5 transition-all duration-500 ease-in-out ${
                      name.trim()
                        ? "max-h-24 translate-y-0 transform opacity-100"
                        : "max-h-0 -translate-y-4 transform opacity-0"
                    }`}
                  >
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="h-12 p-2.5"
                    />
                  </div>

                  {/* Field 3: Phone - Show when email has content */}
                  <div
                    className={`grid w-full items-start gap-1.5 transition-all duration-500 ease-in-out ${
                      email.trim()
                        ? "max-h-24 translate-y-0 transform opacity-100"
                        : "max-h-0 -translate-y-4 transform opacity-0"
                    }`}
                  >
                    <Label htmlFor="phone">Your Phone</Label>
                    <Input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-12 p-2.5"
                    />
                  </div>

                  {/* Field 4: Website - Show when phone has content */}
                  <div
                    className={`grid w-full items-start gap-1.5 transition-all duration-500 ease-in-out ${
                      phone.trim()
                        ? "max-h-24 translate-y-0 transform opacity-100"
                        : "max-h-0 -translate-y-4 transform opacity-0"
                    }`}
                  >
                    <Label htmlFor="website">Your Website</Label>
                    <Input
                      required
                      type="url"
                      id="website_url"
                      name="website_url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteURL(e.target.value)}
                      placeholder="Enter your website URL"
                      className="h-12 p-2.5"
                    />
                  </div>

                  {/* Submit button - Show when all fields have content */}

                  <SubmitButton />
                </div>
                <p className="text-muted-foreground mt-4 text-center text-xs">
                  Limited offer for the first 10 clients only — act fast before it expires!
                </p>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
