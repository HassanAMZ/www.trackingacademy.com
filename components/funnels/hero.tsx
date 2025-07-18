import YoutubeEmbed from "@/components/global/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React, { ReactNode } from "react";

interface HeroProps {
  badgeText?: string;
  headingText?: ReactNode;
  subheadingText?: ReactNode;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  subtextForButtonCta?: string; // New prop for button subtext
  supportingButtonText?: string;
  supportingButtonLink?: string;
  youtubeEmbedId?: string;
  supportingComponent?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  badgeText,
  headingText,
  subheadingText,
  ctaButtonText,
  ctaButtonLink,
  subtextForButtonCta,
  supportingButtonText,
  supportingButtonLink,
  youtubeEmbedId,
  supportingComponent,
}) => {
  return (
    <section className="grid place-content-center py-12">
      <Container className="flex flex-col items-center justify-center space-y-8 text-center">
        {badgeText && (
          <Badge variant="outline" className="text-destructive">
            {badgeText}
          </Badge>
        )}
        {headingText && (
          <div className="max-w-6xl">
            {typeof headingText === "string" ? <h1>{headingText}</h1> : headingText}
          </div>
        )}
        {subheadingText && (
          <div className="max-w-4xl text-muted-foreground">
            {typeof subheadingText === "string" ? <h4>{subheadingText}</h4> : subheadingText}
          </div>
        )}{" "}
        <div className="w-full">
          {youtubeEmbedId && <YoutubeEmbed className="max-w-4xl" embedId={youtubeEmbedId} />}
        </div>{" "}
        <div className="flex max-w-xl items-center space-x-4">
          {ctaButtonText && ctaButtonLink && (
            <Button
              asChild
              size={"lg"}
              className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold lg:mx-0 lg:items-start lg:text-left"
            >
              <Link href={ctaButtonLink}>
                <div>
                  <h3>{ctaButtonText}</h3>
                  {subtextForButtonCta && <p className="opacity-80">{subtextForButtonCta}</p>}
                </div>
              </Link>
            </Button>
          )}
          {/* {supportingButtonText && supportingButtonLink && (
            <Button size="lg" asChild variant="ghost">
              <Link href={supportingButtonLink}>{supportingButtonText}</Link>
            </Button>
          )} */}
        </div>
      </Container>
      <div className="w-full overflow-hidden py-12">{supportingComponent}</div>
    </section>
  );
};

export default Hero;
