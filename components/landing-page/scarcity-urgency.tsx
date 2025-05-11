import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";

interface ScarcityUrgencyProps {
  title?: string;
  description?: string;
  spotsLeft?: number;
  daysRemaining?: number;
  buttonText?: string;
  buttonLink?: string;
  iconSize?: number;
}

const ScarcityUrgency: React.FC<ScarcityUrgencyProps> = ({
  title,
  description,
  spotsLeft,
  daysRemaining,
  buttonText,
  buttonLink = "/contact", // Default fallback link
  iconSize = 12, // Default icon size
}) => {
  return (
    <Container className="flex items-center justify-center">
      <section className="bg-primary text-primary-foreground flex w-full flex-col items-center justify-center space-y-8 rounded-lg px-8 py-24 text-center">
        {/* Title Section */}
        {title && <h2 className="max-w-3xl">{title}</h2>}

        {/* Description Section */}
        {description && <h4 className="max-w-3xl">{description}</h4>}

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
            )}

            {daysRemaining !== undefined && (
              <div className="flex flex-col items-center">
                <Clock className={`mb-2 h-${iconSize} w-${iconSize}`} />
                <Text variant="headingXl" className="mb-1">
                  {daysRemaining}
                </Text>
                <Text>Days Remaining</Text>
              </div>
            )}
          </div>
        )} */}

        {/* Button Section */}
        {buttonText && (
          <Button
            size="lg"
            asChild
            className="bg-background text-primary hover:bg-background/90 p-8 text-lg whitespace-pre-wrap"
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </section>
    </Container>
  );
};

export default ScarcityUrgency;
