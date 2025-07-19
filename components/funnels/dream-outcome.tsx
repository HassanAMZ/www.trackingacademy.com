"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Database,
  DollarSign,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import React from "react";
import LoomEmbed from "../global/loom-embed";

export interface DreamOutcomeProps {
  heading?: string;
  subheading?: string;
  className?: string;
  dreamOutcomeList: Array<{
    icon?:
      | "Lightbulb"
      | "Rocket"
      | "TrendingUp"
      | "Target"
      | "Trophy"
      | "AlertTriangle"
      | "XCircle"
      | "DollarSign"
      | "Database";
    text: string;
    videoId: string;
    description: string;
  }>;
}

const DreamOutcome: React.FC<DreamOutcomeProps> = ({
  heading,
  className,
  subheading,
  dreamOutcomeList,
}) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Rocket,
    Lightbulb,
    TrendingUp,
    Target,
    Trophy,
    AlertTriangle,
    XCircle,
    DollarSign,
    Database,
  };

  return (
    <div className={cn("space-y-16", className)}>
      {/* Header */}
      <div className="space-y-4 text-center">
        {heading && <h2>{heading}</h2>}
        {subheading && <h4 className="mx-auto max-w-3xl text-muted-foreground">{subheading}</h4>}
      </div>

      <LoomEmbed
        hideControls={false}
        backgroundImage="/images/hero/data-sharing-restrcition-03.png"
        embedId="3768f5d29d724dc2837085355d614c57"
        className="p-0"
      />
      {/* Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {dreamOutcomeList.map((outcome, index) => {
          const IconComponent = outcome.icon ? iconMap[outcome.icon] : Lightbulb;

          return (
            <Card
              key={index}
              className="group border-2 transition-all hover:border-destructive/50 hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive/20">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold">{outcome.text}</h4>
                </div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DreamOutcome;
