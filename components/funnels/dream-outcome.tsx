"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ChevronDown,
  Database,
  DollarSign,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(0);

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

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className={cn("space-y-16", className)}>
      {/* Header Section */}
      <div className="space-y-4 text-center">
        {heading && <h2 className="">{heading}</h2>}
        {subheading && <h4 className="mx-auto max-w-3xl text-muted-foreground">{subheading}</h4>}
      </div>

      {/* Main Content */}
      {dreamOutcomeList && dreamOutcomeList.length > 0 && (
        <div className="grid items-start gap-3 lg:gap-16">
          {/* Left side: Collapsible items */}
          <LoomEmbed
            backgroundImage="/images/hero/data-sharing-restrcition-03.png"
            embedId="3768f5d29d724dc2837085355d614c57"
            className="p-0"
          />
          {/* Right side: Image with enhanced styling */}
          <div className="w-full space-y-3">
            {dreamOutcomeList.map((outcome, index) => {
              const IconComponent = outcome.icon ? iconMap[outcome.icon] : Lightbulb;
              const isOpen = index === openIndex;

              return (
                <Card
                  key={index}
                  className={`group border-2 transition-all duration-300 ease-in-out hover:shadow-lg ${
                    isOpen
                      ? "border-destructive bg-destructive/5 shadow-md"
                      : "border-border hover:border-destructive/50"
                  }`}
                >
                  <CardContent className="p-0">
                    <Collapsible open={isOpen} onOpenChange={() => handleToggle(index)}>
                      <CollapsibleTrigger className="flex w-full cursor-pointer items-center space-x-4 p-6 text-left transition-colors hover:bg-muted/50">
                        {/* Icon with background */}
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                            isOpen
                              ? "bg-destructive text-destructive-foreground shadow-lg"
                              : "bg-destructive/10 text-destructive group-hover:bg-destructive/20 group-hover:text-destructive"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>

                        {/* Text content */}
                        <div className="flex-1 space-y-1">
                          <h4 className="text-lg leading-tight font-semibold transition-colors group-hover:text-destructive">
                            {outcome.text}
                          </h4>
                        </div>

                        {/* Chevron icon */}
                        <div
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300 ease-in-out">
                        <div className="px-6 pt-2 pb-6">
                          <div className="ml-6 border-l-2 border-destructive/20 pl-4">
                            <p className="leading-relaxed text-muted-foreground">
                              {outcome.description}
                            </p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DreamOutcome;
