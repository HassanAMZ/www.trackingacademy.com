import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Client } from "@/data/clients";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  carousel: ReactNode;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  supportingComponent: ReactNode;
  clientCountText: string;
  clients: Client[];
}

const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  carousel,
  benefits,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  supportingComponent,
  clientCountText,
  clients,
}) => {
  return (
    <Container className="grid grid-cols-1 items-start justify-center gap-4 text-left lg:grid-cols-3 lg:py-8">
      <div className="space-y-5 lg:col-span-2">
        {heading}
        {subheading && subheading}
        {carousel && carousel}

        <div className="grid max-w-xl grid-cols-1 gap-2 py-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          {secondaryCtaLink && (
            <Button asChild variant="outline">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>

        <div className="flex items-center justify-start gap-2">
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
