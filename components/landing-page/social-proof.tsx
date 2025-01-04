import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

interface SocialProofProps {
  testimonials?: Testimonial[];
  stats?: Stat[];
  clientLogos?: string[];
  sectionTitle?: string;
  sectionDescription?: string;
  resultsTitle?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({
  testimonials,
  stats,
  clientLogos,
  sectionTitle,
  sectionDescription,
  resultsTitle,
}) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-24">
      <Container>
        {/* Section Title */}
        {sectionTitle && (
          <Text as="h2" variant="heading2xl" className="mb-12 text-center">
            {sectionTitle}
          </Text>
        )}

        {/* Section Description */}
        {sectionDescription && (
          <Text
            as="p"
            variant="headingLg"
            className="mb-12 text-center text-muted-foreground"
          >
            {sectionDescription}
          </Text>
        )}

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-primary" />
                  <Text className="mb-4 italic">{testimonial.quote}</Text>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="mr-4 rounded-full"
                    />
                    <div>
                      <Text className="font-semibold">
                        {testimonial.author}
                      </Text>
                      <Text className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Results Stats */}
        {resultsTitle && stats && stats.length > 0 && (
          <div className="mt-16 rounded-lg bg-primary/5 p-8">
            <Text as="h3" variant="headingXl" className="mb-6 text-center">
              {resultsTitle}
            </Text>
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <stat.icon className="mb-4 h-12 w-12 text-primary" />
                    <Text variant="headingLg" className="mb-2">
                      {stat.value}
                    </Text>
                    <Text className="text-muted-foreground">{stat.label}</Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Client Logos */}
        {clientLogos && clientLogos.length > 0 && (
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={100}
                    height={50}
                    className="opacity-50 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SocialProof;
