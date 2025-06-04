"use client";

import YoutubeEmbed from "@/components/global/youtube-embed";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getDirectoryURL } from "@/utils/payment";
import clsx from "clsx";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Loader2,
  Shield,
  Target,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const restrictionIssues = [
  {
    icon: <AlertTriangle className="text-destructive h-6 w-6" />,
    title: "Hundreds of Thousands of Events Blocked",
    description:
      "Your Meta Pixel is rejecting critical conversion data, making your ads blind to actual performance.",
  },
  {
    icon: <TrendingDown className="text-destructive h-6 w-6" />,
    title: "ROAS Plummeting by 40-60%",
    description:
      "Without proper tracking, Facebook's algorithm can't optimize, causing your ad spend to hemorrhage money.",
  },
  {
    icon: <Target className="text-destructive h-6 w-6" />,
    title: "Custom Audiences Completely Disabled",
    description:
      "Retargeting and lookalike audiences are broken, cutting off your most profitable marketing channels.",
  },
];

const solutionBenefits = [
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: "HIPAA & GDPR Compliant Setup",
    description:
      "Full compliance with health data regulations while maintaining tracking accuracy.",
  },
  {
    icon: <BarChart3 className="text-primary h-6 w-6" />,
    title: "95% Data Accuracy Restored",
    description:
      "See every sale, lead, and conversion with near-perfect attribution tracking.",
  },
  {
    icon: <Zap className="text-primary h-6 w-6" />,
    title: "3-Day Implementation",
    description:
      "Complete tracking restoration in just 72 hours with our proven system.",
  },
];

const urgencyStats = [
  { number: "73%", label: "Of health businesses affected" },
  { number: "$12K", label: "Average monthly revenue loss" },
  { number: "45%", label: "Drop in ad effectiveness" },
  { number: "3 days", label: "Average time to fix" },
];

// Zod schema for URL validation
const websiteUrlSchema = z
  .string()
  .url("Please enter a valid URL (e.g., https://example.com)");

