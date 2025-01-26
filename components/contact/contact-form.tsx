"use client";
import { createContact } from "@/actions/contact-us-new";
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
      className={`${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Submitting..." : "Submit Contact Form"}
    </Button>
  );
}

export default function ContactForm() {
  return (
    <div className="w-full">
      <form action={createContact} className="flex flex-col space-y-3">
        <div className="pb-6 pt-12 text-center">
          <h1>Work with us</h1>
          <p>Fill out the form below to get started.</p>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <Card className="rounded-t-lg">
            <CardContent>
              <div className="grid gap-3 py-6">
                {/* Name Input */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="name">
                    Hey, my name is
                  </Label>
                  <Input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>

                {/* Company Input */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="company">
                    from
                  </Label>
                  <Input
                    required
                    type="text"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>

                {/* Website Input */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="website">
                    our website is
                  </Label>
                  <Input
                    required
                    type="url"
                    name="website"
                    placeholder="https://www.example.com"
                  />
                </div>

                {/* Interest Select */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="interest">
                    I am curious about
                  </Label>
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
                      <SelectItem value="something-else">
                        Something Else
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Description */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="projectDescription">
                    for
                  </Label>
                  <Textarea
                    name="projectDescription"
                    required
                    placeholder="Project Description"
                  />
                </div>

                {/* Collaboration Type */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="collaborationType">
                    I am interested in
                  </Label>
                  <Select name="collaborationType">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="retainer">
                        Retainer Collaboration
                      </SelectItem>
                      <SelectItem value="guidance-consulting">
                        Guidance/Consulting
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Select */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="budget">
                    our budget is
                  </Label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-100">
                        $ Less than 100
                      </SelectItem>
                      <SelectItem value="100-500">$100 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1000</SelectItem>
                      <SelectItem value="1000-5000">$1000 - $5000</SelectItem>
                      <SelectItem value="not-sure">Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email Input */}
                <div className="grid w-full items-center gap-1">
                  <Label className="pb-2" htmlFor="email">
                    you can reach me at
                  </Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <SubmitButton />
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
