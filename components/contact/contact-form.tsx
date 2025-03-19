"use client";
import { createContact } from "@/actions/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";
import { Card, CardContent } from "../ui/card";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className={`hover:bg-primary/90 w-full p-8 text-lg whitespace-pre-wrap ${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Submitting..." : "Claim My Free Tracking Audit"}
    </Button>
  );
}

export default function ContactForm() {
  return (
    <div className="w-full py-12">
      <form id="contact-form" action={createContact} name="free-audit">
        <div className="flex flex-col space-y-3">
          <div className="pt-12 pb-6 text-center">
            <h1>
              Claim Your Free Tracking Audit – Find & Fix Hidden Revenue Leaks!
            </h1>
            <h4 className="pt-4 text-gray-600">
              Fill out the form below to get a <strong>free audit</strong> of
              your tracking setup & see how much revenue you’re missing.
            </h4>
          </div>

          <Card className="rounded-t-lg">
            <CardContent>
              <div className="grid gap-6 py-6 md:grid-cols-2">
                {/* Name Input */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>

                {/* Role Selection */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="roleType">I am a...</Label>
                  <Select name="roleType">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">Business Owner</SelectItem>
                      <SelectItem value="marketing-agency">
                        Marketing Agency
                      </SelectItem>
                      <SelectItem value="employee">Company Employee</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="something-else">
                        Something Else
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Website Input */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="website">Your Website</Label>
                  <Input
                    required
                    type="url"
                    name="website"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Interest Selection */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="interest">What do you need audited?</Label>
                  <Select name="interest">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google-tag-manager">
                        Google Tag Manager
                      </SelectItem>
                      <SelectItem value="facebook-pixel-capi">
                        Facebook Pixel & Conversion API
                      </SelectItem>
                      <SelectItem value="google-analytics-4">
                        Google Analytics 4
                      </SelectItem>
                      <SelectItem value="tiktok-pixel-event-api">
                        TikTok Pixel & Event API
                      </SelectItem>
                      <SelectItem value="gdpr-cmp">
                        GDPR Cookie Consent CMP
                      </SelectItem>
                      <SelectItem value="something-else">
                        Something Else
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tracking Issue Description */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="projectDescription">
                    What tracking issues are you facing?
                  </Label>
                  <Textarea
                    name="projectDescription"
                    required
                    placeholder="Describe the issues with your tracking..."
                  />
                </div>

                {/* Budget Selection */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email Input */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Input */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    required
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <SubmitButton />

              {/* Urgency Message Below Form */}
              <p className="mt-4 text-center text-sm text-gray-500">
                🚀 <strong>Only 5 Free Audits Available This Month!</strong>{" "}
                Secure yours now before we fill up.
              </p>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
