"use client";

import Image from "next/image";
import Link from "next/link";
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
import LoomEmbed from "@/components/global/loom-embed";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import getCaseStudy from "@/utils/getCaseStudy";

const restrictionIssues = [
  {
    icon: <AlertTriangle className="text-destructive h-6 w-6" />,
    title: "Conversion Events Blocked",
    description:
      "Your Facebook Pixel is rejecting critical purchase, lead, and signup data, making your ads blind to actual performance.",
  },
  {
    icon: <TrendingDown className="text-destructive h-6 w-6" />,
    title: "ROAS Dropping 40-80%",
    description:
      "Without proper tracking, Facebook's algorithm can't optimize effectively, causing massive drops in return on ad spend.",
  },
  {
    icon: <Target className="text-destructive h-6 w-6" />,
    title: "Custom Audiences Disabled",
    description:
      "Retargeting and lookalike audiences are broken, cutting off your most profitable marketing channels completely.",
  },
];

const solutionBenefits = [
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: "Full Compliance Setup",
    description:
      "Complete compliance with all data regulations (GDPR, CCPA, HIPAA) while maintaining tracking accuracy.",
  },
  {
    icon: <BarChart3 className="text-primary h-6 w-6" />,
    title: "95% Data Accuracy Restored",
    description:
      "See every sale, lead, and conversion with near-perfect attribution tracking across all your campaigns.",
  },
  {
    icon: <Zap className="text-primary h-6 w-6" />,
    title: "3-Day Implementation",
    description:
      "Complete tracking restoration in just a week with our proven system and dedicated support.",
  },
];

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
  className = "",
  wrapperButtonClassName = "",
  buttonClassName = "w-full text-left",
}: {
  buttonText?: string;
  className?: string;
  wrapperButtonClassName?: string;
  buttonClassName?: string;
}) => {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "mx-auto flex flex-col p-6 text-2xl font-semibold transition-transform duration-200",
        wrapperButtonClassName,
      )}
    >
      <Link href="book-a-meeting">
        <>
          {buttonText}
          <br />
          <span className="text-muted/90 text-base underline">
            Start tracking conversions in Meta Ads & Events Manager again
          </span>
        </>
      </Link>
    </Button>
  );
};

