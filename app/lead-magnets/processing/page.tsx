"use client";

import { useEffect, useState } from "react";
import { submitAuditRequest } from "@/actions/submit-audit-request";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  BarChart3,
  CheckCircle,
  Clock,
  Loader2,
  Search,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const processingSteps = [
  {
    icon: Search,
    text: "Scanning website structure and pages",
    duration: 2000,
  },
  {
    icon: BarChart3,
    text: "Analyzing Meta Pixel and tracking implementations",
    duration: 3000,
  },
  {
    icon: Shield,
    text: "Checking GDPR compliance and cookie setup",
    duration: 2500,
  },
  {
    icon: Target,
    text: "Evaluating Conversions API configuration",
    duration: 2000,
  },
  {
    icon: Users,
    text: "Queuing for expert review and analysis",
    duration: 2000,
  },
];

export default function ProcessingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false); // Prevent duplicate events
  const [triggerScanCompleteEvent, setTriggerScanCompleteEvent] = useState(false);
  const [triggerFormSubmitEvent, setTriggerFormSubmitEvent] = useState(false);

  // Form field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < processingSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setShowForm(true);
          // Trigger scan complete event
          setTriggerScanCompleteEvent(true);
        }, 1000);
      }
    }, processingSteps[currentStep]?.duration || 2000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  // Check localStorage when form becomes visible
  useEffect(() => {
    if (showForm && typeof window !== "undefined") {
      // Check localStorage for existing values and pre-populate
      const storedName = localStorage.getItem("name") || "";
      const storedEmail = localStorage.getItem("email_address") || "";
      const storedPhone = localStorage.getItem("phone_number") || "";

      // Set the form fields with stored values
      setName(storedName);
      setEmail(storedEmail);
      setPhone(storedPhone);
    }
  }, [showForm]);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setHasSubmittedForm(true);
    // Save form values to localStorage
    const nameValue = formData.get("name") as string;
    const emailValue = formData.get("email") as string;
    const phoneValue = formData.get("phone") as string;

    localStorage.setItem("name", nameValue);
    localStorage.setItem("email_address", emailValue);
    localStorage.setItem("phone_number", phoneValue);
    // 🔥 Inject website_url from localStorage
    const websiteUrl = localStorage.getItem("website_url");
    if (websiteUrl) {
      formData.set("website_url", websiteUrl);
    }
    setTriggerFormSubmitEvent(true);
    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: "generate_lead",
      event_details: {
        event_category: "Lead",
        event_action: "Form_Submitted",
        form_type: "audit_contact_details",
        user_journey_step: "step_4_contact_details_submitted",
      },
      user_data: {
        timestamp: new Date().toISOString(),
        email: localStorage.getItem("email_address"),
        phone: localStorage.getItem("phone_number"),
      },
    });

    try {
      await submitAuditRequest(formData);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Error submitting audit request:", error);
        setIsSubmitting(false);
        setHasSubmittedForm(false); // Allow retry on error
      }
    }
  };

  if (!showForm) {
    return (
      <Container className="grid min-h-screen max-w-4xl place-content-center space-y-8 text-center">
        <h1>
          Analyzing Your Website's Tracking Setup —
          <span className="text-primary"> Initial Scanning in Progress</span>
        </h1>
        <h4 className="text-muted-foreground mx-auto max-w-3xl">
          Our AI-powered system is performing a comprehensive scan of your website's Ga4, GTM, Meta
          Pixel, tracking implementations, and compliance setup
        </h4>

        <div className="mx-auto w-full max-w-xl space-y-6">
          {processingSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={index}
                className={`flex items-center gap-4 rounded-lg p-4 transition-all duration-500 ${
                  isActive
                    ? "bg-primary/10 border-primary/20 border"
                    : isCompleted
                      ? "bg-muted/50"
                      : "opacity-50"
                }`}
              >
                <div
                  className={`rounded-full p-2 ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-muted"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : isActive ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <span className={isActive ? "font-medium" : ""}>{step.text}</span>
              </div>
            );
          })}
        </div>

        <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Initial tracking analysis in progress...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container className="grid min-h-screen max-w-4xl place-content-center">
      <div className="w-full space-y-8">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1>Initial Scan Complete!</h1>
          <h4 className="text-muted-foreground mx-auto max-w-3xl">
            We've completed the automated analysis of your website's tracking setup. Our expert team
            will now conduct a comprehensive manual review to identify optimization opportunities
            and deliver your detailed audit report within 24 hours.
          </h4>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData);
          }}
          className="mx-auto max-w-xl space-y-6"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-primary border p-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary border p-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-primary border p-4"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || hasSubmittedForm}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Request...
              </>
            ) : (
              "Get My Detailed Audit Report"
            )}
          </Button>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                24-Hour Expert Analysis Guarantee
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-xs text-green-700">
              Our tracking specialists will personally review your website and deliver a
              comprehensive audit report with actionable recommendations within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
}
