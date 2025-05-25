import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { caseStudies as CaseStudies, CaseStudy } from "@/data/case-studies";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Badge } from "../ui/badge";

interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  eyebrow?: string;
  carousel: ReactNode;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  supportingComponent: ReactNode;
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
      <span>4.9 from 200 reviews || 1,000+ Websites Configured.</span>
    </div>
  ),
  caseStudies = CaseStudies,
  customCtaButton,
}) => {
  return (
    <Container className="grid grid-cols-1 items-center justify-center gap-4 py-8 lg:grid-cols-3 lg:items-start lg:text-left">
      <div className="flex flex-col space-y-5 lg:col-span-2">
        {eyebrow && (
          <Badge variant={"outline"} className="mx-auto w-fit lg:mx-0">
            {eyebrow}
          </Badge>
        )}
        {heading}
        {subheading && subheading}
        <div className="mx-auto max-w-2xl lg:mx-0">
          {carousel && carousel}
        </div>{" "}
        <div className="grid grid-cols-2 justify-center gap-2 py-4 md:grid-cols-3 md:items-start">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 lg:justify-start"
            >
              <CheckCircle className="text-primary h-5 w-5" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>{" "}
        {/* CTA Section */}
        {customCtaButton
          ? customCtaButton
          : ctaText &&
            ctaLink && (
              <div className="flex gap-4">
                <Button asChild>
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
                {secondaryCtaLink && secondaryCtaText && (
                  <Button asChild variant="outline">
                    <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                  </Button>
                )}
              </div>
            )}{" "}
        <div className="flex flex-col items-center gap-4 pt-2 lg:flex-row">
          <div className="flex items-center">
            {[8, 9, 10, 12, 19, 14].map((i, index) => {
              const study = caseStudies[i];
              return (
                <Link
                  href={`/case-study/${study.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={study.id}
                  className={`relative z-[${10 - index}]`}
                  style={{ marginLeft: index === 0 ? 0 : "-25px" }} // overlap
                >
                  <Avatar className="border-primary-foreground h-16 w-16 border-2">
                    <AvatarImage
                      src={study.testimonial.image}
                      alt={`@${study.testimonial.author}`}
                    />
                    <AvatarFallback>
                      {study.testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              );
            })}
          </div>
          <div className="text-sm">{clientCountText}</div>
        </div>
      </div>{" "}
      {supportingComponent}
    </Container>
  );
};

export default Hero;
