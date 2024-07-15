import Offer from "@/components/home/offer";
import ClientTestimonial from "@/components/home/testimonaials";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/offers/offer-002/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/ui/container";
import { TypographyH2 } from "@/components/ui/typography";
import TestimonialsCarousel from "@/components/offers/offer-002/testimonial-carousal";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="space-y-4 sm:space-y-8 lg:space-y-12">
      <Hero />
      <TestimonialsCarousel />

      <Container>
        <TypographyH2 className="text-center">
          Watched the video? Contact now and leverge accurate tracking
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>

      <Separator className="my-6" />
      <Offer />

      <Container>
        <TypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>

      <Separator className="my-6" />
      <ClientTestimonial />

      <Container>
        <TypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>

      <FrequentlyAskedQuestions />

      <Container>
        <TypographyH2 className="text-center">
          Optimize Your Tracking in 7 Days! Get Started with No Risk.
        </TypographyH2>
        <Button asChild className="w-full">
          <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
            Schedule a Meeting
          </Link>
        </Button>
      </Container>
    </main>
  );
}
