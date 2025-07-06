"use client";

import MeetingCalender from "@/components/contact/meeting-calender";
import CustomLink from "@/components/mdx/CustomLink";
import Container from "@/components/ui/container";
import { Calendar, Clock, Target, TrendingUp, Users } from "lucide-react";

export default function SimplifiedSuccessPage() {
  return (
    <Container className="flex min-h-screen items-center justify-center py-12">
      <div className="max-w-4xl space-y-8">
        {/* Meeting Calendar Section - Now First */}
        <div className="space-y-6 rounded-xl border-2 border-accent bg-accent/10 p-8">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="py-4 text-foreground">Schedule Your Audit Review Call</h3>
              <Calendar className="h-6 w-6 text-primary" />
            </div>

            <p className="font-semibold text-muted-foreground">
              Your audit has been added to our queue and our expert team will begin analyzing your
              website's tracking setup. Let's schedule a
              <span className="text-primary"> 30-minute call </span>
              to go over the findings and answer any questions you might have.
            </p>

            <p className="text-sm text-muted-foreground">
              Free 30-minute consultation - No obligation, just expert insights into your tracking
              setup
            </p>
          </div>

          {/* Meeting Calendar Component */}
          <div className="mt-6">
            <MeetingCalender />
          </div>
        </div>

        {/* Expected Impact Preview */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">20-40%</div>
            <div className="text-sm text-muted-foreground">Better Attribution</div>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Target className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold text-foreground">15-30%</div>
            <div className="text-sm text-muted-foreground">Higher ROAS</div>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="text-2xl font-bold text-foreground">Expert</div>
            <div className="text-sm text-muted-foreground">Guidance</div>
          </div>
        </div>

        {/* Audit Status */}
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">What's Happening Now</h3>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Our tracking specialists are conducting a comprehensive analysis of your GA4, Google
            Ads, Meta Pixel, Conversions API, and overall tracking health. You'll receive your
            personalized audit report within <strong className="text-foreground">24 hours</strong>{" "}
            via email.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center gap-4 pt-8 text-sm">
          <CustomLink href="/" className="text-muted-foreground hover:text-primary">
            ← Back to Home
          </CustomLink>
          <span className="text-muted-foreground">•</span>
          <CustomLink href="/case-study" className="text-muted-foreground hover:text-primary">
            Our Case Studies
          </CustomLink>
          <span className="text-muted-foreground">•</span>
          <CustomLink href="/audit" className="text-muted-foreground hover:text-primary">
            Our Tracking Audits
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
