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
  supportingButtonText?: string;
  supportingButtonLink?: string;
  iconSize?: number;
  customButton?: React.ReactElement; // 👈 NEW PROP
}

const ScarcityUrgency: React.FC<ScarcityUrgencyProps> = ({
  title,
  description,
  spotsLeft,
  daysRemaining,
  ctaButtonText,
  subtextForButtonCta,
  buttonLink = "/contact",
  supportingButtonText,
  supportingButtonLink,
  iconSize = 12,
  customButton,
}) => {
  return (
    <Container className="flex min-h-[50vh] items-center justify-center pb-12">
      <section className="flex w-full flex-col items-center justify-center space-y-8 rounded-lg bg-primary px-8 py-24 text-center text-primary-foreground">
        {/* Title */}
        {title && <h2 className="max-w-3xl">{title}</h2>}

        {/* Description */}
        {description && <h4 className="max-w-3xl">{description}</h4>}

        {/* CTA Buttons */}
        <div className="flex max-w-xl items-center space-x-4">
          {customButton ? (
            <div>{customButton}</div> // 👈 Render custom button if passed
          ) : (
            ctaButtonText && (
              <Button
                asChild
                variant="outline"
                className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold text-primary lg:mx-0 lg:items-start lg:text-left"
              >
                <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
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
            )
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