export default function Page() {
  return (
    <>
      <Hero
        eyebrow={
          <>
            <AlertTriangle className="text-destructive mr-2 h-4 w-4" />
            <p>Running Meta Ads in health, financial, other Restricted Niche?</p>
          </>
        }
        heading={
          <h1 className="animate-fade-in max-w-5xl text-center">
            Fix{" "}
            <span className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border px-2 py-1 leading-normal tracking-normal">
              Data Sharing Restriction
            </span>{" "}
            and Track Your Meta Ads Conversions
          </h1>
        }
        subheading={
          <div className="max-w-3xl space-y-4">
            <h4 className="mx-auto max-w-4xl text-center">
              If your Meta Pixel stopped tracking conversions and you've tried every solution;
              <div className="flex flex-wrap justify-center gap-2 py-2">
                <Badge variant="destructive" className="flex items-center gap-1">
                  <XCircle className="h-5 w-5" />
                  Conversion API Failed
                </Badge>
                <Badge variant="destructive" className="flex items-center gap-1">
                  <XCircle className="h-5 w-5" />
                  Domain Changes Failed
                </Badge>
                <Badge variant="destructive" className="flex items-center gap-1">
                  <XCircle className="h-5 w-5" />
                  New Pixels Failed
                </Badge>
                <Badge variant="destructive" className="flex items-center gap-1">
                  <XCircle className="h-5 w-5" />
                  New Accounts Failed
                </Badge>
              </div>
              and nothing seems to work? <span className="underline">Watch the Video</span>
            </h4>
            <LoomEmbed
              backgroundImage="/images/hero/data-sharing-restrcition-03.png"
              embedId="3768f5d29d724dc2837085355d614c57"
              className="mx-auto max-w-3xl"
            />
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-950/20 dark:text-green-300">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              Helped 300+ restricted niche advertisers
            </div>
          </div>
        }
        benefits={[
          "Fix Data Sharing Restrictions",
          "Track all conversions",
          "GDPR & CCPA Compliant",
        ]}
        customCtaButton={<MeetingBookingButton className="text-center" wrapperButtonClassName="" />}
      />

      {getCaseStudy("zenon") && <FeaturedCaseStudy caseStudy={getCaseStudy("zenon")!} />}
      <Container>
        <MeetingBookingButton className="text-center" wrapperButtonClassName="text-center" />
      </Container>
      {getCaseStudy("northridgeaddiction") && (
        <FeaturedCaseStudy caseStudy={getCaseStudy("northridgeaddiction")!} />
      )}
      <Container>
        <MeetingBookingButton className="text-center" wrapperButtonClassName="text-center" />
      </Container>
      {getCaseStudy("saneofrance") && (
        <FeaturedCaseStudy caseStudy={getCaseStudy("saneofrance")!} />
      )}
      <Container>
        <MeetingBookingButton className="text-center" wrapperButtonClassName="text-center" />
      </Container>

      {/* <Container className="space-y-6 py-12">
        <h1 className="text-center text-3xl font-bold">
          300+ Businesses Recovered Their Facebook Tracking
        </h1>
        <h4 className="text-muted-foreground mx-auto max-w-3xl text-center">
          From e-commerce stores to service businesses, we've restored compliant
          tracking for every client. See how we recovered their Meta Ads
          Tracking
        </h4>
      </Container>
      <CaseStudyCarousel caseStudies={caseStudies} /> */}

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
                className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Your Facebook Ads Are Failing
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Meta's 2025 data sharing restrictions are blocking critical tracking data across
              multiple business categories, causing massive performance drops.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {restrictionIssues.map((issue, index) => (
              <Card
                key={index}
                className="border-destructive/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="animate-pulse">{issue.icon}</div>
                    <CardTitle className="text-lg">{issue.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual representation */}
          <div className="bg-background border-destructive/20 mt-12 transform space-y-8 rounded-lg border p-4 transition-all duration-500 hover:shadow-xl md:p-12">
            <h3 className="pb-6 text-center text-2xl font-bold">What You're Seeing Right Now</h3>

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
                  <Lock className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Business automatically categorized</strong>
                    <br />
                    Automatic restrictions applied to sensitive data
                  </AlertDescription>
                </Alert>
              </div>
              <div className="text-center">
                <div className="bg-muted w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/data-sharing-restrcition-03.png"
                    alt="Data sharing restrictions illustration"
                    width={1920}
                    height={1080}
                    className="transform rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <Card className="border-destructive/30">
                <CardContent className="p-4 text-center">
                  <TrendingDown className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-73%</div>
                  <div className="text-muted-foreground text-sm">Conversion Tracking</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-4 text-center">
                  <Gauge className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-58%</div>
                  <div className="text-muted-foreground text-sm">ROAS Performance</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-4 text-center">
                  <Users className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-84%</div>
                  <div className="text-muted-foreground text-sm">Audience Building</div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-4 text-center">
                  <Eye className="text-destructive mx-auto mb-2 h-8 w-8" />
                  <div className="text-destructive text-2xl font-bold">-91%</div>
                  <div className="text-muted-foreground text-sm">Attribution Accuracy</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
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
              <Separator />
              <div className="text-center">
                <h4 className="mb-2 text-lg font-semibold">Time to Recovery Impact</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-destructive text-2xl font-bold">Week 1</div>
                    <div className="text-muted-foreground text-sm">-$3,500 lost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-destructive text-2xl font-bold">Month 1</div>
                    <div className="text-muted-foreground text-sm">-$15,000+ lost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-destructive text-2xl font-bold">Quarter 1</div>
                    <div className="text-muted-foreground text-sm">-$45,000+ lost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="max-w-6xl">
        <MeetingBookingButton className="text-center" wrapperButtonClassName="text-center " />
      </Container>
      {/* Testimonials */}
      <div className="grid w-full place-content-center">
        <h1 className="pt-12 pb-6 text-center text-3xl font-bold">
          300+ Businesses Recovered Their Facebook Tracking
        </h1>
        <h4 className="text-muted-foreground mx-auto max-w-3xl text-center">
          From e-commerce stores to service businesses, we've restored compliant tracking for every
          client. See how we recovered their ROAS while maintaining full compliance.
        </h4>
        <TestimonialGrid showUpworkStats={false} />
      </div>

      {/* Solution Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-16">
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 animate-bounce">Our Proven Solution</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The "See Every Sale" System</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Our specialized approach restores your Facebook Pixel tracking while maintaining full
              compliance with all data protection regulations.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {solutionBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="animate-pulse">{benefit.icon}</div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Steps */}
          <div className="bg-muted/30 transform rounded-lg p-8 transition-all duration-500 hover:shadow-xl">
            <h3 className="mb-8 text-center text-2xl font-bold">Our 3-Day Recovery Process</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="transform text-center transition-all duration-300 hover:scale-105">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full text-xl font-bold">
                  1
                </div>
                <h4 className="mb-2 text-lg font-semibold">Audit & Categorization Review</h4>
                <p className="text-muted-foreground text-sm">
                  We analyze your current restrictions and appeal any misclassifications in Meta's
                  automated system.
                </p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-105">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full text-xl font-bold">
                  2
                </div>
                <h4 className="mb-2 text-lg font-semibold">Compliant Pixel Setup</h4>
                <p className="text-muted-foreground text-sm">
                  We implement proper event filtering and data protection measures while preserving
                  conversion tracking accuracy.
                </p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-105">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full text-xl font-bold">
                  3
                </div>
                <h4 className="mb-2 text-lg font-semibold">Testing & Optimization</h4>
                <p className="text-muted-foreground text-sm">
                  We verify all events are tracking correctly and optimize your conversion campaigns
                  for maximum ROAS recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold">Before vs After Implementation</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-destructive/30 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center">
                    <XCircle className="mr-2 h-5 w-5" />
                    Before: Broken Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <XCircle className="text-destructive mr-2 h-4 w-4" />
                    Events blocked by restrictions
                  </div>
                  <div className="flex items-center text-sm">
                    <XCircle className="text-destructive mr-2 h-4 w-4" />
                    ROAS down 40-80%
                  </div>
                  <div className="flex items-center text-sm">
                    <XCircle className="text-destructive mr-2 h-4 w-4" />
                    Audiences can't be built
                  </div>
                  <div className="flex items-center text-sm">
                    <XCircle className="text-destructive mr-2 h-4 w-4" />
                    Compliance violations risk
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    After: Full Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2 h-4 w-4" />
                    95% tracking accuracy restored
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2 h-4 w-4" />
                    ROAS back to normal levels
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2 h-4 w-4" />
                    Custom audiences working
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2 h-4 w-4" />
                    100% compliant with regulations
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold">Ready to Fix Your Tracking?</h3>
            <MeetingBookingButton className="justify-center" />
          </div>
        </Container>
      </section>

      {/* More Testimonials */}
      <div className="grid w-full place-content-center">
        <h1 className="pt-12 pb-6 text-center text-3xl font-bold">
          Join 300+ Businesses Who've Recovered Their Facebook Tracking
        </h1>
        <h4 className="text-muted-foreground mx-auto max-w-3xl text-center">
          Don't let data sharing restrictions kill your ad performance. Our clients see results
          within 7 Days.
        </h4>
        <TestimonialGrid showUpworkStats={false} upwork={true} />
      </div>

      {/* Urgency Section */}
      <section className="from-destructive to-destructive/80 bg-gradient-to-br py-16 text-white">
        <Container className="max-w-4xl text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 animate-pulse">
              <Clock className="mr-2 h-4 w-4" />
              Time Sensitive
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Every Day You Wait Costs You Money
            </h2>
            <p className="mx-auto max-w-2xl text-xl opacity-90">
              The longer your tracking stays broken, the more revenue you lose and the harder it
              becomes to rebuild your audiences.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-2 text-3xl font-bold">Day 1-3</div>
              <div className="text-lg opacity-90">Quick wins possible</div>
              <div className="mt-2 text-sm opacity-75">Appeals can still be processed quickly</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-2 text-3xl font-bold">Week 2+</div>
              <div className="text-lg opacity-90">Harder recovery</div>
              <div className="mt-2 text-sm opacity-75">Algorithm learning reset required</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-2 text-3xl font-bold">Month 2+</div>
              <div className="text-lg opacity-90">Major rebuilding</div>
              <div className="mt-2 text-sm opacity-75">Complete audience reconstruction needed</div>
            </div>
          </div>

          <div className="space-y-6">
            <MeetingBookingButton
              className="justify-center"
              buttonClassName="bg-white text-destructive hover:bg-white/90 font-bold"
            />

            <p className="text-sm opacity-75">
              ⚡ 24-hour audit • 72-hour implementation • 30-day guarantee
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-xl">
              Everything you need to know about fixing your Facebook tracking
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="text-primary mr-2 h-5 w-5" />
                  How quickly can you fix my tracking?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most clients see their tracking restored within a week. The process includes:
                  audit (Day 1), implementation (Day 2-5), and testing (Day 6-7).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-primary mr-2 h-5 w-5" />
                  Will this violate Meta's policies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No. Our solution is 100% compliant with all Meta policies and data protection
                  regulations (GDPR, CCPA, HIPAA). We work within Meta's framework to restore
                  tracking while respecting all restrictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="text-primary mr-2 h-5 w-5" />
                  What kind of results should I expect?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our clients typically see 85-95% of their tracking accuracy restored, ROAS
                  recovery to pre-restriction levels, and the ability to build custom audiences
                  again. Results vary by business category and implementation complexity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="text-primary mr-2 h-5 w-5" />
                  What if it doesn't work for my business?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If we can't significantly improve your
                  tracking within 30 days, you get a full refund. We've successfully helped 300+
                  businesses, with a 98.7% success rate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="text-primary mr-2 h-5 w-5" />
                  Do you provide ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes. All implementations include 90 days of monitoring and support to ensure your
                  tracking remains stable. We also provide guidance on maintaining compliance as
                  regulations evolve.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="from-primary to-primary/80 bg-gradient-to-br py-16 text-white">
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
          <MeetingBookingButton
            className="justify-center"
            buttonClassName="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-4"
          />

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
    </>
  );
}
