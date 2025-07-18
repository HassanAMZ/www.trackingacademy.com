"use client";

import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import CouponOptInForm from "@/components/funnels/coupon-optin";
import TrackingTable from "@/components/global/tracking-table";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="grid min-h-screen place-content-center space-y-6 overflow-hidden py-12">
        <Hero
          heading={
            <h1>
              <span className="text-primary">Never Miss a Sale Again </span>- Track 95% of Your
              Conversions - <span className="text-primary"> Guaranteed!</span>
            </h1>
          }
          carousel={<TestimonialsCarousel2 />}
          benefits={[
            "100% done-for-you setup",
            "95%+ accuracy ",
            "One-time setup cost",
            "Completed within 7 days",
            "Improved ROAS by 20%",
            "Scaleable Solution ",
          ]}
          customCtaButton={
            <Button
              size="lg"
              className="flex max-w-4xl flex-col p-4 text-center text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer hover:bg-primary/90 md:py-12 md:text-left"
              onClick={() => setIsModalOpen(true)}
            >
              <div>
                🎟️ Claim Your $300 Coupon for 7-Days "See Every Sale" Tracking System
                <span className="mt-2 block text-sm font-medium opacity-90">
                  Limited to the first 10 clients — act fast before it expires
                </span>
              </div>
            </Button>
          }
          supportingComponent={<TrackingTable />}
          clientCountText="1032+ websites configured with 95% accuracy"
        />
        <Container>
          <h1 className="pt-12 pb-6 text-center">300+ Satisfied Customers Can't Be Wrong</h1>{" "}
          {/* <TestimonialsCarousel /> */}
        </Container>
        <TestimonialGrid />{" "}
        <Container className="space-y-12 py-12">
          <Button
            size="lg"
            className="md:py mx-auto flex max-w-4xl flex-col p-4 text-center text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              🎟️ Claim Your $300 Coupon for 7-Days "See Every Sale" Tracking System
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
            <DialogTitle className="text-center font-bold text-primary">
              Claim Your $300 Coupon
            </DialogTitle>
          </DialogHeader>
          <CouponOptInForm redirectUrl="./profit" />
        </DialogContent>
      </Dialog>
    </>
  );
}
