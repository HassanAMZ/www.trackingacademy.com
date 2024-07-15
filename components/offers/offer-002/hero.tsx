"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypographyP from "@/components/ui/typography-p";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import TypographyH1 from "@/components/ui/typography-h1";
import { Star } from "lucide-react";
import YoutubeEmbed from "@/components/global/youtube-embed";
import TestimonialsCarousel from "../offer-002/testimonial-carousal";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { containerVariants, itemVariants } from "@/utils/framerMotion";

const MotionTypographyH1 = motion(TypographyH1);
const MotionTypographyP = motion(TypographyP);
const MotionButton = motion(Button);
const MotionDiv = motion.div;

export default function Hero() {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const deadline = new Date("2024-08-14");
      const today = new Date();
      const timeDiff = deadline.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(daysDiff);
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 86400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="">
      <MotionDiv
        className="flex flex-col items-center justify-center space-y-4 py-4 pt-4 text-center sm:py-6 lg:pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionTypographyP
          variants={itemVariants}
          className="w-max rounded-lg bg-accent p-2 text-center"
        >
          <strong>{daysLeft} days to upgrade to Checkout Extensibility.</strong>{" "}
          Act now to avoid disruptions.{" "}
        </MotionTypographyP>
        <MotionTypographyH1 variants={itemVariants}>
          <span className="text-primary">Upgrade Your Shopify Checkout </span>
          with Tracking Academy
        </MotionTypographyH1>

        <MotionTypographyP applyMargin={false} variants={itemVariants}>
          Don't wait until the last minute. Ensure your store is prepared for
          the future of e-commerce with Checkout Extensibility{" "}
        </MotionTypographyP>

        <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-4xl p-0" />

        <MotionDiv
          className="grid grid-cols-2 space-y-1 py-2 text-left"
          variants={itemVariants}
        >
          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            95% accuracy guarantee or full refund policy
          </MotionTypographyP>
          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            Increase conversion rates by up to 30%
          </MotionTypographyP>
          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            Setup and optimization completed within 7 days
          </MotionTypographyP>
          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            Avoid losing sales with updated checkouts
          </MotionTypographyP>

          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            Checkout customizations and payment options
          </MotionTypographyP>
          <MotionTypographyP variants={itemVariants}>
            <span className="text-primary">✔ </span>
            More secure, faster, and safer checkouts
          </MotionTypographyP>
        </MotionDiv>

        <MotionButton
          asChild
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/offers/checkout-extensibility-upgrade/submit-query">
            Schedule a Meeting
          </Link>
        </MotionButton>

        <MotionDiv
          className="flex items-center justify-start gap-2"
          variants={itemVariants}
        >
          <motion.div className="relative h-8 w-8" variants={itemVariants}>
            <Avatar className="z-1 absolute left-0 top-0">
              <AvatarImage
                src="/images/clients/malik-osama.jfif"
                alt="@malik-osama"
              />
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>

            <Avatar className="z-2 absolute left-4 top-0">
              <AvatarImage
                src="/images/clients/philipp-herglotz.jfif"
                alt="@philipp-herglotz"
              />
              <AvatarFallback>PH</AvatarFallback>
            </Avatar>

            <Avatar className="z-3 absolute left-8 top-0">
              <AvatarImage
                src="/images/clients/imtiaz-ahmad.jfif"
                alt="@imtiaz-ahmad"
              />
              <AvatarFallback>IA</AvatarFallback>
            </Avatar>
          </motion.div>
          <MotionTypographyP
            applyMargin={false}
            className="pl-8 text-sm"
            variants={itemVariants}
          >
            1032+ websites configured with 95% accuracy
          </MotionTypographyP>
        </MotionDiv>
      </MotionDiv>
    </Container>
  );
}
