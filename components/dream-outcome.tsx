import TrackingTable from '@/components/global/tracking-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { Clock, Lightbulb, Target, TrendingUp } from 'lucide-react';
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
  dreamOutcomeList?: Array<{ icon: React.ReactNode; text: string }>;
}

const DreamOutcome: React.FC<DreamOutcomeProps> = ({
  heading = 'Imagine Running Your Business on Autopilot',
  subheading = 'Transform your business operations with our cutting-edge solution',
  card1Title = 'Real-Time Insights',
  card2Title = 'Time-Saving Automation',
  card3Title = 'Data-Driven Decisions',
  card1Content = "Clearly see which ads work and which don't, allowing you to make informed decisions instantly.",
  card2Content = "Automate repetitive tasks and free up your team's time for strategic initiatives and creative problem-solving.",
  card3Content = 'Make data-backed decisions effortlessly, ensuring every move you make is optimized for success.',
  trackingTableRows = 4,
  dreamOutcomeList = [
    {
      icon: <Target className="mr-2 h-5 w-5 text-primary" />,
      text: 'Save 20+ hours per month with automated tracking',
    },
    {
      icon: <TrendingUp className="mr-2 h-5 w-5 text-primary" />,
      text: 'Double your ROI by optimizing your ad spend',
    },
    {
      icon: <Lightbulb className="mr-2 h-5 w-5 text-primary" />,
      text: 'Finally achieve stress-free scaling',
    },
  ],
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
              <Card className="bg-primary text-primary-foreground">
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
              <Card className="bg-secondary text-secondary-foreground">
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
              <Card className="bg-accent text-accent-foreground">
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
        <div className="rounded-lg bg-primary/5">
          {trackingTableRows && (
            <div className="w-full overflow-hidden rounded-xl">
              <div className="p-8 pb-0">
                <TrackingTable rows={trackingTableRows} />
              </div>
            </div>
          )}

          {dreamOutcomeList && dreamOutcomeList.length > 0 && (
            <div className="p-8">
              <Text as="h3" variant="headingXl" className="mb-4">
                Your Dream Outcomes Realized
              </Text>
              <ul className="space-y-2">
                {dreamOutcomeList.map((outcome, index) => (
                  <li key={index} className="flex items-center">
                    {outcome.icon}
                    {outcome.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DreamOutcome;
