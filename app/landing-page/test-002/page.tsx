import TestimonialsCarousel from '@/components/offers/offer-002/testimonial-carousal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
        <Badge variant="outline">Revolutionary Ad Tracking Post-iOS 17 World</Badge>
        <Text as="h1" variant="heading3xl" className="max-w-4xl">
          Unlock Effortless Business Growth: Double Your Ad Efficiency While Saving 20+ Hours Per
          Month
        </Text>
        <Text as="h2" variant="headingMd" className="max-w-3xl text-muted-foreground">
          A Done-For-You System to Optimize Tracking, Automate Workflows, and Scale Seamlessly—In
          Just 30 Days.
        </Text>

        <div className="flex items-center space-x-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Reserve Your Spot Today – Only 30 Slots Available!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="max-w-2xl">
          <TestimonialsCarousel />
        </div>
      </Container>
    </section>
  );
};

const ProblemAwareness = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="items-left relative z-20 flex !max-w-5xl flex-col justify-center space-y-8 py-12 text-left">
        <Text as="h2" variant="heading2xl" className="">
          The Hidden Cost of Poor Analytics and Inefficient Systems
        </Text>
        <Text as="p" variant="headingMd" className="text-muted-foreground">
          Many businesses lose up to 40% of ad spend due to inaccurate tracking and inefficiencies.
          Teams are overwhelmed with manual tasks and confusing data. Time and money are wasted
          without actionable insights.
        </Text>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {[
            'Missed Opportunities: Poor insights lead to underperforming campaigns.',
            'Lost Hours: Teams are bogged down by manual processes.',
            'Stalled Growth: Without clarity, scaling feels impossible.',
          ].map((point, index) => (
            <Card key={index} className="p-6">
              <Text as="p" variant="bodySm" className="">
                {point}
              </Text>
            </Card>
          ))}
        </div>

        <div className="w-full space-y-2 rounded-lg bg-muted p-8">
          <Text as="h2" variant="headingXl">
            Businesses with Efficient Tracking Systems
          </Text>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Optimize ad spend for maximum ROI</li>
            <li>Automate repetitive tasks, saving hours of work</li>
            <li>Make data-driven decisions for consistent growth</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ProblemAwareness />
    </main>
  );
}
