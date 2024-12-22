import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Bonus {
  title: string;
  description: string;
  value: string;
  icon: React.ComponentType<any>;
}

interface BonusesProps {
  bonuses?: Bonus[];
  totalBonusValue?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  actionButtonText?: string;
  actionButtonLink?: string;
}

const Bonuses: React.FC<BonusesProps> = ({
  bonuses,
  totalBonusValue,
  sectionTitle,
  sectionDescription,
  actionButtonText,
  actionButtonLink,
}) => {
  return (
    <section className="grid min-h-screen place-content-center bg-gradient-to-r from-primary/10 via-background to-primary/10 py-24">
      <Container>
        {/* Section Title */}
        {sectionTitle && (
          <Text as="h2" variant="heading2xl" className="mb-12 text-center">
            {sectionTitle}
          </Text>
        )}

        {/* Section Description */}
        {sectionDescription && (
          <Text as="p" variant="headingLg" className="mb-12 text-center text-muted-foreground">
            {sectionDescription}
          </Text>
        )}

        {/* Bonuses List */}
        {bonuses && bonuses.length > 0 && (
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-primary/20 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <bonus.icon className="h-6 w-6 text-primary" />
                    {bonus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text as="p" className="mb-4">
                    {bonus.description}
                  </Text>
                  <Text as="p" variant="headingLg" className="text-primary">
                    {bonus.value} Value
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Total Bonus Value */}
        {totalBonusValue && (
          <div className="space-y-4 text-center">
            <Text as="h3" variant="heading2xl">
              Total Bonus Value: {totalBonusValue}
            </Text>

            {/* Action Button */}
            {actionButtonText && actionButtonLink && (
              <Button size="lg" asChild className="p-6 text-2xl font-semibold">
                <Link href={actionButtonLink}>
                  {actionButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Bonuses;
