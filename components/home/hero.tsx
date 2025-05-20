import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Client } from "@/data/clients";
import { CheckCircle } from "lucide-react";
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
  clientCountText: string;
  clients: Client[];
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
  clientCountText,
  clients,
  customCtaButton,
}) => {
  return (
    <Container className="grid grid-cols-1 justify-center gap-4 md:items-center md:text-left lg:grid-cols-3 lg:py-8 ">
      <div className="space-y-5 lg:col-span-2">
        {eyebrow && <Badge>{eyebrow}</Badge>}
        {heading}
        {subheading && subheading}
        <div className="max-w-xl">{carousel && carousel}</div>

        <div className="grid max-w-xl grid-cols-1  justify-center gap-2 py-4 sm:grid-cols-2 md:items-start">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

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
            )}

        <div className="flex  justify-start gap-2">
          <div className="relative h-8 w-8">
            {clients.map((client, index) => (
              <Avatar
                key={index}
                className={`absolute left-${index * 4} top-0 z-${index + 1}`}
              >
                <AvatarImage
                  src={client.clientDetails.images[0].url}
                  alt={`@${client.clientDetails.name.toLowerCase().replace(" ", "-")}`}
                />
                <AvatarFallback>{client.clientDetails.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="pl-8 text-sm">{clientCountText}</p>
        </div>
      </div>

      {supportingComponent}
    </Container>
  );
};

export default Hero;
