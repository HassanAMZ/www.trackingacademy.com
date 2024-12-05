import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/container";
import Text from "../ui/text";
import { Button } from "../ui/button";
import Link from "next/link";
// Benefits Section Component
const BenefitsSection = ({ benefits }: { benefits: any }) => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Text as="h2" variant="headingXl" className="text-center">
            Why Choose Our 95%+ Accuracy System?
          </Text>

          <div className="grid gap-6 md:grid-cols-2 w-full">
            {benefits.map((benefit: any, index: any) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <Text as="h3" className="font-semibold mb-2">
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

export default BenefitsSection;
