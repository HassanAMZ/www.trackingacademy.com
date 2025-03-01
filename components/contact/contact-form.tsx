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
      className={`w-full ${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Submitting..." : "Submit Contact Form"}
    </Button>
  );
}

export default function ContactForm() {
  return (
    <div className="w-full py-12">
      <form
        id="contact-form"
        action={createContact}
        className="flex flex-col space-y-3"
      >
        <div className="pt-12 pb-6 text-center">
          <h1>
            Contact now and Stop Losing 50% of Your Ad Spend – Track 95% of
            Conversions Accurately
          </h1>
          <p>Fill out the form below to get started.</p>
        </div>
        <Card className="rounded-t-lg">
          <CardContent>
            <div className="grid gap-3 py-6 md:grid-cols-2">
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

              {/* My Role */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="roleType">My role is as </Label>
                <Select name="roleType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">An Owner</SelectItem>
                    <SelectItem value="marketing-agency">
                      A Marketing Agency
                    </SelectItem>
                    <SelectItem value="employee">An Employee</SelectItem>
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
                <Label htmlFor="website">Website Link</Label>
                <Input
                  required
                  type="url"
                  name="website"
                  placeholder="https://www.example.com"
                />
              </div>

              {/* Interest Select */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="interest">I need help with</Label>
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
                    <SelectItem value="something-else">
                      Something Else
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea
                  name="projectDescription"
                  required
                  placeholder="I am facing issues with..."
                />
              </div>

              {/* Budget Select */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="budget">My Estimate Budget is</Label>
                <Select name="budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">$500 - $1000</SelectItem>
                    <SelectItem value="1000-5000">$1000 - $2000</SelectItem>
                    <SelectItem value="1000-5000">$2000 - $5000</SelectItem>
                    <SelectItem value="not-sure">I don't know</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="email">Reach out to my email</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="phone"> Reach out to my Phone</Label>
                <Input
                  required
                  type="text"
                  name="phone"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            <SubmitButton />
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
