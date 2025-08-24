import YoutubeEmbed from "@/components/global/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-linear-to-b from-primary/5 to-background">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="mb-2 border-primary/20">
            ATTENTION: Business Owners Losing Money on Paid Ads 🚨
          </Badge>{" "}
          <h1 className="max-w-5xl">
            Get <span className="text-primary">13% Increased</span> Return on Ads Spent &{" "}
            <span className="text-primary">11% Decreased </span>
            Cost Per Conversion — Or We'll Do It
            <span className="text-primary"> FREE! 💯</span>
          </h1>{" "}
          <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-4xl!" />{" "}
          <h2 className="max-w-3xl">
            Tracking gaps are costing you money. If you don't know which ads work, every dollar you
            spend could be a dollar lost. We help you get 95%+ accurate tracking.
          </h2>{" "}
          <Button
            asChild
            size="lg"
            className="transform px-12 py-7 text-xl whitespace-pre-wrap shadow-2xl transition-all hover:-translate-y-1"
          >
            <Link href="/contact" target="_blank" rel="noopener noreferrer">
              Book a FREE CALL and Sky Rocket Your Business
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>{" "}
          <div className="flex flex-col items-center gap-4 text-sm sm:flex-row">
            {["95%+ Tracking Accuracy", "7-Day Guaranteed Setup", "100% Money-Back Promise"].map(
              (feature) => (
                <div key={feature} className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
