import Offer from "@/components/for-freelancers/offer";
import Navbar from "@/components/global/navbar";
import WorkHistory from "@/components/home/work-history";
import React from "react";
import Hero from "@/components/home/hero";
import Text from "@/components/ui/text";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import clients from "@/data/clients";
import { TestimonialsCarousel } from "@/components/for-freelancers/testimonials-carousel";
export default function ForFreelancers() {
  return (
    <main className="">
      <Hero
        heading={
          <Text as="h1" variant="heading3xl">
            <span className="text-primary">Master Analytics and Tracking</span>{" "}
            in 12 Weeks – Guaranteed!
          </Text>
        }
        carousel={<TestimonialsCarousel2 />}
        benefits={[
          "Hands-on practice.",
          "Learn from industry experts.",
          "Lifetime access to courses.",
          "Supportive community.",
          "Certificate of completion.",
        ]}
        ctaText="Enroll Now"
        ctaLink="/for-freelancers/enroll-now"
        supportingComponent={<TestimonialsCarousel />}
        clients={clients}
        clientCountText="2 students trained & 2 success stories"
      />

      <WorkHistory />
      <Offer />
    </main>
  );
}
