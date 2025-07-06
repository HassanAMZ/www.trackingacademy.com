import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";

export const MarketTrendsSection = ({ trendCards }: { trendCards: any }) => {
  return (
    <Container className="max-w-4xl! space-y-12">
      <h2 className="text-center">How data fueled advertising is changing</h2>{" "}
      <div className="grid gap-4 md:grid-cols-3">
        {trendCards.map((card: any, index: any) => (
          <Card key={index} className="border-primary/20">
            <CardHeader className="pb-0!">
              <card.icon className="h-12 w-12 text-primary" />
              <CardTitle className="text-xl">
                <span className="text-primary">{card.title}</span> are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>{" "}
      <p className="text-center text-muted-foreground">
        And as a result, the picture of the customer journey is no longer complete
      </p>
    </Container>
  );
};
