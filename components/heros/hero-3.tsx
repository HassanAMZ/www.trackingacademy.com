"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Check } from "lucide-react";
import { Link } from "next-view-transitions";
import VideoPlayer from "../offers/offer-001/video-player";
import TestimonialsCarousel from "../offers/offer-002/testimonial-carousal";
import Text from "../ui/text";

const EnhancedHero = () => {
  function clsx(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background">
      <Container className="">
        <section className="flex flex-col place-content-center items-center justify-center gap-8 py-24 pb-12 text-center lg:pb-24">
          <Badge variant="outline" className="w-fit">
            Revolutionary Ad Tracking Post-iOS 17 World
          </Badge>
          <Text as="h1" variant="heading3xl">
            Done-For-You Ad Tracking Setup – Achieve 95% Accuracy in Just 7
            Days!
          </Text>
          <Text as="h2" variant="headingMd" className="text-muted-foreground">
            Sit back while our experts set up a cutting-edge Cloud Tracking
            system for you. No guesswork—just results. Maximize your ROI
            effortlessly.
          </Text>

          <div className="flex items-center justify-center space-x-4 text-center">
            <Button size="lg" asChild className="whitespace-normal">
              <Link href="/contact">Let’s Handle Your Tracking Setup</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">Check the case studies</Link>
            </Button>
          </div>

          <div className="max-w-2xl">
            <TestimonialsCarousel />
          </div>

          {/* <TrackingTable /> */}
        </section>

        <section className="rounded-lg bg-card/50 p-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Text as="h2" variant="headingXl">
              Stop Losing Money to Inaccurate Paid Ads Tracking
            </Text>
            <Text as="p" className="max-w-[700px]" variant="bodyLg">
              Tracking gaps are costing you money. If you don't know which ads
              work, every dollar you spend could be a dollar lost. Our service
              pinpoints your current issues and delivers a 95%+ accurate
              tracking solution.
            </Text>
          </div>
          <div className="py-6">
            <VideoPlayer
              src="/videos/home/reason-comparison-horizontal.mp4"
              placeholder="/images/home/reason-comparison-horizontal.gif"
              className="hidden sm:block"
            />
            <VideoPlayer
              src="/videos/home/reason-comparison-vertical.mp4"
              placeholder="/images/home/reason-comparison-vertical.gif"
              className="block sm:hidden"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold">Traditional Tracking</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-red-500" />
                  <span className="text-sm">Limited accuracy</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-red-500" />
                  <span className="text-sm">Affected by ad blockers</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-red-500" />
                  <span className="text-sm">Incomplete data</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Our Cloud Tracking</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">95% accuracy</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">Ad blocker resistant</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">Comprehensive insights</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Your Benefits</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm">Increased ROI</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm">Better decision making</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm">Time and cost savings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default EnhancedHero;
