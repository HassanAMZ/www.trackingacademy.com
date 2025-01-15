import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import React from "react";
import Image from "next/image";
interface Guarantee {
  title: string;
  description: string;
  image: string;
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
    <section className="grid place-content-center bg-secondary/20 py-12">
      <Container>
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
              <Card key={index} className="bg-background">
                <CardContent className="flex flex-col items-center gap-8 px-8 py-12 md:flex-row">
                  <div className="flex justify-center md:w-1/3">
                    <Image
                      src={guarantee.image || "/placeholder.svg"}
                      alt="Keanu Reeves with red and blue pills"
                      width={1080}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <Text as="h3" variant="heading2xl" className="mb-4">
                      {guarantee.title}
                    </Text>
                    <Text as="p" variant="headingMd">
                      {guarantee.description}
                    </Text>
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
