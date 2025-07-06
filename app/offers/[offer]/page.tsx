import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import MeetingBookingButton from "@/components/global/meeting-booking-button";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { offers } from "@/data/offers";
import getCaseStudy from "@/utils/getCaseStudy";
import {
  AlertTriangle,
  CheckCircle,
  Database,
  DollarSign,
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
};

export default async function Page({ params }: { params: Promise<{ offer: string }> }) {
  const { offer } = await params;

  const offerData = offers[offer] || offers["default-offer"];

  // Dynamic content based on offer data
  return (
    <main>
      <Hero
        heading={
          <h1 className="animate-fade-in text-center leading-tight tracking-tighter">
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
            {offerData.headline.suffix}'s Meta Ad — in a week
          </h1>
        }
        subheading={
          <div className="space-y-4">
            <h4 className="mx-auto max-w-4xl text-center">
              <span dangerouslySetInnerHTML={{ __html: offerData.subheading }} />
              <div className="flex flex-wrap justify-center gap-2 py-4">
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

            <YoutubeEmbed embedId={offerData.videoId} className="max-w-4xl p-0" />
            <MeetingBookingButton
              className="text-center"
              wrapperButtonClassName="py-4"
              offerData={offerData}
            />
          </div>
        }
        benefits={offerData.benefits}
      />

      {/* Problem Section */}
      <section className="bg-linear-to-b from-primary/5 to-background py-16">
        <Container className="max-w-6xl md:pt-12">
          <div className="transform space-y-8 rounded-lg border border-destructive/20 bg-background p-4 md:p-12">
            <div className="mb-12 text-center">
              <h2 className="mb-4">{offerData.problemStatement.title}</h2>
              <h4 className="mx-auto max-w-3xl text-muted-foreground">
                {offerData.problemStatement.description}
              </h4>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-4">
                {offerData.problemStatement.alerts.map((alert, index) => {
                  const IconComponent = iconMap[alert.icon];
                  return (
                    <Alert key={index} className="border-destructive">
                      <IconComponent className="h-4 w-4" />
                      <AlertDescription>
                        <strong>{alert.title}</strong>
                        <br />
                        {alert.description}
                      </AlertDescription>
                    </Alert>
                  );
                })}
              </div>
              <div className="text-center">
                <YoutubeEmbed embedId={offerData.videoId} className="mx-auto max-w-3xl p-0" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="bg-linear-to-b from-primary/5 to-background py-16">
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 animate-bounce">{offerData.solution.badge}</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{offerData.solution.title}</h2>
            <h4 className="mx-auto max-w-3xl text-muted-foreground">
              {offerData.solution.description}
            </h4>
          </div>

          {/* Process Steps */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 md:p-8">
            <div className="bg-grid-white/10 absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
            <div className="relative">
              <div className="grid gap-8 md:grid-cols-3">
                {offerData.solution.steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon];
                  return (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 blur" />
                      <div className="relative rounded-lg bg-background/80 p-6 text-center backdrop-blur-sm">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="mb-4 flex items-center justify-center">
                          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Day {step.day}
                          </div>
                        </div>
                        <h4 className="mb-4 text-xl font-semibold">{step.title}</h4>
                        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <MeetingBookingButton className="justify-center" offerData={offerData} />
          </div>
        </Container>
      </section>

      {/* Case Studies - Dynamic based on offerData.caseStudyIds */}
      {offerData.caseStudyIds.map((caseStudyId) => {
        const caseStudy = getCaseStudy(caseStudyId);
        return caseStudy ? <FeaturedCaseStudy key={caseStudyId} caseStudy={caseStudy} /> : null;
      })}

      {/* Final CTA */}
      <div className="py-16">
        <section className="bg-gradient-to-b from-primary/20 to-background py-16">
          <Container className="max-w-4xl text-center">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{offerData.finalCta.title}</h2>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                {offerData.finalCta.description}
              </p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free 24-hour audit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>7 Day implementation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>30-day guarantee</span>
              </div>
            </div>
          </Container>

          <MeetingCalendar />
        </section>
      </div>

      {/* FAQ Section */}
      <section className="py-4">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about fixing your {offerData.businessType} Facebook
              tracking
            </p>
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
                    <p className="text-muted-foreground">{faqItem.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Container className="">
          <div className="mb-12 space-y-4 text-center">
            <h2>{offerData.testimonialSection.title}</h2>
            <h4 className="mx-auto max-w-3xl text-muted-foreground">
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
