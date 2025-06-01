"use client";

import CustomLink from "@/components/mdx/CustomLink";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function SimplifiedSuccessPage() {
  return (
    <Container className="flex min-h-screen items-center justify-center py-12">
      <div className="max-w-3xl space-y-8 text-center">
        {/* Success Header */}
        <div className="space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Audit Request Submitted Successfully!
            </h1>
            <p className="text-muted-foreground text-xl">
              Our expert team is now analyzing your website's tracking setup.
            </p>
          </div>
        </div>

        {/* Audit Status */}
        <div className="rounded-lg border p-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <h3 className="font-semibold">What's Happening Now</h3>
          </div>
          <p className="text-sm">
            Our tracking specialists are conducting a comprehensive analysis of
            your Ga4, Google ADs, Meta Pixel, Conversions API, and overall
            tracking health. You'll receive your personalized audit report
            within <strong>24 hours</strong> via email.
          </p>
        </div>

        {/* Special Offer Section */}
        <div className="space-y-6 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold text-red-800">
                🔥 Limited Time Offer - While You Wait!
              </h2>
            </div>

            <p className="text-lg text-gray-700">
              Since you're already thinking about fixing your tracking, we have
              a
              <span className="font-bold text-red-600">
                {" "}
                special $300 OFF coupon{" "}
              </span>
              for our "See Every Sale" tracking setup service.
            </p>

            <div className="rounded-lg bg-white/80 p-4">
              <h4 className="mb-2 font-semibold text-gray-800">
                If your audit reveals tracking issues, you can:
              </h4>
              <ul className="space-y-5 text-left text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  Get 95%+ accurate conversion tracking in just 3 days
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  Save $300 with this exclusive coupon (normally $1,500)
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  Get $7,600 worth of bonus tools and dashboards
                </li>
              </ul>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-3">
            <p className="font-semibold text-red-700">
              ⚡ Only 10 coupons available - First come, first served!
            </p>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-red-600 px-8 py-6 text-lg text-white hover:bg-red-700"
          >
            <CustomLink href="/funnels/facebook/see-every-sale">
              🎁 Claim My $300 OFF Coupon Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </CustomLink>
          </Button>

          <p className="text-sm text-gray-600">
            No obligation - secure your coupon now, use it only if you need
            tracking fixes!
          </p>
        </div>

        {/* Expected Impact Preview */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800">20-40%</div>
            <div className="text-sm text-blue-700">Better Attribution</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-800">15-30%</div>
            <div className="text-sm text-green-700">Higher ROAS</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-800">95%+</div>
            <div className="text-sm text-purple-700">Data Accuracy</div>
          </div>
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
