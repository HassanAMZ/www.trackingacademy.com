"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { DollarSign, RefreshCw, Shield, TrendingUp, Zap } from "lucide-react";
import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import YoutubeEmbed from "@/components/global/youtube-embed";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import getCaseStudy from "@/utils/getCaseStudy";

export default function Page() {
  const ScheduleButton = () => (
    <Button
      asChild
      size="lg"
      className="w-full text-center mx-auto py-8 "
      onClick={() =>
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "contact",
        })
      }
    >
      <Link href="#book-a-meeting">
        <h3>Schedule Your Call To Fix Your Meta Ads Tracking</h3>
      </Link>
    </Button>
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="py-8  bg-gradient-to-b from-primary/10 to-background">
        <Container className="max-w-6xl text-center md:space-y-12 space-y-6">
          <h1 className="font-extrabold">
            We Will Fix Your Meta Tracking To{" "}
            <span className="text-primary underline">Get More Patients</span> For Your Dental
            Clinic. Here's How...
          </h1>

          <YoutubeEmbed embedId="tdQufJ-qadE" className="max-w-4xl" />

          <h2 className="font-extrabold">
            Watched The Video And Want Us To Fix Your Meta Tracking For You?
            <span className="text-primary underline"> Book A Call Using The Button Below </span> To
            Qualify.
          </h2>
          <ScheduleButton />
        </Container>
      </section>

      {/* Process Section */}
      <Container className="max-w-6xl pb-12 pt-4 md:space-y-12 space-y-6">
        <Separator />
        <h1>
          We Will Fix Your Meta Tracking To{" "}
          <span className="text-primary underline">Get More Patients</span> For Your Dental Clinic.
          Here's How...
        </h1>
        <div className="grid gap-12 max-w-5xl">
          <div className="flex flex-col  gap-6">
            <h2 className="font-bold">Step 1: Onboarding Call</h2>
            <h4>
              First, we'll have a quick onboarding call to get the necessary information about your
              dental practice like your ideal patient, how your current tracking is configured, and
              which level of restriction you meta ads account have before we can qualify you for the
              DentalPixel Pro.
            </h4>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold">Step 2: Tracking Creation & Setup</h2>
            <h4>
              After our onboarding call, our team will immediately get started creating a complete
              HIPAA-compliant tracking system to capture every lead, call, and appointment booking.
              We will handle the techincal process end to end so you don't have to worry about it.
            </h4>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold">Step 3: Handover</h2>
            <h4>
              Once we have your tracking system configured, you can launch your Meta Ads to start
              capturing every patient interaction with your ads. All you have to do is monitor the
              results, which we recommend checking daily for optimal performance.
            </h4>
          </div>
        </div>

        <ScheduleButton />

        <Separator />
      </Container>

      {/* Case Studies */}
      <section>
        <Container className="max-w-6xl space-y-12 py-8">
          <div className="text-center space-y-4">
            <h1>Success Stories From Our Clients</h1>
            <h4 className="text-muted-foreground max-w-3xl mx-auto">
              See how we've helped dental practices recover their Meta Ads tracking and scale their
              patient acquisition.
            </h4>
          </div>
        </Container>
        {getCaseStudy("zenon") && <FeaturedCaseStudy caseStudy={getCaseStudy("zenon")!} />}
        {getCaseStudy("northridgeaddiction") && (
          <FeaturedCaseStudy caseStudy={getCaseStudy("northridgeaddiction")!} />
        )}
        {getCaseStudy("saneofrance") && (
          <FeaturedCaseStudy caseStudy={getCaseStudy("saneofrance")!} />
        )}
        {getCaseStudy("emiratesadvisory") && (
          <FeaturedCaseStudy caseStudy={getCaseStudy("emiratesadvisory")!} />
        )}
        {getCaseStudy("peachandcream") && (
          <FeaturedCaseStudy caseStudy={getCaseStudy("peachandcream")!} />
        )}
        <Container>
          <ScheduleButton />
        </Container>
      </section>
      {/* Testimonials */}
      <section className="py-16">
        <Container className="">
          <div className="text-center space-y-4 mb-12">
            <h1>300+ Businesses Recovered Their Meta Tracking</h1>
            <h4 className="text-muted-foreground mx-auto max-w-4xl">
              From dental clinics to service businesses, we've restored compliant tracking for every
              client. See how we recovered their ROAS while maintaining full compliance.
            </h4>
          </div>
        </Container>
        <TestimonialGrid showUpworkStats={false} />
      </section>
      {/* Calendar Section */}
      <section className="py-16 space-y-8">
        <Container className="max-w-4xl text-center space-y-8">
          <div>
            <h1 className="mb-4">Schedule Your Free Meta Tracking Setup</h1>
            <h4 className="opacity-90">
              Get your free audit now and discover exactly how many patients your dental clinic is
              losing to Meta's tracking restrictions.
            </h4>
          </div>
        </Container>
        <MeetingCalendar />
      </section>

      {/* FAQ Section */}
      <section className="py-4">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-xl">
              Everything you need to know about fixing your Facebook tracking
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <Zap className="text-primary mr-2 h-5 w-5" />
                  How quickly can you fix my tracking?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Most clients see their tracking restored within 72 hours. The process includes:
                  audit (Day 1), implementation (Day 2), and testing (Day 3). Complex cases may take
                  up to 7 days.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <Shield className="text-primary mr-2 h-5 w-5" />
                  Will this violate Meta's policies?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  No. Our solution is 100% compliant with all Meta policies and data protection
                  regulations (GDPR, CCPA, HIPAA). We work within Meta's framework to restore
                  tracking while respecting all restrictions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <TrendingUp className="text-primary mr-2 h-5 w-5" />
                  What kind of results should I expect?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our clients typically see 85-95% of their tracking accuracy restored, ROAS
                  recovery to pre-restriction levels, and the ability to build custom audiences
                  again. Results vary by business category and implementation complexity.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <DollarSign className="text-primary mr-2 h-5 w-5" />
                  What if it doesn't work for my business?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If we can't significantly improve your
                  tracking within 30 days, you get a full refund. We've successfully helped 300+
                  businesses, with a 98.7% success rate.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <RefreshCw className="text-primary mr-2 h-5 w-5" />
                  Do you provide ongoing support?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes. All implementations include 90 days of monitoring and support to ensure your
                  tracking remains stable. We also provide guidance on maintaining compliance as
                  regulations evolve.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </section>
      {/* Testimonials */}
      <section className="py-16">
        <Container className="">
          <div className="text-center space-y-4 mb-12">
            <h1>300+ Businesses Recovered Their Meta Tracking</h1>
            <h4 className="text-muted-foreground mx-auto max-w-4xl">
              From dental clinics to service businesses, we've restored compliant tracking for every
              client. See how we recovered their ROAS while maintaining full compliance.
            </h4>
          </div>
        </Container>
        <TestimonialGrid upwork={true} showUpworkStats={false} />
        <Container>
          <ScheduleButton />
        </Container>
      </section>
    </main>
  );
}
