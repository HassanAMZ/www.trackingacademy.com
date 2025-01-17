import Offer from "@/components/for-freelancers/offer";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import { TestimonialsCarousel } from "@/components/for-freelancers/testimonials-carousel";
import Hero from "@/components/home/hero";
import WorkHistory from "@/components/home/work-history";
import clients from "@/data/clients";
export default function ForFreelancers() {
  return (
    <main className="">
      <Hero
        heading={
          <h1>
            <span className="text-primary">Master Analytics and Tracking</span>{" "}
            in 12 Weeks – Guaranteed!
          </h1>
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
