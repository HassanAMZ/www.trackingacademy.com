// components/offers/offer-001/submit-query/hero.js
import React from "react";
import {
  MotionText,
  MotionContainer,
  MotionDiv,
  MotionAvatar,
} from "@/utils/framerMotion";
import ContactForm from "@/components/contact/contact-form";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TestimonialsCarousel from "../../offer-002/testimonial-carousal";
import { containerVariants, itemVariants } from "@/utils/framerMotion";
import Text from "@/components/ui/text";

export default function Hero() {
  return (
    <MotionContainer
      className="sm:py py-2 lg:pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid items-center justify-center gap-4 pt-4 lg:grid-cols-5">
        <MotionDiv className="space-y-4 lg:col-span-3" variants={itemVariants}>
          <MotionText as="h1" variant="heading3xl">
            <span>Submit the Form now and</span>{" "}
            <span className="text-primary">Maximize Every Click </span>- Achieve
            95% Accurate Tracking -{" "}
            <span className="text-primary">Guaranteed Results!</span>
          </MotionText>

          <div className="max-w-2xl self-start pt-4 md:pt-2">
            <TestimonialsCarousel />
          </div>

          <MotionDiv
            className="grid grid-cols-1 place-content-center space-y-1 self-center py-2"
            variants={itemVariants}
          >
            <Text as="p" variant="bodyMd">
              ✔ GDPR-compliant secure tracking.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ 24/7 Expert Assistance.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ Weekly custom report delivery.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ 95% tracking accuracy or your money back.
            </Text>
          </MotionDiv>

          <MotionDiv
            className="flex items-center justify-start gap-2 self-center"
            variants={itemVariants}
          >
            <div className="relative h-8 w-8">
              <MotionAvatar
                className="z-1 absolute left-0 top-0"
                variants={itemVariants}
              >
                <AvatarImage
                  src="/images/clients/malik-osama.jfif"
                  alt="@malik-osama"
                />
                <AvatarFallback>MO</AvatarFallback>
              </MotionAvatar>

              <MotionAvatar
                className="z-2 absolute left-4 top-0"
                variants={itemVariants}
              >
                <AvatarImage
                  src="/images/clients/philipp-herglotz.jfif"
                  alt="@philipp-herglotz"
                />
                <AvatarFallback>PH</AvatarFallback>
              </MotionAvatar>

              <MotionAvatar
                className="z-3 absolute left-8 top-0"
                variants={itemVariants}
              >
                <AvatarImage
                  src="/images/clients/imtiaz-ahmad.jfif"
                  alt="@imtiaz-ahmad"
                />
                <AvatarFallback>IA</AvatarFallback>
              </MotionAvatar>
            </div>
            <MotionText
              as="p"
              variant="bodyMd"
              applyMargin={false}
              className="pl-8 text-sm"
            >
              Over 1032 websites optimized with 95% accuracy
            </MotionText>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="-order-1 lg:order-1 lg:col-span-2"
          variants={itemVariants}
        >
          <ContactForm
            thankYouUrl="/offers/95-accurate-tracking-in-7-days/submit-query/book-a-meeting"
            gtmCustomEventName="offer_form_submission"
            isItAFit={false}
            formHeader={false}
          />
        </MotionDiv>
      </div>
    </MotionContainer>
  );
}
