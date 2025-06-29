"use client";

import FeaturedCaseStudy from "@/components/case-study/case-study-featured";
import MeetingCalendar from "@/components/contact/meeting-calender";
import LoomEmbed from "@/components/global/loom-embed";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import getCaseStudy from "@/utils/getCaseStudy";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Eye,
  File,
  Gauge,
  Lock,
  MessageCircle,
  Settings,
  Shield,
  TrendingDown,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const MeetingBookingButton = ({ className }: { className?: string }) => {
    return (
      <Container className={cn("max-w-3xl", className)}>
        <Button
          asChild
          size="lg"
          className="mx-auto flex flex-col p-6 text-2xl font-semibold "
          onClick={() =>
            sendGTMEvent({
              event: "gtm_custom_event",
              datalayer_event_name: "contact",
            })
          }
        >
          <Link href="#book-a-meeting">
            <>
              Schedule Your Call To Fix Your Meta Ads Tracking
              <br />
              <span className="text-base">
                Start tracking appointments in Meta Ads & Events Manager again
              </span>
            </>
          </Link>
        </Button>
      </Container>
    );
  };

  const service = services.find((s) => s.id === "see-every-sale");
  return (
    <main className="flex flex-col gap-8">
      <Hero
        heading={
          <h1 className="animate-fade-in text-center leading-tight font-black tracking-tight max-w-4xl">
            Track Every{" "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1 leading-normal tracking-normal">
              Patient
            </span>
            {" & "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1 leading-normal tracking-normal">
              Appointment
            </span>{" "}
            for Your Dental Clinic's Meta Ads{" "}
            <span className="block md:hidden"> — in 72 Hours</span>
          </h1>
        }
        subheading={
          <div className="max-w-3xl mx-auto space-y-4">
            <h4 className="text-center">
              Even if Meta restricts your domain, blocks URL parameters, or disables your events—we
              install <strong className="text-primary">DentalPixel Pro</strong> to fix your
              tracking.
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
            <LoomEmbed
              backgroundImage="/images/hero/data-sharing-restrcition-03.png"
              embedId="3768f5d29d724dc2837085355d614c57"
              className="mx-auto max-w-3xl"
            />
          </div>
        }
        benefits={[
          "Full Meta Ads Tracking in 72 Hours",
          "HIPAA-Ready + Legally Compliant",
          "1-Year Tracking Maintenance",
        ]}
        customCtaButton={<MeetingBookingButton />}
      />

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-destructive/20 to-background py-16">
        <Container className="max-w-6xl">
          {/* Visual representation */}
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Your Dental Clinic's Facebook Ads Are Failing</h2>
            <h4 className="text-muted-foreground mx-auto max-w-3xl">
              Meta's 2025 data sharing restrictions are blocking critical tracking data for dental
              clinics, causing massive performance drops.{" "}
              <strong className="text-destructive">
                Your appeal won't save you—restrictions are getting tighter monthly.
              </strong>
            </h4>
          </div>

          <div className="bg-background border-destructive/20 mt-12 transform space-y-8 rounded-lg border p-4 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <Alert className="border-destructive bg-destructive/5">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Data sharing restrictions applied</strong>
                    <br />
                    Standard events blocked: Booking, Lead, Appointment
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive bg-destructive/5">
                  <XCircle className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Custom events can't be used with ads features</strong>
                    <br />
                    Thousands of dental appointment events blocked
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive bg-destructive/5">
                  <Lock className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Dental clinic automatically categorized</strong>
                    <br />
                    Automatic restrictions applied to sensitive patient data
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive bg-destructive/5">
                  <Database className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Data Loss: 60-90% of appointments</strong>
                    <br />
                    Critical patient insights completely missing
                  </AlertDescription>
                </Alert>
              </div>
              <div className="text-center">
                <div className="bg-muted w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/data-sharing-restrcition-03.png"
                    alt="Dental data sharing restrictions illustration"
                    width={1920}
                    height={1080}
                    className="transform rounded-lg transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-4 text-center">
                  <TrendingDown className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-73%</div>
                  <div className="text-muted-foreground text-sm">Appointment Tracking</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-4 text-center">
                  <Gauge className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-58%</div>
                  <div className="text-muted-foreground text-sm">ROAS Performance</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-4 text-center">
                  <Users className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-84%</div>
                  <div className="text-muted-foreground text-sm">Patient Audience Building</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-4 text-center">
                  <Eye className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-91%</div>
                  <div className="text-muted-foreground text-sm">Attribution Accuracy</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline Alert */}
          <div className="pt-8 max-w-3xl mx-auto">
            <Alert className="border-amber-200 bg-amber-50">
              <Clock className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Timeline Reality Check:</strong> Even if your appeal is approved, Meta
                typically reverses decisions within 30-90 days. Setting up backup tracking NOW
                (before restrictions hit) ensures zero data loss.
              </AlertDescription>
            </Alert>
          </div>
        </Container>
      </section>

      {/* Enhanced Solution Section */}
      <section className="pt-8 bg-gradient-to-b from-primary/20 to-background ">
        <Container className="max-w-6xl space-y-4">
          <div className="text-center space-y-8">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Our Proven Solution
            </Badge>
            <div className="mx-auto text-center space-y-4">
              <h2>DentalPixel Pro</h2>
              <h4 className="mx-auto max-w-4xl text-muted-foreground">
                Track every lead, call, booking, and purchase so your campaigns get the data they
                need to perform, optimize, and actually deliver new patients profitably.
              </h4>
            </div>

            <div className="gap-8 text-left max-w-4xl mx-auto grid grid-cols-1">
              <Card className="border-primary/20 ">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MessageCircle className="h-5 w-5 block md:hidden" />
                    Step 1: Inital Tracking Audit Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  We analyze your current setup (Your website, your current tracking setup etc.) and
                  identify exactly what's blocked. Takes 30 minutes - we'll show you the restriction
                  levels and create a custom implementation plan.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Settings className="h-5 w-5 block md:hidden" />
                    Step 2: Custom Subdomain Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  We create a custom subdomain and configure server-side tracking using Custom
                  Server. This bypasses domain restrictions while maintaining data accuracy.{" "}
                  <strong>We handle all technical setup</strong>- you just provide access.
                </CardContent>
              </Card>

              <Card className="border-primary/20 ">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-5 w-5 block md:hidden" />
                    Step 3: Side-by-Side Testing & Handover
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  We do thorugh testing of the new tracking setup, create audit documentation and
                  advertiser documentation for your team and hand it over.
                  <strong> Zero data loss, zero downtime.</strong>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <MeetingBookingButton className="max-w-4xl p-0 text-center" />
              <div className="max-w-4xl mx-auto">
                {/* Scarcity and Urgency */}
                <div className="grid mb-8">
                  <Alert className="border-destructive/20 bg-destructive/20  font-medium text-center">
                    <AlertDescription className="text-destructive/90">
                      <span className="font-black flex items-center justify-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        Urgent:
                      </span>
                      Meta is tightening restrictions monthly. The longer you wait, the harder
                      recovery becomes.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 bg-gradient-to-b from-primary/20 to-background ">
        <Container className="max-w-6xl space-y-8">
          <div className="mx-auto text-center space-y-4">
            <h2>The "72-Hour Fix Or Free" Guarantee</h2>
            <h4 className="mx-auto max-w-4xl text-muted-foreground">
              If your Meta Ads tracking isn't completely fixed and showing accurate data in your Ads
              Manager within 72 hours of our implementation, we'll keep working with you for free
              until it is—{" "}
              <strong className="text-destructive">no matter how long it takes.</strong>
            </h4>
          </div>

          {/* Metrics + Process Transparency */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <Card className="border-slate-200">
                <CardContent className="p-4 text-center">
                  <File className="text-green-600 mx-auto mb-2 h-8 w-8" />
                  <div className="text-foreground font-semibold">Detailed Access Documentation</div>
                  <div className="text-muted-foreground text-sm">
                    You'll know exactly what we need, why, and when.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4 text-center">
                  <MessageCircle className="text-blue-600 mx-auto mb-2 h-8 w-8" />
                  <div className="text-foreground font-semibold">Dedicated Slack Channel</div>
                  <div className="text-muted-foreground text-sm">
                    Real-time support, communication, and transparency.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4 text-center">
                  <Zap className="text-purple-600 mx-auto mb-2 h-8 w-8" />
                  <div className="text-foreground font-semibold">Live Testing & Validation</div>
                  <div className="text-muted-foreground text-sm">
                    See the data flow live before deployment.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4 text-center">
                  <Shield className="text-orange-600 mx-auto mb-2 h-8 w-8" />
                  <div className="text-foreground font-semibold">Team Training Docs</div>
                  <div className="text-muted-foreground text-sm">
                    Full documentation for your internal team.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-4">
            <MeetingBookingButton className="max-w-4xl p-0 text-center" />
            {/* Technical Details */}
            <div className="max-w-4xl mx-auto">
              <Alert className="border-primary/20 font-medium text-center">
                <AlertDescription className="text-primary/90">
                  <span className="font-black flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4 text-primary/60" />
                    Works with your existing setup:
                  </span>
                  Track all events back to your Meta Ads without changing your tech stack. We add a
                  custom subdomain layer that bypasses restrictions while maintaining full HIPAA
                  compliance.
                </AlertDescription>
              </Alert>
            </div>
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

      <MeetingBookingButton />

      <section className="py-16">
        <div className="bg-gradient-to-b from-primary to-background  py-12 text-background">
          <Container className="max-w-4xl text-center">
            <div className="mx-auto text-center space-y-4">
              <h2>Stop Losing Patients to Broken Tracking</h2>
              <h4 className="mx-auto max-w-2xl">
                Get your free audit now and discover exactly how many patients and how much revenue
                your dental clinic is losing to Facebook's data sharing restrictions.
              </h4>
            </div>
          </Container>
          <MeetingCalendar />
        </div>

        {/* Testimonials */}
        <div className="grid w-full place-content-center py-12">
          <div className="mx-auto text-center space-y-4">
            <h2>300+ Businesses Recovered Their Facebook Tracking</h2>
            <h4 className="text-muted-foreground mx-auto max-w-3xl">
              From e-commerce stores to service businesses, we've restored compliant tracking for
              every client. See how we recovered their ROAS while maintaining full compliance.
            </h4>
          </div>
          <TestimonialGrid showUpworkStats={false} />
        </div>
        <MeetingBookingButton />
      </section>
    </main>
  );
}
