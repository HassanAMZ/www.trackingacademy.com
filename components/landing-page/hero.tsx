import YoutubeEmbed from "@/components/global/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import {
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
  ArrowRightFromLine,
  ArrowRightSquare,
  ArrowUp01,
} from "lucide-react";
import { Link } from "next-view-transitions";
import React, { ReactNode } from "react";
import TestimonialsCarousel from "../offers/offer-002/testimonial-carousal";

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
    <section className="grid min-h-screen place-content-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="flex flex-col items-center justify-center space-y-8 py-12 text-center">
        {badgeText && <Badge variant="outline">{badgeText}</Badge>}
        {headingText && (
          <Text as="h1" variant="heading3xl" className="max-w-5xl">
            {headingText}
          </Text>
        )}
        {subheadingText && (
          <Text
            as="h2"
            variant="headingMd"
            className="max-w-4xl text-muted-foreground"
          >
            {subheadingText}
          </Text>
        )}

        <div className="flex items-center space-x-4">
          {ctaButtonText && ctaButtonLink && (
            <Button size="lg" asChild>
              <Link href={ctaButtonLink}>
                {ctaButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {supportingButtonText && supportingButtonLink && (
            <Button size="lg" asChild variant="ghost">
              <Link href={supportingButtonLink}>{supportingButtonText}</Link>
            </Button>
          )}
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
