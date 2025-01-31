"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";

interface OfferResultDisplayProps {
  generation: any;
}

export function OfferResultDisplay({ generation }: OfferResultDisplayProps) {
  const [copiedSections, setCopiedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const copyToClipboard = (text: string, sectionName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSections((prev) => ({
        ...prev,
        [sectionName]: true,
      }));

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopiedSections((prev) => ({
          ...prev,
          [sectionName]: false,
        }));
      }, 2000);
    });
  };

  if (!generation) return null;

  return (
    <Card className="mt-4 w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          🚀 Your Hormozi-Style Offer Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(generation).map(([sectionKey, sectionValue]) => (
            <AccordionItem value={sectionKey} key={sectionKey}>
              <AccordionTrigger className="rounded px-2 text-lg font-semibold">
                {sectionKey
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, function (str) {
                    return str.toUpperCase();
                  })}
              </AccordionTrigger>
              <AccordionContent>
                {typeof sectionValue === "object" ? (
                  <div className="space-y-3">
                    {Object.entries(sectionValue as object).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="rounded-lg border p-3 shadow-xs"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-medium">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, function (str) {
                                  return str.toUpperCase();
                                })}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  Array.isArray(value)
                                    ? value.join("\n")
                                    : String(value),
                                  `${sectionKey}-${key}`,
                                )
                              }
                            >
                              {copiedSections[`${sectionKey}-${key}`] ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          {Array.isArray(value) ? (
                            <ul className="list-inside list-disc">
                              {value.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{String(value)}</p>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <p>{String(sectionValue)}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
