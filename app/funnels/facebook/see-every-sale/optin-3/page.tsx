"use client";

import CaseStudyCarousel from "@/components/case-study/case-study-carousel";
import CouponOptInForm from "@/components/funnels/coupon-optin";
import YoutubeEmbed from "@/components/global/youtube-embed";
import TestimonialsCarousel from "@/components/testimonial/testimonial-carousal";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { caseStudies } from "@/data/case-studies";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden py-12">
        <Container className="flex max-w-6xl flex-col items-center space-y-6 py-4 text-center">
          <h1>
            We{" "}
            <span className="text-primary">Fix Broken Facebook Tracking </span>{" "}
            for Businesses so they can finally{" "}
            <span className="text-primary underline">scale again</span>
          </h1>
          <h4 className="text-muted-foreground max-w-5xl">
            <span className="text-primary font-semibold">300$ off:</span> “See
            Every Sale” Tracking Setup For Facebook's Data Sharing Restrictions.
            All done-for-you, in just 3 days, with 95% Accurate Data Tracking,
            without Violating Any Facebook's policies.{" "}
          </h4>{" "}
          <YoutubeEmbed embedId="tdQufJ-qadE" className="max-w-4xl" />
          {/* CTA Button */}{" "}
          <Button
            size="lg"
            className="hover:bg-primary/90 flex flex-col py-6 text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              🎟️ Claim Your $300 Coupon for 3-Day "See Every Sale" Tracking
              System
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        </Container>
        <div className="w-full max-w-full overflow-hidden py-12">
          <CaseStudyCarousel caseStudies={caseStudies} />
        </div>
        <Container className="flex flex-col items-center space-y-12 pb-4 text-center">
          <h1 className="max-w-full pt-12 pb-6 text-2xl break-words sm:text-3xl md:text-4xl">
            300+ Satisfied Customers Can't Be Wrong
          </h1>
          {/* <TestimonialsCarousel /> */}
          <TestimonialGrid /> {/* CTA Button */}
          <Button
            size="lg"
            className="hover:bg-primary/90 mx-auto flex flex-col py-6 text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              🎟️ Claim Your $300 Coupon for 3-Day "See Every Sale" Tracking
              System
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        </Container>
      </section>{" "}
      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-bold">
              Claim Your $300 Coupon
            </DialogTitle>
          </DialogHeader>
          <CouponOptInForm redirectUrl="./profit" />
        </DialogContent>
      </Dialog>
    </>
  );
}
