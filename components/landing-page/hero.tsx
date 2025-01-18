import YoutubeEmbed from "@/components/global/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

import { Link } from "next-view-transitions";
import React, { ReactNode } from "react";

interface HeroProps {
  badgeText?: string;
  headingText?: string;
  subheadingText?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
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
  supportingButtonText,
  supportingButtonLink,
  ctaButtonLink,
  youtubeEmbedId,
  supportingComponent,
}) => {
  return (
    <section className="grid place-content-center overflow-hidden py-16">
      <Container className="flex flex-col items-center justify-center space-y-8 text-center">
        {badgeText && <Badge variant="outline">{badgeText}</Badge>}
        {headingText && <h1 className="max-w-6xl">{headingText}</h1>}
        {subheadingText && (
          <h3 className="max-w-4xl text-muted-foreground">{subheadingText}</h3>
        )}

        <div className="flex max-w-xl items-center space-x-4">
          {ctaButtonText && ctaButtonLink && (
            <Button
              size="lg"
              asChild
              className="whitespace-pre-wrap p-8 text-lg hover:bg-primary/90"
            >
              <Link href={ctaButtonLink}>{ctaButtonText}</Link>
            </Button>
          )}
          {/* {supportingButtonText && supportingButtonLink && (
            <Button size="lg" asChild variant="ghost">
              <Link href={supportingButtonLink}>{supportingButtonText}</Link>
            </Button>
          )} */}
        </div>

        <div className="w-full">
          {supportingComponent ||
            (youtubeEmbedId && <YoutubeEmbed embedId={youtubeEmbedId} />)}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
