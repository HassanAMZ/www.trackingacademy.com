import Link from "next/link";
import Offer from "@/components/offers/offer-1";
import { Button } from "@/components/ui/button";
import Services from "@/components/home/services";
import Container from "@/components/ui/container";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import Text from "@/components/ui/text";
import Hero from "@/components/home/hero";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import TrackingTable from "@/components/global/tracking-table";
import clients from "@/data/clients";
import Navbar from "@/components/global/navbar";
export default function Home() {
  return (
    <main className="space-y-5">
      <Navbar />
      <Hero
        heading={
          <Text as="h1" variant="heading3xl">
            <span className="text-primary">Never Miss a Sale Again </span>-
            Track 95% of Your Conversions -{" "}
            <span className="text-primary"> Guaranteed!</span>
          </Text>
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
        ctaText="Show me the web analytics portfolio"
        ctaLink="/portfolio"
        secondaryCtaLink="/contact"
        secondaryCtaText="Schedule a Meeting"
        supportingComponent={<TrackingTable />}
        clients={clients}
        clientCountText="1032+ websites configured with 95% accuracy"
      />

      <Offer />
      <Services />
      <Container>
        <Text as="h2" variant="heading2xl" className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </Text>
        <Container>
          <Button asChild className="w-full">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </Container>
      </Container>

      <FrequentlyAskedQuestions />
      <Container>
        <Button asChild className="w-full">
          <Link href="/contact">Book a Call</Link>
        </Button>
      </Container>
    </main>
  );
}
