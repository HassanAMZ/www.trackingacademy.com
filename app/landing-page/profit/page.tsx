"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="grid min-h-screen place-content-center overflow-hidden py-12 bg-background text-foreground">
      <Container className="flex w-full max-w-3xl flex-col items-center space-y-8 text-center">
        {/* Success Icon */}
        <CheckCircle className="text-primary w-16 h-16" />

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Thank You! Your Request Has Been Received ✅
        </h1>

        {/* Supporting Text */}
        <p className="text-muted-foreground text-lg max-w-2xl">
          You’ve successfully claimed your $300 coupon. One of our team members
          will reach out soon to get your tracking system started. You can also
          schedule your setup call directly below if you haven’t already!
        </p>

        {/* CTA Button to Meeting Page */}
        <Link href="./book-a-meeting">
          <Button size="lg" className="rounded-2xl text-lg px-8 py-6">
            Book Your Setup Call
          </Button>
        </Link>
      </Container>
    </section>
  );
}
