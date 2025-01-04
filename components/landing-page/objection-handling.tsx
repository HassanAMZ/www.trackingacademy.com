import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import React from "react";

interface Guarantee {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ObjectionHandlingProps {
  sectionTitle?: string;
  guarantees?: Guarantee[];
}

const ObjectionHandling: React.FC<ObjectionHandlingProps> = ({
  sectionTitle,
  guarantees,
}) => {
  return (
    <section className="grid min-h-screen place-content-center bg-secondary/20 py-24">
      <Container className="max-w-4xl">
        {/* Section Title */}
        {sectionTitle && (
          <Text as="h2" variant="heading2xl" className="mb-12 text-center">
            {sectionTitle}
          </Text>
        )}

        {/* Guarantees List */}
        {guarantees && guarantees.length > 0 && (
          <div className="space-y-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-background shadow-xl">
                <CardContent className="flex flex-col items-center gap-8 px-8 py-24 md:flex-row">
                  <div className="flex justify-center md:w-1/3">
                    <div className="rounded-full bg-primary/10 p-8">
                      <guarantee.icon className="h-24 w-24 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <Text as="p" variant="headingLg" className="mb-4">
                      {guarantee.title}
                    </Text>
                    <Text as="p">{guarantee.description}</Text>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ObjectionHandling;
