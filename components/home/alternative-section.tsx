"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Container from "../ui/container";

interface ValueProp {
  number: string;
  title: string;
  description: string;
}

interface Alternative {
  title: string;
  content: string;
}

interface AlternativesSectionProps {
  heading: string;
  subheading: string;
  values: ValueProp[];
  alternatives: Alternative[];
}

export default function AlternativesSection({
  heading,
  subheading,
  values,
  alternatives,
}: AlternativesSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index],
    );
  };

  return (
    <Container className="py-12">
      <h2 className="mb-8">{heading}</h2>
      <h4 className="text-muted-foreground mb-8">{subheading}</h4>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((prop) => (
          <Card key={prop.number} className="border-primary/20 border-2">
            <CardContent className="pt-6">
              <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-full text-xl font-medium">
                {prop.number}
              </div>
              <h4 className="mb-2 text-lg font-medium">{prop.title}</h4>
              <p className="text-muted-foreground">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm font-medium">
          Alternatives:
        </div>

        <div className="space-y-2">
          {alternatives.map((alternative, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
              className="border-primary/20 rounded-lg border"
            >
              <CollapsibleTrigger className="hover:bg-secondary/10 flex w-full items-center justify-between p-4 text-left">
                <span className="text-primary text-xl">
                  {alternative.title}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-muted-foreground" />
                ) : (
                  <ChevronDown className="text-muted-foreground" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="border-primary/20 border-t p-4">
                <p className="text-muted-foreground">{alternative.content}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </Container>
  );
}
