import ContactForm from "@/components/contact/contact-form";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import ClientTestimonial from "@/components/home/testimonaials";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Hero from "@/components/offers/offer-001/submit-query/hero";
import { TypographyH2 } from "@/components/ui/typography";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";

export default function page() {
  return (
    <main className="space-y-4 sm:space-y-8 lg:space-y-12">
      <Hero />
      <Separator className="my-6" />
      <ClientTestimonial />
      <Container>
        <TypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>
      <FrequentlyAskedQuestions />
      <Container>
        <TypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>
    </main>
  );
}
