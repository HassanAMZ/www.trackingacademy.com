import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import TrackingTable from "@/components/global/tracking-table";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import clients from "@/data/clients";
import { Link } from "next-view-transitions";
export default function Home() {
  return (
    <main className="space-y-5">
      <Hero
        heading={
          <h1>
            <span className="text-primary">Never Miss a Sale Again </span>-
            Track 95% of Your Conversions -{" "}
            <span className="text-primary"> Guaranteed!</span>
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
        ctaText="Schedule a Meeting"
        ctaLink="/contact"
        supportingComponent={<TrackingTable />}
        clients={clients}
        clientCountText="1032+ websites configured with 95% accuracy"
      />

      {/* <Offer /> */}
      <Services />
      <Container>
        <h2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </h2>
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
