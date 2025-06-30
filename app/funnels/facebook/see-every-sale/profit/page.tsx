"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function ThankYouPage() {
  return (
    <section className="bg-background text-foreground grid min-h-screen place-content-center overflow-hidden py-12">
      <Container className="flex w-full max-w-3xl flex-col items-center space-y-8 text-center">
        {/* Success Icon */}
        <CheckCircle className="text-primary h-16 w-16" /> {/* Headline */}
        <h1 className="text-3xl font-bold md:text-4xl">
          Thank You! Your Request Has Been Received ✅
        </h1>{" "}
        {/* Supporting Text */}
        <p className="text-muted-foreground max-w-2xl text-lg">
          You've successfully claimed your $300 coupon. One of our team members will reach out soon
          to get your tracking system started. You can also schedule your setup call directly below
          if you haven't already!
        </p>{" "}
        {/* CTA Button to Meeting Page */}
        <Link href="./book-a-meeting">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            Book Your Setup Call
          </Button>
        </Link>
      </Container>
    </section>
  );
}
