import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "next-view-transitions";
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
    <Container className="flex min-h-screen items-center justify-center">
      <section className="flex w-full flex-col items-center justify-center space-y-8 rounded-lg bg-primary px-8 py-24 text-center text-primary-foreground">
        {/* Title Section */}
        {title && (
          <Text as="h2" variant="heading2xl" className="max-w-3xl">
            {title}
          </Text>
        )}

        {/* Description Section */}
        {description && (
          <Text variant="headingLg" className="max-w-3xl">
            {description}
          </Text>
        )}

        {/* Spots and Days Remaining */}
        {(spotsLeft || daysRemaining) && (
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
        )}

        {/* Button Section */}
        {buttonText && (
          <Button
            size="lg"
            asChild
            className="bg-background text-primary hover:bg-background/90"
          >
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </section>
    </Container>
  );
};

export default ScarcityUrgency;
