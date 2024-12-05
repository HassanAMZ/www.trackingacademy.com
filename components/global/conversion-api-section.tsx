// src/components/HomePage/ConversionApiSection.tsx
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

export const ConversionApiSection: React.FC = () => {
  return (
    <Container>
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Text as="h2" variant="heading2xl" className="text-center py-6">
          Maximise ROI with a high-quality Conversions API setup
        </Text>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
            <Card
              key={index}
              className="bg-white/90 backdrop-blur text-center p-5"
            >
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Text as="p" className="text-muted-foreground">
                  {card.description}
                </Text>
                <span className="text-5xl md:text-6xl font-bold text-primary">
                  {card.percentage}
                </span>
                <Text as="p" className="text-muted-foreground">
                  {card.note}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-xs text-muted-foreground space-y-2 max-w-3xl mx-auto">
          {/* Source citations from original component */}
        </div>
      </div>
    </Container>
  );
};
