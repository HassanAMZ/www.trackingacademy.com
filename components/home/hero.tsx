import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { caseStudies as CaseStudies, CaseStudy } from "@/data/case-studies";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "../animate-ui/avatar-group-mask";
import { Badge } from "../ui/badge";

interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  eyebrow?: ReactNode;
  carousel?: ReactNode;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  supportingComponent?: ReactNode;
  clientCountText?: ReactNode;
  caseStudies?: CaseStudy[];
  customCtaButton?: ReactNode;
}

const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  eyebrow,
  carousel,
  benefits,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  supportingComponent,
  clientCountText = (
    <div className="flex flex-col items-center gap-2 lg:items-start">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <h4 className="text-muted-foreground text-sm">
        4.9 from 200+ reviews <br /> 1,000+ Websites Audited Optimized
      </h4>
    </div>
  ),
  caseStudies = CaseStudies,
  customCtaButton,
}) => {
  // Determine layout classes based on whether supportingComponent exists
  const containerClasses = supportingComponent
    ? "grid grid-cols-1 items-center justify-center gap-4 py-8 lg:grid-cols-3 lg:items-start lg:text-left"
    : "flex flex-col items-center justify-center gap-4 py-8 text-center";

  const contentClasses = supportingComponent
    ? "flex flex-col space-y-5 lg:col-span-2"
    : "flex flex-col space-y-5 items-center max-w-5xl";

  const badgeClasses = supportingComponent
    ? "mx-auto w-fit lg:mx-0"
    : "mx-auto w-fit";

  const carouselClasses = supportingComponent
    ? "mx-auto w-full max-w-2xl lg:mx-0"
    : "mx-auto w-full max-w-3xl";

  const benefitsClasses = supportingComponent
    ? "mx-auto grid grid-cols-3 justify-center gap-2 py-4 md:grid-cols-3 md:items-start lg:mx-0 max-w-2xl"
    : "grid grid-cols-3 justify-center gap-2 py-4 md:grid-cols-3 md:items-start max-w-4xl";

  const benefitItemClasses = supportingComponent
    ? "flex items-center justify-center gap-2 lg:justify-start flex-col sm:flex-row"
    : "flex items-center justify-center gap-2 flex-col sm:flex-row";

  const ctaClasses = supportingComponent
    ? "flex gap-4"
    : "flex gap-4 justify-center";

  const clientSectionClasses = supportingComponent
    ? "flex flex-col items-center gap-4 pt-2 lg:flex-row"
    : "flex flex-col items-center gap-4 pt-2";

  const clientCountClasses = supportingComponent ? (
    clientCountText
  ) : (
    <div className="flex flex-col items-center gap-2">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <h4 className="text-muted-foreground text-sm">
        4.9 from 200+ reviews <br /> 1,000+ Websites Audited Optimized
      </h4>
    </div>
  );

  return (
    <Container className={containerClasses}>
      <div className={contentClasses}>
        {eyebrow && (
          <Badge variant={"outline"} className={badgeClasses}>
            {eyebrow}
          </Badge>
        )}
        {heading}
        {subheading && subheading}
        {carousel && <div className={carouselClasses}>{carousel}</div>}

        {/* CTA Section */}
        {customCtaButton
          ? customCtaButton
          : ctaText &&
            ctaLink && (
              <div className={ctaClasses}>
                <Button asChild>
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
                {secondaryCtaLink && secondaryCtaText && (
                  <Button asChild variant="outline">
                    <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                  </Button>
                )}
              </div>
            )}

        <div className={benefitsClasses}>
          {benefits.map((benefit, index) => (
            <div key={index} className={benefitItemClasses}>
              <CheckCircle className="text-primary h-5 w-5" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <div className={clientSectionClasses}>
          <div className="flex items-center">
            <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
              <div className="rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-1.5 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
                <AvatarGroup>
                  {[8, 9, 17, 10, 12, 19, 14].map((i, index) => {
                    const study = caseStudies[i];
                    return (
                      <Link
                        href={`/case-study/${study.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={study.id}
                      >
                        <Avatar>
                          <AvatarImage
                            src={study.testimonial.image}
                            alt={`@${study.testimonial.author}`}
                          />
                          <AvatarFallback>
                            {study.testimonial.author[0]}
                          </AvatarFallback>
                          <AvatarGroupTooltip>
                            <p> {study.testimonial.author}</p>
                          </AvatarGroupTooltip>
                        </Avatar>
                      </Link>
                    );
                  })}
                </AvatarGroup>
              </div>
            </div>
          </div>

          {supportingComponent ? clientCountText : clientCountClasses}
        </div>
      </div>

      {supportingComponent}
    </Container>
  );
};

export default Hero;
