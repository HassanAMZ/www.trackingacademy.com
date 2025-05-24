import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="from-primary/5 to-background bg-linear-to-b py-24">
      <Container className="flex w-full flex-col items-center space-y-16">
        {/* Header Section */}
        {sectionTitle && (
          <div className="max-w-3xl text-center">
            <h2 className="mb-4">{sectionTitle}</h2>
            {sectionDescription && (
              <p className="text-muted-foreground">{sectionDescription}</p>
            )}
          </div>
        )}{" "}
        {/* Bonuses List */}
        {bonuses && bonuses.length > 0 && (
          <div className="w-full space-y-12">
            {bonuses.map((bonus, index) => (
              <section
                key={index}
                className="bg-primary/5 rounded-lg px-4 py-16 shadow-md"
              >
                <Container>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Content Side */}
                    <div className="flex flex-col space-y-8">
                      <div className="flex h-full flex-col justify-between space-y-4">
                        {/* Title  */}
                        <h3 className="flex items-center">
                          <bonus.icon className="text-primary mr-4 h-12 w-12" />
                          {bonus.title}
                        </h3>{" "}
                        {/* Description */}
                        <p className="text-muted-foreground">
                          {bonus.description}
                        </p>{" "}
                        {/* Details List */}
                        {bonus.details && bonus.details.length > 0 && (
                          <div className="space-y-4">
                            <h4>What's Included:</h4>
                            <ul className="space-y-3">
                              {bonus.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="text-primary mt-1 mr-2 h-6 w-6 shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}{" "}
                        {/* Features List */}
                        {bonus.features && bonus.features.length > 0 && (
                          <div className="space-y-4">
                            <h4>Key Features:</h4>
                            <ul className="space-y-3">
                              {bonus.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="text-primary mt-1 mr-2 h-6 w-6 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* Value  */}{" "}
                        <div className="bg-background/80 inline-block w-fit rounded-lg p-4 backdrop-blur-xs">
                          <p className="text-primary">
                            {bonus.value}
                            <span className="text-muted-foreground ml-2 text-lg font-normal">
                              Value
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>{" "}
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
        )}{" "}
        {/* Total Value and CTA Section */}
        {totalBonusValue && (
          <section className="bg-primary/10 w-full rounded-lg px-4 py-16 text-center shadow-lg">
            <Container className="space-y-8">
              <h3>Total Bonus Value: {totalBonusValue}</h3>{" "}
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
