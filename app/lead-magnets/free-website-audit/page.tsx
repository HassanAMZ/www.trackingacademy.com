// Page 1: HomePage - URL Submission
"use client";

import { GTMCustomEvent } from "@/components/analytics/GTMEvents";
import AuditReport, { getScoreColor } from "@/components/audit/audit-report";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import Hero from "@/components/home/hero";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import auditReports from "@/data/audit-report";
import { getDirectoryURL } from "@/utils/payment";
import { Loader2, Shield, Star, XCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

// Zod schema for URL validation
const websiteUrlSchema = z
  .string()
  .url("Please enter a valid URL (e.g., https://example.com)");

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Prevent duplicate events
  const [triggerEvent, setTriggerEvent] = useState(false); // Control GTM event firing
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const validatedUrl = websiteUrlSchema.parse(url);

      // Trigger GTM event for successful URL submission (only once)
      if (!hasSubmitted) {
        setTriggerEvent(true);
        setHasSubmitted(true);
      }

      document.cookie = `website_url=${encodeURIComponent(validatedUrl)}; path=/; max-age=${365 * 24 * 60 * 60}`;
      localStorage.setItem("website_url", validatedUrl);
      localStorage.setItem("submission_timestamp", new Date().toISOString());
      console.log("Website URL submitted:", validatedUrl);

      // Wait 100–200ms to ensure state update renders
      setTimeout(() => {
        router.push(getDirectoryURL("processing"));
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
  const event_details = {
    event_category: "Audit",
    event_action: "URL_Submitted",
    website_url: url,
    user_journey_step: "step_1_url_submission",
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

      <Container className="mx-auto grid min-h-screen max-w-4xl place-content-center space-y-6 py-12">
        <div className="mx-auto space-y-4 text-center">
          <h1 className="mx-auto max-w-3xl">
            Free Web Tracking Audit —
            <span className="text-primary"> No More Data Doubts</span>
          </h1>
          <h4 className="text-muted-foreground mx-auto max-w-3xl">
            The <span className="text-primary"> Total Transparency </span> audit
            helps online businesses spot and resolve tracking issues, ensuring
            accurate data, higher ROI, and no more wasted ad spend.
          </h4>
        </div>
        <div className="mx-auto max-w-lg rounded-xl">
          <Image
            src={"/images/hero/free-audit-report.png"}
            alt="free-audit-report"
            width={1920}
            height={1080}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-lg flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL here"
              required
              className="border-primary w-full border p-6"
              disabled={isSubmitting}
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "🔎 Enter Your Site to Get the Free Audit"
              )}
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
