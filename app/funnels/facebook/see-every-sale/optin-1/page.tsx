"use client";

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
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const bulletPoints = [
  {
    title: "Struggling with Restricted Data? ",
    subtitle: "Discover What Facebook Won't Say — and the Fix You Need.",
  },
  {
    title: "Fix Your Facebook Tracking in 3 Days ",
    subtitle: "— With Our Simple 5-Step “See Every Sale” System",
  },
  {
    title: "Our Stealth Tracking Method ",
    subtitle:
      "— Trusted By the Top 1% to Scale their Facebook Ads with Confidence",
  },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="grid min-h-screen place-content-center overflow-hidden py-12">
        <Container className="flex max-w-7xl flex-col items-center space-y-8 text-center">
          <h1>
            We
            <span className="text-primary">
              {" "}
              Fix Broken Facebook Tracking
            </span>{" "}
            for Businesses so they can finally{" "}
            <span className="text-primary underline">scale again</span>
          </h1>
          <h4 className="text-muted-foreground max-w-5xl">
            <span className="text-primary font-semibold">300$ off:</span> “See
            Every Sale” Tracking Setup For Facebook's Data Sharing Restrictions.
            All done-for-you, in just 3 days, with 95% Accurate Data Tracking,
            without Violating Any Facebook's policies.
          </h4>{" "}
          <div className="grid w-full gap-8 px-3 py-6">
            {/* Right: Image */}
            <YoutubeEmbed embedId="tdQufJ-qadE" className="max-w-4xl" />{" "}
            {/* <div className="flex items-center justify-center">
              <div className="bg-muted w-full overflow-hidden rounded-md">
                <Image
                  src="/images/hero/data-sharing-restrcition-03.png"
                  alt="Illustration of social sharing and data tracking"
                  width={1920}
                  height={1080}
                  className="rounded-lg"
                />
              </div>
            </div> */}{" "}
            {/* Left: Bullet Points */}
            <div className="flex gap-4">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start">
                  {/* <div className="mt-1 shrink-0">
                    <div className="bg-primary flex h-5 w-5 items-center justify-center rounded">
                      <Check className="text-primary-foreground h-4 w-4" />
                    </div>
                  </div> */}
                  <h4 className="text-foreground ml-3">
                    <span className="text-primary font-semibold">
                      {point.title}
                    </span>{" "}
                    <span className="">{point.subtitle}</span>
                  </h4>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* CTA Button */}
          <Button
            size="lg"
            className="hover:bg-primary/90 flex flex-col p-4 text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              🎟️ Claim Your $300 Coupon for 3-Day "See Every Sale" Tracking
              System
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>{" "}
          <h1 className="pt-12 pb-6">
            300+ Satisfied Customers Can't Be Wrong
          </h1>{" "}
          {/* <TestimonialsCarousel /> */}
        </Container>

        <TestimonialGrid upwork={true} />
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
