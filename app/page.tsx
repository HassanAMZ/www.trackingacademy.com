import Hero from '@/components/heros/hero-3';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'next-view-transitions';

const SolutionSection = () => {
  const steps = [
    {
      title: 'Precision Audit & Baseline Setup',
      description: 'Complete audit of your current setup and identify tracking gaps',
    },

    {
      title: 'Data Layer Installation',
      description: 'Custom data layer for more reliable, server-side tracking',
    },
    {
      title: 'Server-Side GTM Setup',
      description: 'Google Containers configured and hosted in the cloud',
    },
    {
      title: 'Track Key E-Commerce Events',
      description: 'Track Add to Cart, Checkout, Purchase, and more',
    },
    {
      title: 'Subdomain & Analytics Integration',
      description: 'Custom subdomain and full Google Analytics setup',
    },
    {
      title: '7-Day Monitoring & QA',
      description: 'Ensure perfect accuracy and optimize as needed',
    },
  ];

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
            {steps.map((step, index) => (
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

          <div className="flex items-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Let’s Handle Your Tracking Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      title: "See Every Dollar's Impact",
      description:
        "With our 95%+ accuracy guarantee, you'll know exactly which ads bring the best results",
    },
    {
      title: 'Save Time and Effort',
      description: 'Our system handles all the heavy lifting and ongoing optimizations',
    },
    {
      title: 'Risk-Free Guarantee',
      description: "If we don't hit 95% tracking accuracy, you don't pay. Simple as that",
    },
    {
      title: 'Custom Analytics Dashboard',
      description: 'Get an intuitive, easy-to-read Google Analytics dashboard for instant insights',
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Text as="h2" variant="headingXl" className="text-center">
            Why Choose Our 95%+ Accuracy System?
          </Text>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <Text as="h3" className="mb-2 font-semibold">
                        {benefit.title}
                      </Text>
                      <Text as="p" variant="bodyLg">
                        {benefit.description}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const GuaranteeSection = () => {
  return (
    <section className="py-16">
      <Container>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <AlertCircle className="h-12 w-12 text-primary" />
              <Text as="h2" variant="headingXl">
                Our "95%+ Accuracy or It's FREE" Guarantee
              </Text>
              <Text as="p" className="max-w-xl">
                We're confident that our system will deliver precise, actionable data for your
                Shopify store. If we don't meet our 95% accuracy promise, you don't pay a single
                cent.
              </Text>
              <div className="flex items-center space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Let’s Handle Your Tracking Setup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

// Main Page Component that combines all sections
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <SolutionSection />
      <BenefitsSection />
      <GuaranteeSection />
    </main>
  );
}
