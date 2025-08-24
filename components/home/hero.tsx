import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { caseStudies as CaseStudies, CaseStudy } from "@/data/case-studies";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import Image from "next/image";
import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/avatar-group";
import { Badge } from "../ui/badge";

interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  testimonialImages?: boolean;
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
  testimonialImages = true,
  eyebrow,
  carousel,
  benefits,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  supportingComponent,
  clientCountText,
  caseStudies = CaseStudies,
  customCtaButton,
}) => {
  return (
    <Container
      className={
        supportingComponent
          ? "grid grid-cols-1 items-center justify-center gap-4 py-8 lg:grid-cols-3 lg:items-start lg:text-left"
          : "flex flex-col items-center justify-center gap-4 py-8 text-center"
      }
    >
      <div
        className={
          supportingComponent
            ? "flex flex-col space-y-5 lg:col-span-2"
            : "flex max-w-5xl flex-col items-center space-y-5"
        }
      >
        {eyebrow && (
          <Badge
            variant="outline"
            className={supportingComponent ? "mx-auto w-fit lg:mx-0" : "mx-auto w-fit"}
          >
            {eyebrow}
          </Badge>
        )}

        {heading}

        {subheading && subheading}

        {carousel && (
          <div
            className={
              supportingComponent ? "mx-auto w-full max-w-2xl lg:mx-0" : "mx-auto w-full max-w-3xl"
            }
          >
            {carousel}
          </div>
        )}

        {/* CTA Section */}
        {customCtaButton
          ? customCtaButton
          : ctaText &&
            ctaLink && (
              <div
                className={
                  supportingComponent ? "flex gap-4" : "flex justify-center gap-4 lg:justify-start"
                }
              >
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

        <div
          className={
            supportingComponent
              ? "mx-auto grid max-w-3xl grid-cols-3 justify-center gap-2 py-4 lg:mx-0 lg:grid-cols-3 lg:items-start"
              : "grid max-w-4xl grid-cols-3 justify-center gap-2 py-4 lg:grid-cols-3 lg:items-start"
          }
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={
                supportingComponent
                  ? "flex flex-col items-center justify-center gap-2 text-center text-sm lg:flex-row lg:justify-start lg:text-left"
                  : "flex flex-col items-center justify-center gap-2 text-center text-sm lg:flex-row lg:text-left"
              }
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
        {testimonialImages && (
          <div
            className={
              supportingComponent
                ? "flex flex-col items-center gap-4 pt-2 lg:flex-row"
                : "flex flex-col items-center gap-4 pt-2"
            }
          >
            <div className="flex items-center">
              <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
                <div className="rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-1.5 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
                  <AvatarGroup>
                    {[0, 1, 2, 3, 4, 5, 6].map((i, index) => {
                      const study = caseStudies[i];
                      return (
                        <Link href={`/case-study/${study.id}`} key={study.id}>
                          <Avatar>
                            <Image
                              src={study.testimonial.image}
                              alt={`@${study.testimonial.author}`}
                              width={1080}
                              height={1080}
                              className="aspect-square size-full object-cover"
                            />
                            <AvatarFallback>{study.testimonial.author[0]}</AvatarFallback>
                            <AvatarGroupTooltip>
                              <p>{study.testimonial.author}</p>
                            </AvatarGroupTooltip>
                          </Avatar>
                        </Link>
                      );
                    })}
                  </AvatarGroup>
                </div>
              </div>
            </div>

            {clientCountText ? (
              clientCountText
            ) : (
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h4 className="text-sm text-muted-foreground">
                  4.9 from 300+ reviews <br /> 1,000+ Websites Tracked
                </h4>
              </div>
            )}
          </div>
        )}
      </div>

      {supportingComponent}
    </Container>
  );
};

export default Hero;
