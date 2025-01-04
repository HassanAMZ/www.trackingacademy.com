import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

interface Bonus {
  title: string;
  description: string;
  value: string;
  icon: React.ComponentType<any>;
  image?: string;
  details?: string[]; // Additional details about the bonus
  features?: string[]; // Specific features or benefits of the bonus
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
    <section className="bg-gradient-to-b from-primary/5 to-background py-24">
      <Container className="flex w-full flex-col items-center space-y-16">
        {/* Header Section */}
        {sectionTitle && (
          <div className="max-w-3xl text-center">
            <Text as="h2" variant="heading2xl" className="mb-4">
              {sectionTitle}
            </Text>
            {sectionDescription && (
              <Text
                as="p"
                variant="headingMd"
                className="text-muted-foreground"
              >
                {sectionDescription}
              </Text>
            )}
          </div>
        )}

        {/* Bonuses List */}
        {bonuses && bonuses.length > 0 && (
          <div className="w-full space-y-12">
            {bonuses.map((bonus, index) => (
              <section
                key={index}
                className="rounded-lg bg-primary/5 px-4 py-16 shadow-md"
              >
                <Container>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Content Side */}
                    <div className="flex flex-col space-y-8">
                      <div className="flex h-full flex-col justify-between space-y-4">
                        {/* Title  */}
                        <Text
                          as="h3"
                          variant="heading2xl"
                          className="flex items-center"
                        >
                          <bonus.icon className="mr-4 h-12 w-12 text-primary" />
                          {bonus.title}
                        </Text>

                        {/* Description */}
                        <Text
                          as="p"
                          variant="headingLg"
                          className="text-muted-foreground"
                        >
                          {bonus.description}
                        </Text>

                        {/* Details List */}
                        {bonus.details && bonus.details.length > 0 && (
                          <div className="space-y-4">
                            <Text as="h4" variant="headingLg">
                              What's Included:
                            </Text>
                            <ul className="space-y-3">
                              {bonus.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                                  <Text as="span">{detail}</Text>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Features List */}
                        {bonus.features && bonus.features.length > 0 && (
                          <div className="space-y-4">
                            <Text as="h4" variant="headingLg">
                              Key Features:
                            </Text>
                            <ul className="space-y-3">
                              {bonus.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                                  <Text as="span">{feature}</Text>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* Value  */}

                        <div className="inline-block w-fit rounded-lg bg-background/80 p-4 backdrop-blur-sm">
                          <Text
                            as="p"
                            variant="heading2xl"
                            className="text-primary"
                          >
                            {bonus.value}
                            <span className="ml-2 text-lg font-normal text-muted-foreground">
                              Value
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    {bonus.image && (
                      <div className="flex items-center justify-center">
                        <Image
                          src={bonus.image}
                          alt={`${bonus.title} Visualization`}
                          width={1920}
                          height={1080}
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </Container>
              </section>
            ))}
          </div>
        )}

        {/* Total Value and CTA Section */}
        {totalBonusValue && (
          <section className="w-full rounded-lg bg-primary/10 px-4 py-16 text-center shadow-lg">
            <Container className="space-y-8">
              <Text as="h3" variant="heading2xl">
                Total Bonus Value: {totalBonusValue}
              </Text>

              {actionButtonText && actionButtonLink && (
                <Button
                  size="lg"
                  asChild
                  className="p-6 text-2xl font-semibold"
                >
                  <Link href={actionButtonLink}>
                    {actionButtonText}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              )}
            </Container>
          </section>
        )}
      </Container>
    </section>
  );
};

export default Bonuses;
