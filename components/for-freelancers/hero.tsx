import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TestimonialsCarousel } from "./testimonials-carousel";
import Text from "@/components/ui/text";
import { containerVariants, itemVariants } from "@/utils/framerMotion";
import {
  MotionText,
  MotionContainer,
  MotionDiv,
  MotionAvatar,
} from "@/utils/framerMotion";
import TestimonialsCarousel2 from "./testimonials-carousal-2";

export default function Hero() {
  return (
    <MotionContainer
      className="sm:py py-2 lg:pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-start justify-center gap-4 md:grid md:grid-cols-3">
        <div className="space-y-3 md:col-span-2">
          <Text as="h1" variant="heading3xl">
            <span className="text-primary">Master Analytics and Tracking</span>{" "}
            in 12 Weeks – Guaranteed!
            {/* Learn how to turn your data into{" "}
            <span className="text-primary">actionable insights</span> and{" "}
            <span className="text-primary">grow your business</span>. */}
          </Text>
          <Text as="p" variant="bodyMd" applyMargin={false}>
            Learn how to turn your data into actionable insights and grow your
            business. Our expert-led training ensures you master conversion
            tracking and analytics, with hands-on practice and real-world
            projects.
          </Text>
          <TestimonialsCarousel2 />
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="space-y-1">
              <Text as="p" variant="bodyMd">
                ✔ Setup and optimized within 7 days.
              </Text>
              <Text as="p" variant="bodyMd">
                ✔ Achieve 95% tracking accuracy.
              </Text>
              <Text as="p" variant="bodyMd">
                ✔ 95% accuracy or full refund.
              </Text>
            </div>
          </div>

          <Button asChild className="w-full px-10 py-4 md:w-max">
            <Link href="/for-freelancers/enroll-now">Enroll Now</Link>
          </Button>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="relative h-8 w-8">
              <Avatar className="absolute left-0 top-0 z-1">
                <AvatarImage
                  src="/images/clients/malik-osama.jfif"
                  alt="@malik-osama"
                />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>

              <Avatar className="absolute left-4 top-0 z-2">
                <AvatarImage
                  src="/images/clients/philipp-herglotz.jfif"
                  alt="@philipp-herglotz"
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>

              <Avatar className="absolute left-8 top-0 z-3">
                <AvatarImage
                  src="/images/clients/imtiaz-ahmad.jfif"
                  alt="@imtiaz-ahmad"
                />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
            </div>
            <Text as="p" variant="bodyMd" applyMargin={false} className="pl-10">
              2 students trained & 2 success stories
            </Text>
          </div>
        </div>

        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg">
          <TestimonialsCarousel />
        </div>
      </div>
    </MotionContainer>
  );
}
