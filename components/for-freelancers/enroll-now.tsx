"use client";

import { handleEnrollNowForm } from "@/actions/handle-enroll-now";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation"; // Import useRouter
import Container from "../ui/container";
import TypographyH2 from "../ui/typography-h2";
import TypographyP from "../ui/typography-p";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const initialState = {
  message: "",
  amount: 0,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Joining..." : "Join Waitlist"}
    </Button>
  );
}

export default function EnrollNowForm() {
  const [state, formAction] = useFormState(handleEnrollNowForm, initialState);
  const router = useRouter(); // Initialize useRouter
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (state?.message && !formSubmitted) {
    setFormSubmitted(true);
    router.push("/for-freelancers/enroll-now/waitlist-joined"); // Redirect after submission
  }

  return (
    <Container className="flex flex-col gap-2 py-4 md:grid md:grid-cols-2 lg:py-12">
      <div>
        <TypographyH2>Join Our Waitlist</TypographyH2>
        <TypographyP>
          Be the first to know when our courses are available! By joining our
          waitlist, you'll receive early access to course materials, exclusive
          discounts, and updates on new content.
        </TypographyP>
      </div>

      <section className="w-full rounded-lg">
        <form action={formAction} className="flex flex-col space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="userName">
                Full Name
              </Label>
              <Input
                required
                type="text"
                name="userName"
                placeholder="John Doe"
              />
            </div>
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="email">
                Email
              </Label>
              <Input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="course">
                Which Courses are you interested in?
              </Label>
              <Input
                required
                type="text"
                id="course"
                name="course"
                placeholder="Enter course name"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="amount">
                How much you'd pay for the course
              </Label>
              <Input
                required
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount in USD"
              />
            </div>
          </div>

          <SubmitButton />

          <TypographyP aria-live="polite" className="sr-only">
            {state?.message}
          </TypographyP>
        </form>
      </section>
    </Container>
  );
}
