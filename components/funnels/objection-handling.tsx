import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

interface Guarantee {
  title: string;
  description: string;
  image: string;
}

interface ObjectionHandlingProps {
  sectionTitle?: string;
  guarantees?: Guarantee[];
}

const ObjectionHandling: React.FC<ObjectionHandlingProps> = ({ sectionTitle, guarantees }) => {
  return (
    <section className="grid place-content-center bg-secondary/20 py-24">
      <Container>
        {/* Section Title */}
        {sectionTitle && <h2 className="mb-12 text-center">{sectionTitle}</h2>}{" "}
        {/* Guarantees List */}
        {guarantees && guarantees.length > 0 && (
          <div className="space-y-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="flex flex-col items-center gap-8 px-8 py-12 md:flex-row">
                  <div className="flex justify-center p-4 md:w-1/3">
                    <Image
                      src={guarantee.image || "/images/social-sharing.png"}
                      alt="Keanu Reeves with red and blue pills"
                      width={1080}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="mb-4">{guarantee.title}</h3>
                    <p>{guarantee.description}</p>
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
