import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { Clock, Lightbulb, TrendingUp } from 'lucide-react';
import React from 'react';

interface DreamOutcomeProps {
  heading?: string;
  subheading?: string;
  card1Title?: string;
  card2Title?: string;
  card3Title?: string;
  card1Content?: string;
  card2Content?: string;
  card3Content?: string;
  trackingTableRows?: number;
  dreamOutcomeList?: Array<{
    icon?: React.ComponentType<any>;
    text: string;
  }>;
}

const DreamOutcome: React.FC<DreamOutcomeProps> = ({
  heading,
  subheading,
  card1Title,
  card2Title,
  card3Title,
  card1Content,
  card2Content,
  card3Content,
  trackingTableRows = 4,
  dreamOutcomeList,
}) => {
  return (
    <section className="min-h-screen place-content-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="items-left flex !max-w-5xl flex-col justify-center space-y-8 py-12 text-left">
        {heading && (
          <div>
            <Text as="h2" variant="heading2xl" className="mb-4">
              {heading}
            </Text>
          </div>
        )}

        {subheading && (
          <div>
            <Text as="p" variant="headingLg" className="text-muted-foreground">
              {subheading}
            </Text>
          </div>
        )}

        {(card1Title || card2Title || card3Title) && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {card1Title && (
              <Card className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-6 w-6" />
                    {card1Title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{card1Content}</CardContent>
              </Card>
            )}
            {card2Title && (
              <Card className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-6 w-6" />
                    {card2Title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{card2Content}</CardContent>
              </Card>
            )}
            {card3Title && (
              <Card className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-6 w-6" />
                    {card3Title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{card3Content}</CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="space-y-12 rounded-lg bg-primary/5 p-8">
          {/* {trackingTableRows && (
            <div className="w-full overflow-hidden rounded-xl">
              <TrackingTable rows={trackingTableRows} />
            </div>
          )} */}

          {dreamOutcomeList && dreamOutcomeList.length > 0 && (
            <div className="space-y-8">
              <Text as="h3" variant="heading2xl" className="text-center py-8">
                Your Dream Outcomes Realized
              </Text>
              <div className="grid gap-6 md:grid-cols-3">
                {dreamOutcomeList.map((outcome, index) => (
                  <Card key={index} className="bg-background">
                    <CardContent className="flex flex-col items-center p-6 space-y-5 text-center">
                      {outcome.icon && (
                        <outcome.icon className="mr-4 bg-primary/10 rounded-full p-1 h-12 w-12" />
                      )}

                      <Text as="p" variant="headingMd">
                        {outcome.text}
                      </Text>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DreamOutcome;
