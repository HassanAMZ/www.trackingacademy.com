// src/components/HomePage/MarketTrendsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

export const MarketTrendsSection = ({ trendCards }: { trendCards: any }) => {
  return (
    <Container className="!max-w-4xl space-y-12">
      <Text as="h2" variant="heading2xl" className="text-center">
        How data fueled advertising is changing
      </Text>

      <div className="grid gap-4 md:grid-cols-3">
        {trendCards.map((card: any, index: any) => (
          <Card key={index} className="border-primary/20">
            <CardHeader className="!pb-0">
              <card.icon className="h-12 w-12 text-primary" />
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
        className="text-center text-muted-foreground"
      >
        And as a result, the picture of the customer journey is no longer
        complete
      </Text>
    </Container>
  );
};
