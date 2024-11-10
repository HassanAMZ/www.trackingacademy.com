import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import VideoPlayer from "@/components/offers/offer-001/video-player";
import Link from "next/link";

// Hero Component
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="mb-2 border-primary/20">
            Limited Time Offer for Shopify Store Owners
          </Badge>

          <Text as="h1" variant="heading3xl" className="max-w-4xl">
            Transform Your Facebook Ads With{" "}
            <span className="text-primary">95%+ Accurate</span> Tracking
            <span className="text-primary"> — Or It’s FREE!</span>
          </Text>

          <Text as="p" className="max-w-2xl" variant="bodyLg">
            Say goodbye to data gaps, guesswork, and wasted ad spend. Our
            exclusive system guarantees 95%+ accuracy in tracking your Facebook
            Ads performance.
          </Text>

          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              Get Your FREE Tracking Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>95%+ Accuracy</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>7-Day Setup</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        <VideoPlayer
          src="/videos/home/reason-comparison-horizontal.mp4"
          placeholder="/images/home/reason-comparison-horizontal.gif"
          className="hidden sm:block"
        />
        {/* Vertical video for screens smaller than md */}
        <VideoPlayer
          src="/videos/home/reason-comparison-vertical.mp4"
          placeholder="/images/home/reason-comparison-vertical.gif"
          className="block sm:hidden"
        />
      </Container>
    </section>
  );
};

// Problem Section Component
const ProblemSection = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Text as="h2" variant="headingXl">
            Stop Losing Money to Inaccurate Facebook Ads Tracking
          </Text>
          <Text as="p" className="max-w-[700px]" variant="bodyLg">
            Tracking gaps are costing you money. If you don’t know which ads
            work, every dollar you spend could be a dollar lost. Our service
            pinpoints your current issues and delivers a 95%+ accurate tracking
            solution.
          </Text>
        </div>
      </Container>
    </section>
  );
};

// Solution Section Component with 7-Step Process
const SolutionSection = () => {
  const steps = [
    {
      title: "Precision Audit & Baseline Setup",
      description:
        "Complete audit of your current setup and identify tracking gaps",
    },
    {
      title: "Custom Integration with Facebook Pixel",
      description: "Ensures Facebook Pixel and Ads Manager capture everything",
    },
    {
      title: "Data Layer Installation",
      description: "Custom data layer for more reliable, server-side tracking",
    },
    {
      title: "Server-Side GTM Setup",
      description: "Google Containers configured and hosted in the cloud",
    },
    {
      title: "Track Key E-Commerce Events",
      description: "Track Add to Cart, Checkout, Purchase, and more",
    },
    {
      title: "Subdomain & Analytics Integration",
      description: "Custom subdomain and full Google Analytics setup",
    },
    {
      title: "7-Day Monitoring & QA",
      description: "Ensure perfect accuracy and optimize as needed",
    },
  ];

  return (
    <section className="py-16 ">
      <Container className="">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <Text as="h2" variant="headingXl">
              Here’s How We Guarantee 95% Accuracy
            </Text>
            <Text as="p" className="mt-4" variant="bodyLg">
              Our specialized system is designed for Shopify stores like yours.
            </Text>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {steps.map((step, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <Badge className="w-fit mb-2">Step {index + 1}</Badge>
                  <Text as="h3" className="font-semibold">
                    {step.title}
                  </Text>
                </CardHeader>
                <CardContent>
                  <Text as="p" variant="bodyLg">
                    {step.description}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">
              Get Your FREE Tracking Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      title: "See Every Dollar’s Impact",
      description:
        "With our 95%+ accuracy guarantee, you’ll know exactly which ads bring the best results",
    },
    {
      title: "Save Time and Effort",
      description:
        "Our system handles all the heavy lifting and ongoing optimizations",
    },
    {
      title: "Risk-Free Guarantee",
      description:
        "If we don’t hit 95% tracking accuracy, you don’t pay. Simple as that",
    },
    {
      title: "Custom Analytics Dashboard",
      description:
        "Get an intuitive, easy-to-read Google Analytics dashboard for instant insights",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Text as="h2" variant="headingXl" className="text-center">
            Why Choose Our 95%+ Accuracy System?
          </Text>

          <div className="grid gap-6 md:grid-cols-2 w-full">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <Text as="h3" className="font-semibold mb-2">
                        {benefit.title}
                      </Text>
                      <Text as="p" variant="bodyLg">
                        {benefit.description}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Guarantee Section Component
const GuaranteeSection = () => {
  return (
    <section className="py-16">
      <Container>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <AlertCircle className="h-12 w-12 text-primary" />
              <Text as="h2" variant="headingXl">
                Our "95%+ Accuracy or It’s FREE" Guarantee
              </Text>
              <Text as="p" className="max-w-xl">
                We’re confident that our system will deliver precise, actionable
                data for your Shopify store. If we don’t meet our 95% accuracy
                promise, you don’t pay a single cent.
              </Text>
              <Button size="lg" className="mt-4" asChild>
                <Link href="/contact">
                  Start Your FREE Audit Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

// Main Page Component that combines all sections
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <GuaranteeSection />
    </main>
  );
}
