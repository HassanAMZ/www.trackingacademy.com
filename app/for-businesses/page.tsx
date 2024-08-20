import Link from "next/link";
import Offer from "@/components/offers/offer-1";
import { Button } from "@/components/ui/button";
import Services from "@/components/home/services";
import Container from "@/components/ui/container";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import Text from "@/components/ui/text";
import Hero from "@/components/home/hero";
export default function Home() {
  return (
    <main className="space-y-5">
      <Hero />

      {/* <Offer /> */}
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
