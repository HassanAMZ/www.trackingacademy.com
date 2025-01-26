"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronRight,
  ChevronDown,
  Rocket,
  Target,
  Trophy,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Container from "../ui/container";

interface DreamOutcomeProps {
  heading?: string;
  subheading?: string;
  dreamOutcomeList: Array<{
    icon: string;
    text: string;
    image: string;
    description: string;
  }>;
}

const DreamOutcome: React.FC<DreamOutcomeProps> = ({
  heading,
  subheading,
  dreamOutcomeList,
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const iconMap: { [key: string]: React.ComponentType } = {
    Rocket,
    Lightbulb,
    TrendingUp,
    Target,
    Trophy,
  };

  return (
    <Container className="py-16">
      <div className="space-y-12 px-4">
        <div>
          {heading && <h2 className="mb-4 text-4xl font-bold">{heading}</h2>}
          {subheading && (
            <p className="text-xl text-muted-foreground">{subheading}</p>
          )}
        </div>

        {dreamOutcomeList && dreamOutcomeList.length > 0 && (
          <div className="mt-16 space-y-8">
            <div className="grid items-center justify-center gap-8 md:grid-cols-2">
              {/* Left side: Collapsible items */}
              <div className="space-y-4">
                {dreamOutcomeList.map((outcome, index) => {
                  const IconComponent = iconMap[outcome.icon];
                  const isOpen = index === openIndex;

                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <Collapsible
                          open={isOpen}
                          onOpenChange={() => setOpenIndex(index)}
                        >
                          <CollapsibleTrigger className="flex w-full items-center space-x-4">
                            <IconComponent />
                            <h4 className="flex-grow text-left text-xl font-semibold">
                              {outcome.text}
                            </h4>
                            {isOpen ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <p className="text-muted-foreground">
                              {outcome.description}
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Right side: Image */}

              <Image
                src={
                  dreamOutcomeList[openIndex]?.image ||
                  "/images/social-sharing.png"
                }
                alt={dreamOutcomeList[openIndex]?.text || "Dream outcome"}
                width={1080}
                height={1080}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DreamOutcome;
