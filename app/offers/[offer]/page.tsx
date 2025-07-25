import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import DetailsCards from "@/components/funnels/details-card";
import MeetingBookingButton from "@/components/global/meeting-booking-button";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Hero from "@/components/home/hero";
import { ServiceCard } from "@/components/pricing/pricing-vertical";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { offers } from "@/data/offers";
import getCaseStudy from "@/utils/getCaseStudy";
import getServicesByKeys from "@/utils/getServices";
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Database,
  DollarSign,
  Eye,
  FileText,
  Monitor,
  Phone,
  PlayCircle,
  RefreshCw,
  Search,
  Settings,
  Shield,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import React from "react";

// Generate static params for all offers
export async function generateStaticParams() {
  return Object.keys(offers).map((offer) => ({
    offer: offer,
  }));
}

// Icon mapping for dynamic icon rendering
const iconMap = {
  AlertTriangle,
  XCircle,
  DollarSign,
  Database,
  Search,
  Settings,
  TrendingUp,
  Zap,
  Shield,
  RefreshCw,
  Monitor,
  FileText,
  Eye,
  Activity,
  Phone,
  PlayCircle,
};

export default async function Page({ params }: { params: Promise<{ offer: string }> }) {
  const { offer } = await params;

  const offerData = offers[offer] || offers["default-offer"];

  return (
    <main>
      <Hero
        eyebrow={offerData.eyebrow}
        heading={
          <h1 className="mx-auto text-center">
            {offerData.headline.prefix}{" "}
            {offerData.headline.conversion.map((conv, index) => (
              <span key={index} className="text-destructive underline">
                {conv}
              </span>
            ))}{" "}
            {offerData.headline.suffix}
          </h1>
        }
        subheading={
          <>
            {offerData.embedId.youtube && (
              <YoutubeEmbed embedId={offerData.embedId.youtube} className="p-0" />
            )}
            <h3 className="mx-auto max-w-3xl text-center">
              Watched the video and want us to fix your tracking? Book a Call using the Button Below
              to Qualify.
            </h3>
          </>
        }
        benefits={offerData.benefits}
        customCtaButton={<MeetingBookingButton offerData={offerData} />}
      />

      {/* Problem Amplification Section */}
      {/* <Container className="max-w-6xl py-12">
        <div className="transform space-y-8 rounded-lg border border-destructive/20 p-2 md:p-12">
          <div className="mb-12 text-center">
            <Badge variant="destructive" className="mb-4 animate-pulse">
              ❌ {offerData.problemStatement.title}
            </Badge>
            <h2 className="mb-4 text-destructive">{offerData.problemStatement.title}</h2>
            <h4 className="mx-auto max-w-3xl text-accent-foreground">
              {offerData.problemStatement.description}
            </h4>
          </div>

          <DreamOutcome
            dreamOutcomeList={offerData.problemStatement.alerts.map((alert, index) => ({
              text: alert.title || "No title provided",
              description: alert.description || "No description available.",
              embedId: offerData.embedId,
              icon: alert.icon,
            }))}
          />

          <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
            <p className="text-lg font-medium text-primary">
              "It's not your ads. It's your tracking."
            </p>
            <p className="mt-2">
              We've fixed this for 100+ clinics — and we'll fix it for you too.
            </p>
          </div>
        </div>
      </Container> */}

      {/* Solution Section */}
      <section className="py-8">
        <DetailsCards {...offerData.solution} />

        <Container className="max-w-6xl">
          <div className="text-center">
            <MeetingBookingButton offerData={offerData} />
          </div>
        </Container>
      </section>
      {/* Services Grid */}
      <Container>
        <div className="mx-auto max-w-4xl space-y-6 py-12 text-center">
          <h2>
            Choose Your Perfect
            <span className="text-primary"> Tracking Solution</span>
          </h2>
          <h4 className="mx-auto max-w-3xl text-muted-foreground">
            Reclaim your lost conversions and maximize your ad spend ROI with our comprehensive
            tracking solutions. From basic audits to enterprise-level implementations.
          </h4>
        </div>

        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {getServicesByKeys([
            // "starter-subscription",
            "growth-subscription",
            "pro-subscription",
            "premium-subscription",
          ]).map((service) => (
            <React.Fragment key={service.id}>
              <ServiceCard service={service} />
            </React.Fragment>
          ))}
        </div>
      </Container>
      {/* Case Studies */}
      {offerData.caseStudyIds.map((caseStudyId) => {
        const caseStudy = getCaseStudy(caseStudyId);
        return caseStudy ? <FeaturedCaseStudy key={caseStudyId} caseStudy={caseStudy} /> : null;
      })}

      {/* FAQ Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="space-y-6 py-6 text-center">
            <h2>Frequently Asked Questions</h2>
            <h4 className="mx-auto max-w-3xl text-accent-foreground">
              Everything you need to know about fixing your {offerData.businessType} Facebook
              tracking
            </h4>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="item-1">
            {offerData.faq.map((faqItem, index) => {
              const IconComponent = iconMap[faqItem.icon];
              return (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <IconComponent className="mr-2 h-5 w-5 text-primary" />
                      {faqItem.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="">{faqItem.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Container>
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-primary">{offerData.testimonialSection.title}</h2>
            <h4 className="mx-auto max-w-3xl text-accent-foreground">
              {offerData.testimonialSection.description}
            </h4>
          </div>
        </Container>
        <TestimonialGrid upwork={true} showUpworkStats={false} />
        <Container>
          <MeetingBookingButton offerData={offerData} />
        </Container>
      </section>
      {/* Final CTA */}
      <div className="min-h-screen py-16">
        <section className="bg-gradient-to-b from-primary/20 to-background py-16">
          <Container className="max-w-4xl text-center">
            <div className="space-y-6 py-6">
              <h2 className="">{offerData.finalCta.title}</h2>
              <h4 className="mx-auto max-w-3xl text-accent-foreground">
                {offerData.finalCta.description}
              </h4>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <h6 className="flex items-center justify-center space-x-2 font-bold">
                <CheckCircle className="h-5 w-5" />
                <span>Free 24-hour audit</span>
              </h6>{" "}
              <h6 className="flex items-center justify-center space-x-2 font-bold">
                <CheckCircle className="h-5 w-5" />
                <span>7 Day implementation</span>
              </h6>{" "}
              <h6 className="flex items-center justify-center space-x-2 font-bold">
                <CheckCircle className="h-5 w-5" />
                <span>30-day guarantee</span>
              </h6>
            </div>
          </Container>

          <MeetingCalendar />
          <div className="mx-auto py-6 text-center text-sm">{offerData.calendar.description}</div>
        </section>
      </div>
    </main>
  );
}
