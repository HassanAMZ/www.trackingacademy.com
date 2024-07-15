import { motion } from "framer-motion";
import Offer from "@/components/home/offer";
import ClientTestimonial from "@/components/home/testimonaials";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/offers/offer-001/hero";
import Link from "next/link";
import { TypographyH2 } from "@/components/ui/typography";
import Container from "@/components/ui/container";
import {
  containerVariants,
  itemVariants,
  MotionButton,
  MotionContainer,
  MotionDiv,
  MotionSeparator,
  MotionTypographyH2,
} from "@/utils/framerMotion";

export default function Home() {
  return (
    <MotionDiv
      className="space-y-4 sm:space-y-8 lg:space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      <YoutubeEmbed embedId="9MGpL_AmEYM" />

      <MotionContainer variants={itemVariants}>
        <MotionTypographyH2 className="text-center">
          Watched the video? <span className="text-primary">Contact now</span>{" "}
          and leverage accurate tracking
        </MotionTypographyH2>
        <MotionButton asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>
      </MotionContainer>

      <MotionSeparator className="my-6" variants={itemVariants} />

      <MotionDiv variants={itemVariants}>
        <Offer />
      </MotionDiv>

      <MotionContainer variants={itemVariants}>
        <MotionTypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </MotionTypographyH2>
        <MotionButton asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>
      </MotionContainer>

      <MotionSeparator className="my-6" variants={itemVariants} />

      <MotionDiv variants={itemVariants}>
        <ClientTestimonial />
      </MotionDiv>

      <MotionContainer variants={itemVariants}>
        <MotionTypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </MotionTypographyH2>
        <MotionButton asChild className="w-full">
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
        <MotionButton asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>
      </MotionContainer>
    </MotionDiv>
  );
}
