"use client";

import { GTMCustomEvent } from "@/components/analytics/GTMEvents";
import Auditarousel from "@/components/audit/audit-carousal";
import CaseStudyCarousel from "@/components/case-study/case-study-carousel";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import DetailedCTA from "@/components/funnels/detailed-cta";
import DetailsCarousel from "@/components/funnels/details-carousal";
import ObjectionHandling from "@/components/funnels/objection-handling";
import ProblemAwareness from "@/components/funnels/problem-awareness";
import ScarcityUrgency from "@/components/funnels/scarcity-urgency";
import SocialProof from "@/components/funnels/social-proof";
import AdSpendCalculator from "@/components/global/ad-spend-calculator";
import TrackingTable from "@/components/global/tracking-table";
import YoutubeEmbed from "@/components/global/youtube-embed";
import AlternativesSection from "@/components/home/alternative-section";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import auditReports from "@/data/audit-report";
import { caseStudies } from "@/data/case-studies";
import { getDirectoryURL } from "@/utils/payment";
import clsx from "clsx";
import {
  ArrowRight,
  BarChart2,
  CheckSquare,
  Loader2,
  Phone,
  Settings,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

export default function Page() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [triggerEvent, setTriggerEvent] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleFormSubmitStart = () => {
    if (!hasSubmitted) {
      setTriggerEvent(true);
      setHasSubmitted(true);
    }
  };

  const handleFormSubmit = (url: string) => {
    setSubmittedUrl(url);
  };

  const event_details = {
    event_category: "Audit",
    event_action: "URL_Submitted",
    website_url: submittedUrl,
    user_journey_step: "step_1_url_submission",
  };

  const ProcessFlow = () => {
    const steps = [
      {
        number: "1",
        title: "Submit Your URL",
        description:
          "Enter your website URL and we'll analyze your current tracking setup, identify gaps, and create a detailed audit report.",
        icon: <Phone className="h-6 w-6" />,
        color: "bg-primary",
      },
      {
        number: "2",
        title: "Get Your Report",
        description:
          "Receive a comprehensive tracking audit report showing exactly what's broken and how it's affecting your ad performance.",
        icon: <Settings className="h-6 w-6" />,
        color: "bg-secondary",
      },
      {
        number: "3",
        title: "Fix The Issues",
        description:
          "Follow our recommendations or let us implement the fixes for you to restore accurate tracking and improve ROAS.",
        icon: <TrendingUp className="h-6 w-6" />,
        color: "bg-primary",
      },
    ];

    return (
      <Container className="from-primary/5 to-background grid place-content-center gap-6 bg-linear-to-b py-32">
        <div className="mmx-to mb-8 space-y-8 text-center">
          <h1>
            How
            <span className="text-primary"> "Full Transparency" </span>
            Free Audit Works?
          </h1>
          <h4 className="text-muted-foreground">
            Get a comprehensive tracking audit report in minutes - completely
            free
          </h4>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-8 lg:flex-row lg:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="mx-auto flex-1 lg:mx-0">
                <Card className="relative h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader className="relative pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-muted-foreground/20 text-7xl select-none">
                        {step.number}
                      </div>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden items-center justify-center px-4 lg:flex">
                  <ArrowRight className="text-primary h-6 w-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    );
  };

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
      <form
        onSubmit={handleSubmit}
        className={`mx-auto flex w-full max-w-2xl flex-col gap-4 lg:mx-0 ${className}`}
      >
        <div className="flex flex-col items-start justify-center gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            required
            className={clsx("p-6", inputClassName)}
            disabled={isSubmitting}
          />
          {error && <p className="text-destructive">{error}</p>}
          <Button
            size={"lg"}
            type="submit"
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
        </div>
      </form>
    );
  };
  return (
    <main>
      {/* GTM Event Component */}
      {triggerEvent && (
        <GTMCustomEvent
          event_name="audit_request_started"
          {...event_details}
          user_data={{
            timestamp: new Date().toISOString(),
            email: localStorage.getItem("email_address"),
            phone: localStorage.getItem("phone_number"),
          }}
        />
      )}

      <Hero
        eyebrow="Free Website Tracking Audit"
        heading={
          <h1 className="mx-auto max-w-3xl text-center">
            Get Your Free Tracking Audit Report —{" "}
            <span className="text-primary">Spot Every Data Leak</span>
          </h1>
        }
        subheading={
          <h4 className="text-muted-foreground mx-auto max-w-3xl text-center">
            Our
            <span className="text-primary"> "Total Transparency" </span>
            audit reveals exactly what's broken in your tracking setup and how
            much ad spend you're wasting due to missing data.
          </h4>
        }
        carousel={<YoutubeEmbed embedId="tdQufJ-qadE" className="max-w-3xl" />}
        benefits={[
          "100% Free Audit",
          "Detailed Report",
          "GDPR & CCPA Analysis",
        ]}
        customCtaButton={
          <URLSubmissionForm
            className="w-full md:max-w-xl"
            onSubmitStart={handleFormSubmitStart}
            onSubmit={handleFormSubmit}
          />
        }
      />

      <div className="w-full py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Trusted by 1,000+ for Their Audits</h1>
          <h4 className="text-muted-foreground max-w-3xl">
            See exactly how we identified tracking issues for brands and the
            measurable impact on their ROAS, conversion rates, and scaling
            success.
          </h4>
        </Container>
        <Auditarousel auditReports={auditReports} />
      </div>

      <ProblemAwareness
        headingText="The Hidden Costs of Broken Tracking"
        paragraphText="Without accurate tracking data, you're flying blind with your ad spend and missing critical optimization opportunities."
        bluePillPoints={[
          "Ads Can't Optimize Without Proper Data",
          "Wasting Budget on Poorly Targeted Audiences",
          "Missing 40% of Your Actual Conversions",
          "Unable to Scale Due to Unreliable Reports",
          "Competitors With Better Data Outperform You",
        ]}
        imageUrl="/images/hero/matrix.png"
        redPillPoints={[
          "Discover Exactly What's Broken in Your Setup",
          "Get a Clear Roadmap to Fix Every Issue",
          "Learn How Much Revenue You're Actually Missing",
          "Understand Your True Conversion Numbers",
          "Receive Expert Recommendations for Quick Wins",
        ]}
      />

      <DetailsCarousel
        headerTitle="What's In Your Free Audit Report?"
        headerDescription="A comprehensive analysis of your tracking setup that reveals exactly what's broken and how to fix it."
        items={[
          {
            title: "Conversion Tracking Analysis",
            description:
              "Deep dive into your Facebook Pixel, Google Analytics, and server-side tracking to identify data gaps.",
            icon: <Target />,
            benefits: [
              "Facebook Pixel health check and event validation",
              "Google Analytics configuration audit",
              "Server-side tracking implementation review",
              "Cross-platform data consistency analysis",
            ],
            image: "/images/hero/measurement-planning.png",
            customCtaButton: (
              <URLSubmissionForm
                placeholder="Your website URL"
                buttonText="Get Free Report"
                inputClassName="border-primary border p-6"
                buttonClassName="w-full"
                className="mx-auto w-full max-w-xl lg:mx-0"
                onSubmitStart={handleFormSubmitStart}
                onSubmit={handleFormSubmit}
              />
            ),
          },
          {
            title: "Privacy Compliance Assessment",
            description:
              "Review your GDPR and CCPA compliance status and how it affects your tracking accuracy.",
            icon: <CheckSquare />,
            benefits: [
              "Cookie consent implementation review",
              "Privacy policy compliance check",
              "Data collection transparency audit",
              "Compliance vs tracking balance analysis",
            ],
            image: "/images/hero/gdpr-cmp.png",
            customCtaButton: (
              <URLSubmissionForm
                placeholder="Your website URL"
                buttonText="Get Free Report"
                inputClassName="border-primary border"
                buttonClassName="w-full"
                className="w-full max-w-xl"
                onSubmitStart={handleFormSubmitStart}
                onSubmit={handleFormSubmit}
              />
            ),
          },
          {
            title: "Revenue Impact Calculation",
            description:
              "Quantify exactly how much revenue you're losing due to tracking issues and data gaps.",
            icon: <BarChart2 />,
            benefits: [
              "Lost revenue due to poor attribution",
              "Wasted ad spend from bad data",
              "Missed optimization opportunities",
              "Potential ROI improvement projections",
            ],
            image: "/images/hero/unified-dashboard.png",
            customCtaButton: (
              <URLSubmissionForm
                placeholder="Your website URL"
                buttonText="Get Free Report"
                inputClassName="border-primary border"
                buttonClassName="w-full"
                className="w-full max-w-xl"
                onSubmitStart={handleFormSubmitStart}
                onSubmit={handleFormSubmit}
              />
            ),
          },
          {
            title: "Step-by-Step Fix Recommendations",
            description:
              "Get a clear action plan with prioritized recommendations to fix your tracking issues.",
            icon: <Settings />,
            benefits: [
              "Priority-ranked list of issues to address",
              "Technical implementation guidance",
              "Quick wins vs long-term improvements",
              "Resource requirements for each fix",
            ],
            image: "/images/hero/real-time-dashboard.png",
            customCtaButton: (
              <URLSubmissionForm
                placeholder="Your website URL"
                buttonText="Get Free Report"
                inputClassName="border-primary border"
                buttonClassName="w-full"
                className="w-full max-w-xl"
                onSubmitStart={handleFormSubmitStart}
                onSubmit={handleFormSubmit}
              />
            ),
          },
        ]}
      />

      <ProcessFlow />

      <SocialProof
        sectionTitle="Ecommerce Brands Trust Our Audit Reports"
        sectionDescription="See how our free audit reports have helped businesses identify and fix critical tracking issues."
      />

      <ScarcityUrgency
        title="Get Your Free Audit Report Today"
        description="Join hundreds of eCommerce brands who've discovered their tracking blind spots with our comprehensive audit."
        spotsLeft={0}
        daysRemaining={0}
        iconSize={12}
        customButton={
          <URLSubmissionForm
            placeholder="Enter your website URL"
            buttonText="🔎 Get My Free Tracking Audit Now"
            loadingText="Analyzing Your Site..."
            inputClassName="border-primary text-primary bg-primary-foreground border p-4 w-full"
            buttonClassName="text-primary bg-primary-foreground p-4 w-full"
            className="mx-auto max-w-xl"
            onSubmitStart={handleFormSubmitStart}
            onSubmit={handleFormSubmit}
          />
        }
      />

      <ObjectionHandling
        guarantees={[
          {
            title: "100% Free - No Hidden Costs",
            description:
              "Your audit report is completely free with no obligation to purchase anything. We provide real value upfront.",
            image: "/images/hero/money-back.png",
          },
        ]}
      />

      <AlternativesSection
        heading="Your Options When Facing Tracking Issues"
        subheading="Our free audit is perfect for ecommerce brands who:"
        values={[
          {
            number: "1",
            title: "Want to know what's broken",
            description:
              "Get clarity on exactly what tracking issues are affecting your business",
          },
          {
            number: "2",
            title: "Need a clear action plan",
            description:
              "Receive prioritized recommendations for fixing your tracking setup",
          },
          {
            number: "3",
            title: "Want expert insights",
            description:
              "Benefit from our experience auditing 1,000+ eCommerce websites",
          },
          {
            number: "4",
            title: "Are tired of guessing",
            description:
              "Stop wondering if your data is accurate and get definitive answers",
          },
        ]}
        alternatives={[
          {
            title: "Ignore the Problem",
            content:
              "Many businesses continue running ads with broken tracking, wasting thousands in ad spend and missing optimization opportunities.",
          },
          {
            title: "Try to Figure It Out Yourself",
            content:
              "Tracking issues are complex and time-consuming to diagnose. Most business owners waste weeks trying to identify problems.",
          },
          {
            title: "Hire an Expensive Agency",
            content:
              "Many agencies charge thousands just to assess your tracking setup, with no guarantee they'll find all the issues.",
          },
          {
            title: "Get Our Free Audit",
            content:
              "We specialize in tracking audits and provide comprehensive reports at no cost. You'll know exactly what's broken and how to fix it within minutes.",
          },
        ]}
      />

      <DetailedCTA
        heading="Ready to Discover What's Broken?"
        subheading="Get Your Free Tracking Audit Report in Minutes"
        listItems={[
          "Identify exactly what tracking events are missing",
          "Discover how much revenue you're losing to bad data",
          "Get prioritized recommendations for quick fixes",
          "Receive expert guidance on next steps",
        ]}
        footerText="100% free with no obligation to purchase anything!"
        customButton={
          <URLSubmissionForm
            placeholder="Enter your website URL"
            buttonText="🔎 Get My Free Audit Report"
            loadingText="Creating Your Report..."
            inputClassName="border-primary border w-full"
            buttonClassName="p-4 w-full"
            className="!mx-auto"
            onSubmitStart={handleFormSubmitStart}
            onSubmit={handleFormSubmit}
          />
        }
      />

      <Container className="from-primary/5 to-background space-y-12 bg-linear-to-b py-24">
        <div className="mx-auto max-w-4xl space-y-6 pb-6 text-center">
          <h1>Join 1,000+ Businesses Who Got Their Free Audit</h1>
          <h4 className="text-muted-foreground">
            See why leading ecommerce brands choose our free audit to identify
            tracking issues and improve their ad performance.
          </h4>
        </div>
        <TestimonialGrid upwork={true} />
      </Container>

      <ScarcityUrgency
        title="Get Your Free Tracking Audit Report"
        description="Join the hundreds of eCommerce brands who've used our free audit to fix their tracking and improve their ROAS."
        spotsLeft={0}
        daysRemaining={0}
        iconSize={12}
        customButton={
          <URLSubmissionForm
            placeholder="Enter your website URL"
            buttonText="🔎 Start My Free Audit"
            loadingText="Analyzing..."
            inputClassName="border-primary text-primary bg-primary-foreground border p-4 w-full"
            buttonClassName="text-primary bg-primary-foreground p-4 w-full"
            className="mx-auto max-w-lg"
            onSubmitStart={handleFormSubmitStart}
            onSubmit={handleFormSubmit}
          />
        }
      />
    </main>
  );
}
