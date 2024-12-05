// src/components/HomePage/MarketTrendsSection.tsx
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { FileText, Users, Grid2X2 } from "lucide-react";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

export const MarketTrendsSection = ({ trendCards }: { trendCards: any }) => {
  return (
    <Container className=" !max-w-4xl space-y-12">
      <Text as="h2" variant="heading2xl" className="text-center">
        How data fueled advertising is changing
      </Text>

      <div className="grid md:grid-cols-3 gap-4">
        {trendCards.map((card: any, index: any) => (
          <Card key={index} className="border-primary/20">
            <CardHeader className="!pb-0">
              <card.icon className="w-12 h-12 text-primary" />
              <CardTitle className="text-xl">
                <span className="text-primary">{card.title}</span> are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text as="p" className="text-muted-foreground">
                {card.description}
              </Text>
            </CardContent>
          </Card>
        ))}
      </div>

      <Text
        as="p"
        variant="bodyLg"
        className="text-muted-foreground text-center"
      >
        And as a result, the picture of the customer journey is no longer
        complete
      </Text>
    </Container>
  );
};
