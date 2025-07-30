"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Database,
  DollarSign,
  Lightbulb,
  Rocket,
  ServerCrash,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import React from "react";

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
      | "TrendingDown"
      | "ServerCrash"
      | "DollarSign"
      | "Database";
    text: string;
    embedId: { loom?: string; youtube?: string };
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
    TrendingDown,
    ServerCrash,
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
      {/* {dreamOutcomeList[0].embedId.youtube && (
        <YoutubeEmbed embedId={dreamOutcomeList[0].embedId.youtube} className="p-0" />
      )} */}

      {/* <Video src={see_every_sale_desktop} /> */}

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
