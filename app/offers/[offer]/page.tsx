import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import DetailsCards from "@/components/funnels/details-card";
import DreamOutcome from "@/components/funnels/dream-outcome";
import MeetingBookingButton from "@/components/global/meeting-booking-button";
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
import Video from "next-video";
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
      <Container className="max-w-6xl space-y-8 py-6">
        {/* Eyebrow and Headlines - Centered */}
        <div className="space-y-4 text-center">
          {offerData.eyebrow && <Badge variant="outline">{offerData.eyebrow}</Badge>}

          <h1 className="mx-auto max-w-6xl text-foreground">
            {offerData.headline.prefix}{" "}
            <span className="text-primary">{offerData.headline.conversion.join(" ")}</span>{" "}
            {offerData.headline.suffix}
            <span className="text-primary underline">{offerData.headline.benefit}</span>
          </h1>

          <h4 className="mx-auto max-w-5xl text-center text-muted-foreground">
            <span dangerouslySetInnerHTML={{ __html: offerData.subheading }} />
          </h4>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-5">
          <div className="order-2 flex h-full w-full flex-col gap-6 lg:order-1 lg:col-span-2">
            <ul className="flex flex-col gap-4">
              {offerData.benefits.slice(0, 3).map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg border bg-card p-4"
                  aria-label={`Benefit ${index + 1}`}
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h5 className="font-semibold text-muted-foreground">
                    {/* <span>{benefit.problem}</span>  */}
                    <span>{benefit.solution}</span>{" "}
                    <span className="text-foreground">{benefit.benefit}</span>
                  </h5>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 grid h-full w-full place-content-center lg:order-2 lg:col-span-3">
            <Video
              src="https://stream.mux.com/2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY.m3u8"
              poster="https://image.mux.com/2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY/animated.gif"
            >
              <source
                src="https://stream.mux.com/2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY.mp4"
                type="video/mp4"
              />
              <source
                src="https://stream.mux.com/2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY.m3u8"
                type="application/x-mpegURL"
              />
            </Video>
            <div className="flex flex-wrap justify-center gap-2 py-4">
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-5 w-5" />
                Data Sharing Restriction
              </Badge>
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-5 w-5" />
                Your conversions disappeared.
              </Badge>
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="h-5 w-5" />
                Your ROAS dropped.
              </Badge>
            </div>
          </div>
        </div>

        <MeetingBookingButton offerData={offerData} wrapperButtonClassName="" />
      </Container>

      {/* Problem Amplification Section */}
      <Container className="pt-4 pb-12">
        <div className="transform space-y-8 rounded-lg border border-destructive/20 px-2 py-6 lg:p-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4">{offerData.problemStatement.title}</h2>
            <h4 className="mx-auto max-w-4xl text-muted-foreground">
              {offerData.problemStatement.description}
            </h4>
          </div>

          <DreamOutcome
            dreamOutcomeList={offerData.problemStatement.alerts.map((alert, index) => ({
              text: alert.title || "No title provided",
              description: alert.description || "No description available.",
              embedId: offerData.embedId,
              icon: alert.icon,
              image: alert.image,
            }))}
          />
        </div>
      </Container>

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
      {/* <Container>
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
            "starter-subscription",
            "growth-subscription",
            // "pro-subscription",
            "premium-subscription",
          ]).map((service) => (
            <React.Fragment key={service.id}>
              <ServiceCard service={service} />
            </React.Fragment>
          ))}
        </div>
      </Container> */}

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
          return caseStudy ? <FeaturedCaseStudy key={caseStudyId} caseStudy={caseStudy} /> : null;
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

          <MeetingCalendar />
          <div className="mx-auto py-6 text-center text-sm">{offerData.calendar.description}</div>
        </section>
      </div>
    </main>
  );
}
