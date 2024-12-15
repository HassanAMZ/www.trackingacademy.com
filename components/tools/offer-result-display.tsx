"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <AccordionTrigger className="text-lg font-semibold  px-2 rounded">
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
                          className=" border rounded-lg p-3 shadow-sm"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium ">
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
                                <CheckCircle2 className=" w-4 h-4" />
                              ) : (
                                <Copy className=" w-4 h-4" />
                              )}
                            </Button>
                          </div>
                          {Array.isArray(value) ? (
                            <ul className="list-disc list-inside ">
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
