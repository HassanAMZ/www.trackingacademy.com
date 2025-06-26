"use client";

import { createContact } from "@/actions/contact-us";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// Initial state for form
const initialState = {
  error: null,
};

// Client action wrapper
const clientCreateContact =
  (redirectUrl: string) => async (_prevState: any, formData: FormData) => {
    try {
      await createContact(formData, redirectUrl);
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "An error occurred during form submission.",
      };
    }
  };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      variant="default"
      className={`bg-primary hover:bg-primary/90 w-full p-6 text-lg font-bold ${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
type ContactFormProps = {
  redirectUrl?: string;
};

export default function ContactForm({ redirectUrl = "/contact/book-a-meeting" }: ContactFormProps) {
  const [state, formAction] = useActionState(clientCreateContact(redirectUrl), initialState);

  return (
    <div className="w-full py-6">
      <form id="contact-form" action={formAction} name="tracking-audit">
        {state.error && (
          <div className="border-destructive bg-destructive/50 text-destructive mb-4 rounded border p-3">
            {state.error}
          </div>
        )}{" "}
        <div className="flex flex-col space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Name Input */}
            <div className="grid w-full items-start gap-1.5">
              <Label htmlFor="firstName" className="font-medium">
                First Name<span className="text-destructive">*</span>
              </Label>
              <Input required type="text" id="firstName" name="firstName" className="h-12 p-2.5" />
            </div>{" "}
            {/* Last Name Input */}
            <div className="grid w-full items-start gap-1.5">
              <Label htmlFor="lastName" className="font-medium">
                Last Name<span className="text-destructive">*</span>
              </Label>
              <Input required type="text" id="lastName" name="lastName" className="h-12 p-2.5" />
            </div>
          </div>{" "}
          {/* Email Input - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="email" className="font-medium">
              Email<span className="text-destructive">*</span>
            </Label>
            <Input required type="email" id="email" name="email" className="h-12 p-2.5" />
          </div>{" "}
          {/* Website URL Input - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="website" className="font-medium">
              Website URL<span className="text-destructive">*</span>
            </Label>
            <Input required type="url" id="website" name="website" className="h-12 p-2.5" />
          </div>{" "}
          {/* Budget Dropdown - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="budget" className="font-medium">
              What's your Current Monthly Revenue?
            </Label>
            <Select name="revenue">
              <SelectTrigger className="h-12 p-2.5">
                <SelectValue placeholder="Select an Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less than 5000">Less than $5,000</SelectItem>
                <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                <SelectItem value="100000+">$100,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>{" "}
          {/* Issues Checkboxes - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="issues" className="font-medium">
              Which of these issues are you experiencing?
            </Label>
            <div className="mt-1 space-y-2">
              <div className="flex items-start">
                <Checkbox id="issue-1" name="issues" value="cant-see-purchases" />
                <Label htmlFor="issue-1" className="ml-2 text-sm font-normal">
                  I can't see purchases or conversions from my ads
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-2" name="issues" value="domain-restricted" />
                <Label htmlFor="issue-2" className="ml-2 text-sm font-normal">
                  My domain is Restricted or Blocked
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-3" name="issues" value="tracking-broken" />
                <Label htmlFor="issue-3" className="ml-2 text-sm font-normal">
                  My tracking is totally broken
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-4" name="issues" value="dont-trust-roas" />
                <Label htmlFor="issue-4" className="ml-2 text-sm font-normal">
                  I don't trust the ROAS my Ads shows me
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-5" name="issues" value="scaling-issues" />
                <Label htmlFor="issue-5" className="ml-2 text-sm font-normal">
                  I'm scaling but don't know what's working
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-6" name="issues" value="cookie-consent-issues" />
                <Label htmlFor="issue-6" className="ml-2 text-sm font-normal">
                  I'm faceing issues with GDPR, CCPA or Other Cookie Compliances
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-7" name="issues" value="others" />
                <Label htmlFor="issue-7" className="ml-2 text-sm font-normal">
                  Others
                </Label>
              </div>
            </div>
          </div>{" "}
          {/* Urgency Scale - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="urgency" className="font-medium">
              On a scale from 1–10, how urgent is it to fix your tracking?
              <span className="text-destructive">*</span>
            </Label>
            <Select name="urgency" required>
              <SelectTrigger className="h-12 p-2.5">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 (Not Urgent)</SelectItem>
                <SelectItem value="2-4">2-4: Somewhat important but not Urgent</SelectItem>
                <SelectItem value="5-6">5-6: It's Important</SelectItem>
                <SelectItem value="7-8">7-8: It's Very Urgent</SelectItem>
                <SelectItem value="9-10">9-10: It should have been fixed Yesterday..!!</SelectItem>
              </SelectContent>
            </Select>
          </div>{" "}
          {/* Submit Button */}
          <div className="mt-6">
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
}
