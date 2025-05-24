"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "../ui/container";

// Define the step structure
interface Step {
  id: number;
  title: string;
  date: string;
  heading: string;
  description: string;
  imageSrc?: string;
  mediaComponent?: React.ReactNode;
  downloadText: string;
  link?: string;
  newTab?: boolean;
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Onboarding",
    date: "Day 1",
    heading: "Onboarding + Setup Review",
    description:
      "We meet 1-on-1 to understand your store, funnels, ad account, and what's currently broken or missing in your tracking stack.",
    imageSrc: "/images/hero/measurement-planning.png",
    downloadText: "Book onboarding meeting",
    link: "/funnels/facebook/see-every-sale/book-a-meeting",
    newTab: false,
  },
  {
    id: 2,
    title: "Audit",
    date: "Day 1",
    heading: "Custom Tracking Audit",
    description:
      "We scan your entire ad-tech setup and identify every weak link: pixel, API, GTM, attribution paths — everything.",
    imageSrc: "/placeholder.svg",
    downloadText: "Download audit checklist",
    link: "https://docs.google.com/document/d/1QZc8LjEhqX5jc6682tke0nG6ly68_jxr4cT9o3V1sIY/edit?usp=sharing",
    newTab: true,
  },
  {
    id: 3,
    title: "Planning",
    date: "Day 2",
    heading: "Precision Measurement Plan",
    description:
      "We map your customer journey and define exact events to track — from view to click to conversion — across all platforms.",
    imageSrc: "/images/hero/customer-support.png",
    downloadText: "Download measurement template",
    link: "https://docs.google.com/document/d/1QZc8LjEhqX5jc6682tke0nG6ly68_jxr4cT9o3V1sIY/edit?tab=t.7nb0yhd35xdh#heading=h.bs7ux0lno93z",
    newTab: true,
  },
  {
    id: 4,
    title: "Tracking",
    date: "Day 2-3",
    heading: "Full Tracking Implementation",
    description:
      "We install a future-proofed, bulletproof tracking stack with Facebook CAPI, GA4, server-side integrations, and policy-safe triggers.",
    imageSrc: "/placeholder.svg",
    downloadText: "Download implementation guide",
    link: "https://docs.google.com/document/d/1QZc8LjEhqX5jc6682tke0nG6ly68_jxr4cT9o3V1sIY/edit?tab=t.qstn9guph2m2",
    newTab: true,
  },
  {
    id: 5,
    title: "Testing",
    date: "Day 3",
    heading: "QA Testing + Performance Monitoring",
    description:
      "We test across all devices, browsers, and platforms to ensure 95%+ accuracy — then monitor it to ensure it sticks.",
    imageSrc: "/placeholder.svg",
    downloadText: "Download QA checklist",
    link: "https://docs.google.com/document/d/1QZc8LjEhqX5jc6682tke0nG6ly68_jxr4cT9o3V1sIY/edit?tab=t.44wpbq4w3f8s",
    newTab: true,
  },
];

interface ProcessStepsProps {
  steps?: Step[];
  initialStep?: number;
  title?: string;
  subtitle?: string;
}

export function ProcessSteps({
  steps = defaultSteps,
  initialStep = 1,
  title = "This is how working with us Looks Like",
  subtitle = "Fix Your Facebook's Data Sharing Restrictions and Restore 95%+ Accurate Data for Facebook Ads. All done-for-you, in just 3 days, without violating Facebook's policies or getting flagged. Track every ecommerce event.",
}: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState<number>(initialStep);

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <section className="from-primary/5 to-background bg-linear-to-b py-24">
      <Container className="w-full space-y-4">
        <h1 className="text-center whitespace-pre-wrap">{title}</h1>{" "}
        {subtitle && (
          <h4 className="text-center text-muted-foreground max-w-4xl pt-8 mx-auto whitespace-pre-wrap">
            {subtitle}
          </h4>
        )}{" "}
        {/* Navigation */}
        <div className="flex flex-row justify-between items-center mb-4 overflow-x-auto pb-2 pt-18">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "cursor-pointer flex items-center text-xs sm:text-sm md:text-base font-medium py-2 px-1 sm:px-2 whitespace-nowrap",
                activeStep === step.id
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              <span className="mr-1 sm:mr-2 hidden md:flex">{step.id}</span>
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">{step.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>{" "}
        {/* Progress Bar */}
        <div className="w-full h-0.5 bg-muted mb-8 md:mb-12 relative">
          <div
            className="absolute h-0.5 bg-primary transition-all duration-300"
            style={{
              width: `${(activeStep / steps.length) * 100}%`,
              maxWidth: "100%",
            }}
          />
        </div>{" "}
        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8">
          <div className="space-y-4 md:space-y-6">
            <p className="text-muted-foreground">{currentStep.date}</p>{" "}
            <h2 className="text-3xl md:text-4xl font-bold">
              {currentStep.heading}
            </h2>{" "}
            <p className="text-muted-foreground">{currentStep.description}</p>{" "}
            {currentStep.link &&
              (currentStep.newTab ? (
                <a
                  href={currentStep.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mt-4 gap-2">
                    <Download className="h-4 w-4" />
                    <span>Click to</span>
                    <span className="text-muted-foreground">
                      {currentStep.downloadText}
                    </span>
                  </Button>
                </a>
              ) : (
                <Link href={currentStep.link}>
                  <Button variant="outline" className="mt-4 gap-2">
                    <Download className="h-4 w-4" />
                    <span>Click to</span>
                    <span className="text-muted-foreground">
                      {currentStep.downloadText}
                    </span>
                  </Button>
                </Link>
              ))}
          </div>{" "}
          {/* Media section */}
          <div className="rounded flex items-center justify-center">
            {currentStep.mediaComponent ? (
              currentStep.mediaComponent
            ) : (
              <Image
                src={currentStep.imageSrc || "/placeholder.svg"}
                alt={`${currentStep.title} illustration`}
                width={1920}
                height={1080}
                className="max-w-full h-auto rounded"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
