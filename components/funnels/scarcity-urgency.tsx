import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";

interface ScarcityUrgencyProps {
  title?: string;
  description?: string;
  spotsLeft?: number;
  daysRemaining?: number;
  ctaButtonText?: string;
  subtextForButtonCta?: string;
  buttonLink?: string;
  supportingButtonText?: string; // New prop for supporting button text
  supportingButtonLink?: string; // New prop for supporting button link
  iconSize?: number;
}

const ScarcityUrgency: React.FC<ScarcityUrgencyProps> = ({
  title,
  description,
  spotsLeft,
  daysRemaining,
  ctaButtonText,
  subtextForButtonCta,
  buttonLink = "/contact", // Default fallback link
  supportingButtonText,
  supportingButtonLink,
  iconSize = 12, // Default icon size
}) => {
  return (
    <Container className="flex items-center justify-center">
      <section className="bg-primary text-primary-foreground flex w-full flex-col items-center justify-center space-y-8 rounded-lg px-8 py-24 text-center">
        {/* Title Section */}
        {title && <h2 className="max-w-3xl">{title}</h2>}{" "}
        {/* Description Section */}
        {description && <h4 className="max-w-3xl">{description}</h4>}{" "}
        {/* Spots and Days Remaining */}
        {/* {(spotsLeft || daysRemaining) && (
          <div className="flex justify-center gap-12">
            {spotsLeft !== undefined && (
              <div className="flex flex-col items-center">
                <Users className={`mb-2 h-${iconSize} w-${iconSize}`} />
                <Text variant="headingXl" className="mb-1">
                  {spotsLeft}
                </Text>
                <Text>Spots Left</Text>
              </div>
            )}        {daysRemaining !== undefined && (
              <div className="flex flex-col items-center">
                <Clock className={`mb-2 h-${iconSize} w-${iconSize}`} />
                <Text variant="headingXl" className="mb-1">
                  {daysRemaining}
                </Text>
                <Text>Days Remaining</Text>
              </div>
            )}
          </div>
        )} */}{" "}
        {/* Button Section */}
        <div className="flex max-w-xl items-center space-x-4">
          {ctaButtonText && (
            <Button
              asChild
              className="flex max-w-4xl flex-col items-center text-center font-bold lg:items-start lg:text-left mx-auto lg:mx-0 w-fit p-6 text-xl cursor-pointer"
            >
              <Link href={buttonLink}>
                <div>
                  {ctaButtonText}
                  {subtextForButtonCta && (
                    <span className="mt-2 block text-sm font-medium opacity-90">
                      {subtextForButtonCta}
                    </span>
                  )}
                </div>
              </Link>
            </Button>
          )}
          {supportingButtonText && supportingButtonLink && (
            <Button size="lg" asChild variant="ghost">
              <Link href={supportingButtonLink}>{supportingButtonText}</Link>
            </Button>
          )}
        </div>
      </section>
    </Container>
  );
};

export default ScarcityUrgency;
