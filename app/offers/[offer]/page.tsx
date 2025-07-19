import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import DetailsCards from "@/components/funnels/details-card";
import DreamOutcome from "@/components/funnels/dream-outcome";
import MeetingBookingButton from "@/components/global/meeting-booking-button";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Hero from "@/components/home/hero";
import ServiceHero from "@/components/service/service-hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
        eyebrow={`Lost 50% of your Leads/Revenue to Meta Restrictions?`}
        heading={
          <h1 className="mx-auto text-center lg:mx-0 lg:text-left">
            {offerData.headline.prefix}{" "}
            {offerData.headline.conversion.map((conv, index) => (
              <span key={index}>
                <span className="rounded-lg border border-destructive/20 bg-destructive/10 px-1 text-destructive">
                  {conv}
                </span>
                {index < offerData.headline.conversion.length - 1 &&
                  (index === offerData.headline.conversion.length - 2 ? " & " : ", ")}
              </span>
            ))}{" "}
            {offerData.headline.suffix}
          </h1>
        }
        subheading={
          <h4 className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span dangerouslySetInnerHTML={{ __html: offerData.subheading }} />
            <div className="flex flex-wrap justify-center gap-2 py-4 lg:justify-start">
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-4 w-4" />
                Pixel Missing Data
              </Badge>
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-4 w-4" />
                CAPI Not Firing
              </Badge>
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-4 w-4" />
                Data Sharing Restrictions
              </Badge>
            </div>
          </h4>
        }
        benefits={offerData.benefits}
        customCtaButton={
          <MeetingBookingButton
            wrapperButtonClassName="py-4 lg:w-fit lg:mx-0 text-center lg:text-left lg:justify-start lg:items-start"
            offerData={offerData}
          />
        }
        supportingComponent={
          <div className="flex flex-1">
            {/* Desktop version - hidden on mobile */}
            <YoutubeEmbed
              verticalVideo={true}
              embedId={"_vOZLo-4YMU"}
              className="hidden lg:block"
            />
            {/* <Image
              src="/images/hero/data-sharing-restrcition-04.png"
              alt="Data Sharing Restrictions - Desktop View"
              className="hidden rounded-lg object-contain lg:block"
              width={1920}
              height={1080}
              priority
              quality={90}
            /> */}

            {/* Mobile version - hidden on desktop */}
            {/* <Image
              src="/images/hero/data-sharing-restrcition-03.png"
              alt="Data Sharing Restrictions - Mobile View"
              className="block rounded-lg object-contain lg:hidden"
              width={1080}
              height={1920}
              priority
              quality={90}
            /> */}
          </div>
        }
      />
      {/* <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-destructive">{offerData.testimonialSection.title}</h2>
          <h4 className="mx-auto max-w-3xl text-accent-foreground">
            {offerData.testimonialSection.description}
          </h4>
        </div>
      </Container>
      <CaseStudyCarousel
        caseStudies={caseStudies.filter((cs) =>
          [
            "zenon",
            "northridgeaddiction",
            "saneofrance",
            "emiratesadvisory",
            "peachandcream",
          ].includes(cs.id),
        )}
      /> */}

      {/* Problem Amplification Section */}
      <Container className="max-w-6xl py-12">
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
              videoId: offerData.videoId || "/images/social-sharing.png", // fallback image
              icon: alert.icon,
            }))}
          />

          {/* Add testimonial callout */}
          <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
            <p className="text-lg font-medium text-primary">
              "It's not your ads. It's your tracking."
            </p>
            <p className="mt-2">
              We've fixed this for 100+ clinics — and we'll fix it for you too.
            </p>
          </div>
        </div>
      </Container>

      {/* Solution Section */}
      <section className="py-8">
        <DetailsCards {...offerData.solution} />

        <Container className="max-w-6xl">
          <div className="mt-12 text-center">
            <MeetingBookingButton offerData={offerData} />
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      {offerData.caseStudyIds.map((caseStudyId) => {
        const caseStudy = getCaseStudy(caseStudyId);
        return caseStudy ? <FeaturedCaseStudy key={caseStudyId} caseStudy={caseStudy} /> : null;
      })}
      {/* Services Grid */}
      <Container>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2>
            Choose Your Perfect
            <span className="text-primary"> Tracking Solution</span>
          </h2>
          <h4 className="mx-auto max-w-3xl text-muted-foreground">
            Reclaim your lost conversions and maximize your ad spend ROI with our comprehensive
            tracking solutions. From basic audits to enterprise-level implementations.
          </h4>
        </div>

        <div className="grid gap-8 py-12">
          {getServicesByKeys([
            // "starter-subscription",
            "growth-subscription",
            // "pro-subscription",
            // "premium-subscription",
          ]).map((service) => (
            <ServiceHero service={service} />
          ))}
        </div>
      </Container>
      {/* Final CTA */}
      <div className="py-16">
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
    </main>
  );
}
