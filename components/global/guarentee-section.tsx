import { AlertCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Container from '../ui/container';
import Text from '../ui/text';
import { Button } from '../ui/button';
import Link from 'next/link';
// Guarantee Section Component
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
              <Button size="lg" className="mt-4" asChild>
                <Link href="/contact">
                  Start Your FREE Audit Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};
export default GuaranteeSection;
