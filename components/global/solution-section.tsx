import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import Container from '../ui/container';
import Text from '../ui/text';
// Solution Section Component with 7-Step Process
const SolutionSection = ({ steps }: { steps: any }) => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <Text as="h2" variant="headingXl">
              Here's How We Guarantee 95% Accuracy
            </Text>
            <Text as="p" className="mt-4" variant="bodyLg">
              Our specialized system is designed for Shopify stores like yours.
            </Text>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step: any, index: any) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <Badge className="mb-2 w-fit">Step {index + 1}</Badge>
                  <Text as="h3" className="font-semibold">
                    {step.title}
                  </Text>
                </CardHeader>
                <CardContent>
                  <Text as="p" variant="bodyLg">
                    {step.description}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">
              Get Your FREE Tracking Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
