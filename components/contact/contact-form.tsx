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
import { useFormState, useFormStatus } from "react-dom";

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
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during form submission.",
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

export default function ContactForm({
  redirectUrl = "/contact/book-a-meeting",
}: ContactFormProps) {
  const [state, formAction] = useFormState(
    clientCreateContact(redirectUrl),
    initialState,
  );

  return (
    <div className="w-full py-6">
      <form id="contact-form" action={formAction} name="tracking-audit">
        {state.error && (
          <div className="border-destructive bg-destructive/50 text-destructive mb-4 rounded border p-3">
            {state.error}
          </div>
        )}

        <div className="flex flex-col space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Name Input */}
            <div className="grid w-full items-start gap-1.5">
              <Label htmlFor="firstName" className="font-medium">
                First Name<span className="text-destructive">*</span>
              </Label>
              <Input
                required
                type="text"
                id="firstName"
                name="firstName"
                className="h-12 p-2.5"
              />
            </div>

            {/* Last Name Input */}
            <div className="grid w-full items-start gap-1.5">
              <Label htmlFor="lastName" className="font-medium">
                Last Name<span className="text-destructive">*</span>
              </Label>
              <Input
                required
                type="text"
                id="lastName"
                name="lastName"
                className="h-12 p-2.5"
              />
            </div>
          </div>

          {/* Email Input - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="email" className="font-medium">
              Email<span className="text-destructive">*</span>
            </Label>
            <Input
              required
              type="email"
              id="email"
              name="email"
              className="h-12 p-2.5"
            />
          </div>

          {/* Website URL Input - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="website" className="font-medium">
              Website URL<span className="text-destructive">*</span>
            </Label>
            <Input
              required
              type="url"
              id="website"
              name="website"
              className="h-12 p-2.5"
            />
          </div>

          {/* Budget Dropdown - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="budget" className="font-medium">
              What's your Monthly Ads Spent Budget?
            </Label>
            <Select name="budget">
              <SelectTrigger className="h-12 p-2.5">
                <SelectValue placeholder="0 to 1,000$" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000">0 to 1,000$</SelectItem>
                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                <SelectItem value="25000+">$25,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Issues Checkboxes - Full Width */}
          <div className="grid w-full items-start gap-1.5">
            <Label htmlFor="issues" className="font-medium">
              Which of these issues are you experiencing?
            </Label>
            <div className="mt-1 space-y-2">
              <div className="flex items-start">
                <Checkbox
                  id="issue-1"
                  name="issues"
                  value="cant-see-purchases"
                />
                <Label htmlFor="issue-1" className="ml-2 text-sm font-normal">
                  I can't see purchases or conversions from my ads
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox
                  id="issue-2"
                  name="issues"
                  value="domain-restricted"
                />
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
                  I don't trust the ROAS Meta shows me
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-5" name="issues" value="scaling-issues" />
                <Label htmlFor="issue-5" className="ml-2 text-sm font-normal">
                  I'm scaling but don't know what's working
                </Label>
              </div>
              <div className="flex items-start">
                <Checkbox id="issue-6" name="issues" value="others" />
                <Label htmlFor="issue-6" className="ml-2 text-sm font-normal">
                  Others
                </Label>
              </div>
            </div>
          </div>

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
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10 (Extremely Urgent)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
}