const URLSubmissionForm = ({
  buttonText = "🔎 Get My Free Tracking Audit",
  loadingText = "Analyzing...",
  placeholder = "Enter your website URL here",
  className = "",
  inputClassName = "border-primary w-full border p-6",
  buttonClassName = "w-full text-left",
  onSubmit,
  onSubmitStart,
}: {
  buttonText?: string;
  loadingText?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  onSubmit?: (url: string) => void;
  onSubmitStart?: () => void;
}) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const validatedUrl = websiteUrlSchema.parse(url);

      if (onSubmitStart) {
        onSubmitStart();
      }

      // Store URL in cookie and localStorage
      document.cookie = `website_url=${encodeURIComponent(validatedUrl)}; path=/; max-age=${365 * 24 * 60 * 60}`;
      localStorage.setItem("website_url", validatedUrl);
      localStorage.setItem("submission_timestamp", new Date().toISOString());

      if (onSubmit) {
        onSubmit(validatedUrl);
      }

      // Navigate to processing page
      setTimeout(() => {
        router.push("processing");
      }, 200);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(validationError.errors[0].message);
      } else {
        setError("Please enter a valid website URL");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="mx-auto flex flex-col p-6 text-xl font-semibold"
        >
          {buttonText}
          <br />
          <span className="text-base font-normal">
            Let's do a Quick Audit of your website before we move Forward
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Lets do a quick Initial Audit</DialogTitle>
          <DialogDescription>
            Enter your website URL to receive your free tracking audit.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 ${className}`}
        >
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            required
            className={clsx("p-6", inputClassName)}
            disabled={isSubmitting}
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className={clsx("p-4", buttonClassName)}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {loadingText}
              </>
            ) : (
              buttonText
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-background to-muted/30 min-h-screen bg-gradient-to-b">
        <Container className="flex min-h-screen flex-col items-center justify-center space-y-8 py-12 text-center">
          {/* Alert Badge */}
          <Badge variant="destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Meta's 2025 Health Data Restrictions Are Crushing Ad Performance
          </Badge>
          {/* Main Headline */}
          <div className="max-w-6xl space-y-4">
            <h1>
              Your{" "}
              <span className="text-primary">Health & Wellness Business</span>{" "}
              Is Losing Thousands Due to{" "}
              <span className="text-destructive">
                Blocked Meta Pixel Tracking
              </span>
            </h1>

            <h4 className="text-muted-foreground mx-auto max-w-4xl">
              <span className="text-primary">HIPAA-Compliant Solution:</span> We
              restore your Facebook ad tracking in 3 days, recover your ROAS,
              and maintain full regulatory compliance - without violating any
              Meta policies.
            </h4>
          </div>
          <YoutubeEmbed embedId="tdQufJ-qadE" className="max-w-4xl" />
          {/* Urgency Stats */}
          <div className="grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {urgencyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-2 text-2xl font-bold md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* URL Submission Form */}
          <div className="w-full max-w-2xl">
            <URLSubmissionForm
              buttonText="🔍 Analyze My Website's Tracking Issues"
              placeholder="https://yourwebsite.com"
              className="text-center"
            />
            <p className="text-muted-foreground mt-4 text-sm">
              No credit card required • 24-hour audit delivery • HIPAA compliant
              analysis
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="bg-muted/50 py-16">
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Your Health & Wellness Ads Are Failing
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Meta's January 2025 restrictions specifically target health and
              wellness businesses, blocking critical tracking data that your ads
              depend on.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {restrictionIssues.map((issue, index) => (
              <Card key={index} className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {issue.icon}
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
          <div className="bg-background border-destructive/20 mt-12 rounded-lg border p-12">
            <h3 className="pb-6 text-center text-2xl font-bold">
              What You're Seeing Right Now
            </h3>
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
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>
                      Custom events can't be used with ads features
                    </strong>
                    <br />
                    Hundreds of thousands of events blocked
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Business categorized as "Health & Wellness"</strong>
                    <br />
                    Automatic restrictions applied to sensitive data
                  </AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Aggregated Event Measurement required</strong>
                    <br />
                    Limited conversion optimization available
                  </AlertDescription>
                </Alert>
              </div>

              <div className="text-center">
                <div className="bg-muted w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/data-sharing-restrcition-03.png"
                    alt="Illustration of social sharing and data tracking"
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Our Proven Solution</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              The "See Every Sale" System for Health & Wellness
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Our specialized approach restores your Meta Pixel tracking while
              maintaining full HIPAA, GDPR, and CCPA compliance.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {solutionBenefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
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
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Our 3-Day Recovery Process
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                  1
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Audit & Categorization Review
                </h4>
                <p className="text-muted-foreground text-sm">
                  We analyze your current restrictions and appeal any
                  misclassifications in Meta's automated system.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                  2
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Compliant Pixel Reconfiguration
                </h4>
                <p className="text-muted-foreground text-sm">
                  We implement Aggregated Event Measurement (AEM) and filter out
                  sensitive health data while preserving conversion tracking.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                  3
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Testing & Optimization
                </h4>
                <p className="text-muted-foreground text-sm">
                  We verify all events are tracking correctly and optimize your
                  conversion campaigns for maximum ROAS recovery.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold">
              Ready to Fix Your Tracking?
            </h3>
            <URLSubmissionForm
              buttonText="🚀 Start My Pixel Recovery Now"
              placeholder="Enter your website URL to begin"
              className="justify-center"
            />
          </div>
        </Container>
      </section>

      <div className="grid w-full place-content-center">
        <h1 className="pt-12 pb-6 text-center text-3xl font-bold">
          300+ Satisfied Customers Can't Be Wrong
        </h1>
        <Container className="py-12">
          <TestimonialGrid upwork={true} />
        </Container>
      </div>

      {/* Urgency Section */}
      <section className="py-16">
        <Container className="max-w-4xl text-center">
          <div className="bg-destructive/10 border-destructive/20 rounded-lg border p-8">
            <h2 className="py-6">Every Day You Wait Costs You More Money</h2>
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-destructive mb-2">$400/day</h2>
                <p className="text-muted-foreground">
                  Average revenue loss for affected businesses
                </p>
              </div>
              <div>
                <h2 className="text-destructive mb-2">60%</h2>
                <p className="text-muted-foreground">
                  Drop in conversion tracking accuracy
                </p>
              </div>
            </div>

            <Alert className="mx-auto mb-8 max-w-xl">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Limited Availability: </strong>
                We're only taking 10 new health & wellness clients this month
                due to the specialized nature of compliance work.
              </AlertDescription>
            </Alert>

            <URLSubmissionForm
              buttonText="⚡ Secure My Spot - Get Free Audit"
              placeholder="Your website URL"
              className="justify-center"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
