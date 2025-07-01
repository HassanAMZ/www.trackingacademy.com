"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Database,
  DollarSign,
  Eye,
  Gauge,
  Lock,
  RefreshCw,
  Search,
  Settings,
  Shield,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import LoomEmbed from "@/components/global/loom-embed";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import getCaseStudy from "@/utils/getCaseStudy";

const restrictedCategories = [
  { name: "Health & Wellness", severity: "High", affected: "94%" },
  { name: "Financial Services", severity: "High", affected: "87%" },
  { name: "Politics & Advocacy", severity: "Critical", affected: "100%" },
  { name: "Dating & Relationships", severity: "High", affected: "92%" },
  { name: "Weight Loss", severity: "Critical", affected: "98%" },
  { name: "Mental Health", severity: "Critical", affected: "100%" },
  { name: "Addiction Recovery", severity: "Critical", affected: "100%" },
  { name: "Religious Content", severity: "Medium", affected: "78%" },
];

const MeetingBookingButton = ({
  buttonText = "Schedule Your Call To Fix your Meta Ads Tracking",
  wrapperButtonClassName = "",
}: {
  buttonText?: string;
  className?: string;
  wrapperButtonClassName?: string;
}) => {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "mx-auto flex flex-col p-6 text-2xl font-semibold transition-transform duration-200 w-full",
        wrapperButtonClassName,
      )}
      onClick={() =>
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "contact",
        })
      }
    >
      <Link href="#book-a-meeting">
        <>
          {buttonText}
          <br />
          <span className="text-muted text-base underline">
            Start tracking conversions in Meta Ads & Events Manager again
          </span>
        </>
      </Link>
    </Button>
  );
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow={
          <>
            <AlertTriangle className="text-destructive mr-2 h-4 w-4" />
            <p>Running Meta Ads in health, financial, other Restricted Niche?</p>
          </>
        }
        heading={
          <h1 className="animate-fade-in text-center">
            Track Every{" "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1">
              Lead
            </span>
            {", "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1 ">
              Appointment
            </span>
            {" & "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1 ">
              Purchase
            </span>{" "}
            for Your Meta Ads — in 72 Hours
          </h1>
        }
        subheading={
          <div className="space-y-4">
            <h4 className="mx-auto max-w-4xl text-center">
              Even if Meta has restricted your domain, blocked URL parameters, or disabled your
              events—we install <strong className="text-primary underline">See Every Sale</strong>{" "}
              Tracking Setup to fix your Meta Ads Conversions.
              <div className="flex flex-wrap justify-center gap-2 py-4 ">
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

            <YoutubeEmbed embedId="tdQufJ-qadE" className=" max-w-4xl p-0" />
            <MeetingBookingButton className="text-center" wrapperButtonClassName=" py-4" />
          </div>
        }
        benefits={[
          "Fix Data Sharing Restrictions",
          "Track all conversions",
          "GDPR & CCPA Compliant",
        ]}
      />

      {/* Restriction Categories Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-24">
        <Container className="max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <h2>Is Your Business Category Affected?</h2>
            <h4 className="text-muted-foreground mx-auto max-w-3xl">
              Meta's restrictions target specific business categories. Check if your industry is
              experiencing tracking limitations.
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {restrictedCategories.map((category, index) => (
              <Card
                key={index}
                className={` ${
                  category.severity === "Critical"
                    ? "border-destructive/30 bg-destructive/5"
                    : category.severity === "High"
                      ? "border-orange-500/30 bg-orange-500/5"
                      : "border-yellow-500/30 bg-yellow-500/5"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{category.name}</h3>
                    <Badge
                      variant={category.severity === "Critical" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {category.severity}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Affected:</span>
                      <span className="font-medium">{category.affected}</span>
                    </div>
                    <Progress value={parseInt(category.affected)} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-16">
        <Container className="max-w-6xl">
          {/* Visual representation */}
          <div className="bg-background border-destructive/20 mt-12 transform space-y-8 rounded-lg border p-4  md:p-12">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Why Your Facebook Ads Are Failing</h2>
              <h4 className="text-muted-foreground mx-auto max-w-3xl">
                Meta's 2025 data sharing restrictions are blocking critical tracking data across
                multiple business categories, causing massive performance drops.
              </h4>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <Alert className="border-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Data sharing restrictions applied</strong>
                    <br />
                    Standard events blocked: Purchase, Lead, AddToCart
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <XCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Custom events can't be used with ads features</strong>
                    <br />
                    Hundreds of thousands of events blocked
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <DollarSign className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Revenue Loss: $500-$2,000+ daily</strong>
                    <br />
                    Wasted ad spend due to poor optimization
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <Database className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Data Loss: 60-90% of conversions</strong>
                    <br />
                    Critical business insights completely missing
                  </AlertDescription>
                </Alert>
              </div>
              <div className="text-center">
                <YoutubeEmbed embedId="tdQufJ-qadE" className="mx-auto max-w-3xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-16">
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 animate-bounce">Our Proven Solution</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The "See Every Sale" System</h2>
            <h4 className="text-muted-foreground mx-auto max-w-3xl">
              Our specialized approach restores your Facebook Pixel tracking while maintaining full
              compliance with all data protection regulations.
            </h4>
          </div>

          {/* Process Steps */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 p-8">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
            <div className="relative">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <div className="relative rounded-lg bg-background/80 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg">
                      <Search className="h-6 w-6" />
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Day 1
                      </div>
                    </div>
                    <h4 className="mb-4 text-xl font-semibold">Audit & Assessment</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We conduct a comprehensive onboarding call to analyze your current tracking
                      configuration, identify restriction levels, and qualify your account for our
                      "See Every Sale" solution.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <div className="relative rounded-lg bg-background/80 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg">
                      <Settings className="h-6 w-6" />
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Day 2
                      </div>
                    </div>
                    <h4 className="mb-4 text-xl font-semibold">Advanced Setup</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our experts implement a complete HIPAA-compliant tracking system that captures
                      every lead, appointment, and purchase. We handle all technical aspects
                      end-to-end.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <div className="relative rounded-lg bg-background/80 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Day 3
                      </div>
                    </div>
                    <h4 className="mb-4 text-xl font-semibold">Launch & Optimize</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Your tracking system goes live, capturing every ad interaction. We provide
                      monitoring guidelines and optimization recommendations for maximum
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <MeetingBookingButton className="justify-center" />
          </div>
        </Container>
      </section>

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

      {/* Final CTA */}
      <div className="py-16">
        <section className=" py-16 bg-gradient-to-b from-primary/20 to-background">
          <Container className="max-w-4xl text-center">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Stop Losing Money to Broken Tracking
              </h2>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Get your free audit now and discover exactly how much revenue you're losing to
                Facebook's data sharing restrictions.
              </p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free 24-hour audit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>72-hour implementation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>30-day guarantee</span>
              </div>
            </div>
            <MeetingBookingButton className="justify-center" />

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-75">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>300+ businesses helped</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>100% compliant</span>
              </div>
            </div>
          </Container>
        </section>
      </div>
      {/* Calendar Section */}
      <section className="py-16 space-y-8 bg-gradient-to-b from-primary/10 to-background">
        <Container className="max-w-4xl text-center space-y-8">
          <div>
            <h2 className="mb-4">Schedule Your Free Meta Tracking Setup</h2>
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
          <MeetingBookingButton />
        </Container>
      </section>
    </main>
  );
}
