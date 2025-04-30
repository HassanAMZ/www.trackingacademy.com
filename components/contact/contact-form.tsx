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
      className={`hover:bg-primary/90 w-full p-8 text-lg font-bold whitespace-pre-wrap ${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending
        ? "Submitting..."
        : "I am Ready to Fix my Tracking, Boost my ROAS"}
    </Button>
  );
}

export default function ContactForm() {
  return (
    <div className="w-full py-12">
      <form id="contact-form" action={createContact} name="free-audit">
        <div className="flex flex-col space-y-3">
          <section className="space-y-4 pt-12 pb-6 text-center">
            <h1>You're One Step Away From Fixing Your Tracking Blindspot</h1>
            <h4 className="pt-3 text-gray-700">
              We help businesses recover 30%+ of invisible conversions and slash
              wasted ad spend—fast.
              <br />
              <span className="text-primary font-semibold">
                Book your implementation call now to get started.
              </span>
            </h4>
          </section>

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
                  <Label htmlFor="interest">
                    On a scale of 1–10, how critical is it for you to fix your
                    tracking setup?
                  </Label>
                  <Select name="interest">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="not-urgent">1: Not Urgent</SelectItem>
                      <SelectItem value="somewhat-important">
                        2-4: Somewhat Important
                      </SelectItem>
                      <SelectItem value="very-important">
                        5-7: Very Important
                      </SelectItem>
                      <SelectItem value="top-priority">
                        8-10: Top Priority
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tracking Issue Description */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="projectDescription">
                    What’s the biggest issue you’re facing with tracking right
                    now?
                  </Label>
                  <Textarea
                    name="projectDescription"
                    required
                    placeholder="Describe the issues with your tracking..."
                  />
                </div>

                {/* Budget Selection */}
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="budget">
                    Monthly Marketing Adspent Budget (USD)?
                  </Label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Facebook Ads, Google Ads etc. Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">Less than 1,000$</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">
                        $5,000 - $10,000
                      </SelectItem>
                      <SelectItem value="10000-25000">
                        $10,000 - $25,000
                      </SelectItem>
                      <SelectItem value="25000+">$25,000+</SelectItem>
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
                🚀{" "}
                <strong>Only 5 New Clients are Onbaorded Every Month!</strong>{" "}
                Secure yours now before we fill up.
              </p>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
