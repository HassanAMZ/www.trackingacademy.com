import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Link from "next/link";
import YoutubeEmbed from "@/components/global/youtube-embed";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background">
      <Container className="py-8 ">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="mb-2 border-primary/20">
            ATTENTION: Business Owners Losing Money on Paid Ads 🚨
          </Badge>

          <Text as="h1" variant="heading3xl" className="text-balance max-w-5xl">
            Get <span className="text-primary">13% Increased</span> Return on
            Ads Spent & <span className="text-primary">11% Decreased </span>
            Cost Per Conversion — Or We'll Do It
            <span className="text-primary"> FREE! 💯</span>
          </Text>

          <YoutubeEmbed embedId="9MGpL_AmEYM" className="!max-w-4xl" />

          <Text as="h2" variant="bodyLg" className="max-w-3xl">
            Tracking gaps are costing you money. If you don't know which ads
            work, every dollar you spend could be a dollar lost. We help you get
            95%+ accurate tracking.
          </Text>

          <Button
            asChild
            size="lg"
            className="text-xl px-12 py-7 shadow-2xl transform hover:-translate-y-1 transition-all whitespace-pre-wrap"
          >
            <Link href="/contact">
              Book a FREE CALL and Sky Rocket Your Business
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            {[
              "95%+ Tracking Accuracy",
              "7-Day Guaranteed Setup",
              "100% Money-Back Promise",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};