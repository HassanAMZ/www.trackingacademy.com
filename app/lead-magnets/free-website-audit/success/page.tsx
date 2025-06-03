"use client";

import BookAMeetingPage from "@/app/contact/book-a-meeting/page";
import GoogleCalender from "@/components/contact/google-calender";
import CustomLink from "@/components/mdx/CustomLink";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function SimplifiedSuccessPage() {
  return (
    <Container className="flex min-h-screen items-center justify-center py-12">
      <div className="max-w-3xl space-y-8 text-center">
        {/* Schedule Call Section */}
        <div className="border-accent bg-accent/10 space-y-6 rounded-xl border-2 p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="text-primary h-6 w-6" />
              <h3 className="text-foreground py-4">
                Schedule Your Audit Review Call
              </h3>
              <Calendar className="text-primary h-6 w-6" />
            </div>

            <p className="text-muted-foreground font-semibold">
              Your audit has been added to our queue and our expert team will
              begin analyzing your website's tracking setup. Let's schedule a
              <span className="text-primary"> 30-minute call </span>
              to go over the findings and answer any questions you might have.
            </p>

            <div className="bg-card/80 rounded-lg p-4">
              <h4 className="text-foreground py-4 text-left font-semibold">
                During our call, we'll cover:
              </h4>
              <ul className="text-muted-foreground space-y-3 text-left text-sm">
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Detailed breakdown of your current tracking issues
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  How these issues are affecting your ad performance and ROI
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Actionable solutions to fix your tracking problems
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Answer any questions about your specific setup
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button with Modal */}
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full px-8 py-6 text-lg">
                  📅 Schedule My Results Review Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Schedule Your Results Review Call</DialogTitle>
                </DialogHeader>
                <GoogleCalender />
              </DialogContent>
            </Dialog>

            <p className="text-muted-foreground text-sm">
              Free 30-minute consultation - No obligation, just expert insights
              into your tracking setup
            </p>
          </div>
          {/* Expected Impact Preview */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card rounded-lg border p-4 text-center">
              <div className="bg-primary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                <TrendingUp className="text-primary h-6 w-6" />
              </div>
              <div className="text-foreground text-2xl font-bold">20-40%</div>
              <div className="text-muted-foreground text-sm">
                Better Attribution
              </div>
            </div>
            <div className="bg-card rounded-lg border p-4 text-center">
              <div className="bg-secondary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                <Target className="text-secondary-foreground h-6 w-6" />
              </div>
              <div className="text-foreground text-2xl font-bold">15-30%</div>
              <div className="text-muted-foreground text-sm">Higher ROAS</div>
            </div>
            <div className="bg-card rounded-lg border p-4 text-center">
              <div className="bg-accent/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                <Users className="text-accent-foreground h-6 w-6" />
              </div>
              <div className="text-foreground text-2xl font-bold">Expert</div>
              <div className="text-muted-foreground text-sm">Guidance</div>
            </div>
          </div>
        </div>

        {/* Audit Status */}
        <div className="bg-card rounded-lg border p-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Clock className="text-muted-foreground h-5 w-5" />
            <h3 className="font-semibold">What's Happening Now</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Our tracking specialists are conducting a comprehensive analysis of
            your GA4, Google Ads, Meta Pixel, Conversions API, and overall
            tracking health. You'll receive your personalized audit report
            within <strong className="text-foreground">24 hours</strong> via
            email.
          </p>
        </div>
        {/* Footer Navigation */}
        <div className="flex justify-center gap-4 pt-8 text-sm">
          <CustomLink
            href="/"
            className="text-muted-foreground hover:text-primary"
          >
            ← Back to Home
          </CustomLink>
          <span className="text-muted-foreground">•</span>
          <CustomLink
            href="/case-study"
            className="text-muted-foreground hover:text-primary"
          >
            Our Case Studies
          </CustomLink>
          <span className="text-muted-foreground">•</span>
          <CustomLink
            href="/audit"
            className="text-muted-foreground hover:text-primary"
          >
            Our Tracking Audits
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
