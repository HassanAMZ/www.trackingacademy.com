"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import Image from "next/image";
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
    image: string;
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
    <section className={cn("container mx-auto md:p-6", className)}>
      {/* Header */}
      {(heading || subheading) && (
        <div className="text-center">
          {heading && (
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          )}
          {subheading && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {dreamOutcomeList.slice(0, 3).map((outcome, index) => {
          const IconComponent = outcome.icon ? iconMap[outcome.icon] : Lightbulb;

          return (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={outcome.image || "/placeholder.svg?height=400&width=600"}
                  alt={`${outcome.text} preview`}
                  width="1080"
                  height="1080"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                >
                  <IconComponent className="mr-1 h-3 w-3" />
                  Feature
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle>{outcome.text}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-base leading-relaxed">
                  {outcome.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default DreamOutcome;
