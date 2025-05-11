"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import CouponOptInForm from "@/components/landing-page/coupon-optin";

const bulletPoints = [
  {
    title:
      "Here's the secret Meta doesn't want restricted data advertisers to know",
    subtitle: "(and how to fix it)",
  },
  {
    title: "5-step proven system —",
    subtitle: 'Our "See Every Sale" protocol brings your pixel back to life',
  },
  {
    title: "The hidden tracking method top 1% brands quietly use",
    subtitle: "to scale banned ad accounts safely",
  },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="grid min-h-screen place-content-center overflow-hidden py-16">
        <Container className="flex max-w-7xl flex-col items-center space-y-8 text-center">
          <h1>
            Fix Your Facebook's Data Sharing Restrictions and Restore 95%+
            Accurate Data for Facebook Ads
          </h1>
          <h4 className="text-muted-foreground max-w-4xl">
            All done-for-you, in just 3 days, without violating Facebook's
            policies or getting flagged. Track every ecommerce event.
          </h4>

          <div className="grid w-full max-w-6xl gap-8 px-3 py-6 md:grid-cols-2">
            {/* Left: Bullet Points */}
            <div className="order-1 flex flex-col justify-around space-y-6 text-left sm:-order-1 md:pr-4">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className="bg-primary flex h-5 w-5 items-center justify-center rounded">
                      <Check className="text-primary-foreground h-4 w-4" />
                    </div>
                  </div>
                  <h4 className="text-foreground ml-3">
                    <span className="font-medium">{point.title}</span>{" "}
                    {point.subtitle}
                  </h4>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="flex items-center justify-center">
              <div className="bg-muted w-full overflow-hidden rounded-md">
                <Image
                  src="/images/hero/data-sharing-restrcition-03.png"
                  alt="Illustration of social sharing and data tracking"
                  width={1080}
                  height={1080}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="hover:bg-primary/90 flex flex-col py-20 text-xl font-bold text-wrap whitespace-pre-wrap sm:py-16 md:py-12"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              Claim Your $300 Coupon for 3-Day "See Every Sale™" Tracking
              System
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        </Container>
      </section>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-bold">
              Claim Your $300 Coupon
            </DialogTitle>
          </DialogHeader>
          <CouponOptInForm redirectUrl="/landing-page/3-days-see-every-sale/book-a-meeting" />
        </DialogContent>
      </Dialog>
    </>
  );
}
