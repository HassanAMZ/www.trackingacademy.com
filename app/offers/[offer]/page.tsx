import CaseStudyFeaturedVideo from "@/components/case-study/case-study-featured-video";
import MeetingCalendar from "@/components/contact/meeting-calender";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";
import { DetailsStack } from "@/components/global/details-stack";
import MeetingBookingButton from "@/components/global/meeting-booking-button";
import { TrackingComparisonTable } from "@/components/global/tracking-solutions-comparison";
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
import MuxPlayer from "@mux/mux-player-react";
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
      <div className="">
        <Container className="space-y-8 py-12">
          {/* Eyebrow and Headlines - Centered */}
          <div className="space-y-4 text-center">
            {offerData.eyebrow && <Badge variant="secondary">{offerData.eyebrow}</Badge>}

            <h1 className="mx-auto">
              {offerData.headline.prefix}{" "}
              <span className="text-primary capitalize">
                {offerData.headline.conversion.join(" ")}
              </span>{" "}
              {offerData.headline.suffix}{" "}
              <span className="text-primary capitalize underline">
                {offerData.headline.benefit}
              </span>
            </h1>

            <h4 className="mx-auto max-w-5xl text-center">
              <span dangerouslySetInnerHTML={{ __html: offerData.subheading }} />
              <div className="flex flex-wrap justify-center gap-2 py-4">
                <Badge variant="outline" className="flex items-center gap-1 p-1">
                  <XCircle className="h-5 w-5" />
                  Data Sharing Restriction
                </Badge>
                <Badge variant="destructive" className="flex items-center gap-1 p-1">
                  <XCircle className="h-5 w-5" />
                  Your conversions disappeared.
                </Badge>
                <Badge variant="destructive" className="flex items-center gap-1 p-1">
                  <XCircle className="h-5 w-5" />
                  Your ROAS dropped.
                </Badge>
              </div>
            </h4>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="order-2 flex h-full w-full flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {offerData.benefits.slice(0, 4).map((benefit: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 rounded-lg border bg-card p-4"
                    aria-label={`Benefit ${index + 1}`}
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <h5 className="font-semibold text-muted-foreground">
                      <span>{benefit.solution}</span>
                      <span>{benefit.benefit}</span>
                    </h5>
                  </li>
                ))}
              </ul>
            </div>
            <Container className="py-12">
              <MuxPlayer
                streamType="on-demand"
                playbackId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
                poster="https://image.mux.com/2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY/animated.gif"
                style={{ aspectRatio: "16/9", width: "100%" }}
              />
            </Container>
          </div>

          <MeetingBookingButton
            offerData={offerData}
            wrapperButtonClassName="w-fit justify-center mx-auto "
            subheading={true}
          />
        </Container>
      </div>
      {/* Problem Amplification Section */}
      <DetailsStack
        heading={offerData.problemStatement.heading}
        subheading={offerData.problemStatement.subheading}
        items={offerData.problemStatement.items}
        ctaButton={<MeetingBookingButton offerData={offerData} wrapperButtonClassName="w-fit" />}
      />

      <FeaturesSectionDemo3 />
      <TrackingComparisonTable />
      {/* Solution Section */}
      <section className="py-8">
        <Container className="">
          <div className="text-center">
            <MeetingBookingButton offerData={offerData} />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Container>
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-primary">{offerData.testimonialSection.title}</h2>
            <h4 className="mx-auto max-w-3xl">{offerData.testimonialSection.description}</h4>
          </div>
        </Container>
        {/* Case Studies */}
        {offerData.caseStudyIds.map((caseStudyId) => {
          const caseStudy = getCaseStudy(caseStudyId);
          return caseStudy ? (
            <CaseStudyFeaturedVideo
              key={caseStudyId}
              caseStudy={caseStudy}
              verticalVideo={caseStudy.embedId?.muxVertical ?? false}
              darkMode={true}
            />
          ) : null;
        })}
        <TestimonialGrid upwork={true} showUpworkStats={false} />
        <Container>
          <MeetingBookingButton offerData={offerData} />
        </Container>
      </section>

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

      {/* Final CTA */}
      <div className="min-h-screen py-16">
        <section className="bg-gradient-to-b from-primary/20 to-background py-16">
          <Container className="max-w-4xl text-center">
            <div className="space-y-6 py-6">
              <h2 className="">{offerData.finalCta.title}</h2>
              <h4 className="mx-auto max-w-3xl text-muted-foreground">
                {offerData.finalCta.description}
              </h4>
            </div>

            <div className="mb-8 grid gap-4 lg:grid-cols-3">
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

          <Container className="py-24">
            <MeetingCalendar />
          </Container>
          <div className="mx-auto py-6 text-center text-sm">{offerData.calendar.description}</div>
        </section>
      </div>
    </main>
  );
}
