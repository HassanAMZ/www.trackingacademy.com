// src/components/HomePage/ConversionApiSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import React from "react";

export const ConversionApiSection: React.FC = () => {
  return (
    <Container>
      <div className="bg-secondary relative rounded-2xl p-8">
        <h2 className="py-6 text-center">Maximise ROI with a high-quality Conversions API setup</h2>{" "}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            {
              title: "Drive efficient spend",
              description:
                "Advertisers with the Meta pixel that set up the Conversions API saw, on average,",
              percentage: "13%",
              note: "cost-per-result improvement.¹",
            },
            {
              title: "Make more effective campaign decisions",
              description:
                "Global large advertisers with the Meta pixel who set up the Conversions API saw, on average,",
              percentage: "19%",
              note: "additional attributed purchase events.²",
            },
          ].map((card, index) => (
            <Card key={index} className="p-5 text-center backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{card.description}</p>
                <span className="text-primary text-5xl font-bold md:text-6xl">
                  {card.percentage}
                </span>
                <p className="text-muted-foreground">{card.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>{" "}
        <div className="text-muted-foreground mx-auto mt-8 max-w-3xl space-y-2 text-xs">
          {/* Source citations from original component */}
        </div>
      </div>
    </Container>
  );
};
