import React from "react";
import Link from "next/link";
import Hero from "@/components/offers/offer-001/submit-query/hero";
import ContactForm from "@/components/contact/contact-form";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import ClientTestimonial from "@/components/home/testimonaials";
import {
  containerVariants,
  itemVariants,
  MotionButton,
  MotionContainer,
  MotionDiv,
  MotionSeparator,
  MotionTypographyH2,
} from "@/utils/framerMotion";

export default function Page() {
  return (
    <MotionDiv
      className="space-y-4 sm:space-y-8 lg:space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionDiv variants={itemVariants}>
        <Hero />
      </MotionDiv>

      <MotionSeparator className="my-6" variants={itemVariants} />

      <MotionDiv variants={itemVariants}>
        <ClientTestimonial />
      </MotionDiv>

      <MotionContainer variants={itemVariants}>
        <MotionTypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </MotionTypographyH2>
        <MotionButton asChild className="w-full" variants={itemVariants}>
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>
      </MotionContainer>

      <MotionDiv variants={itemVariants}>
        <FrequentlyAskedQuestions />
      </MotionDiv>

      <MotionContainer variants={itemVariants}>
        <MotionTypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </MotionTypographyH2>
        <MotionButton asChild className="w-full" variants={itemVariants}>
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>
      </MotionContainer>
    </MotionDiv>
  );
}
