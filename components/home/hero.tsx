import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { CheckCircle, Star } from "lucide-react";
import TrackingTable from "../global/tracking-table";
import TestimonialsCarousel2 from "../for-freelancers/testimonials-carousal-2";
import { Client } from "@/data/clients";

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
    <Container className="grid-cols-1 items-start justify-center gap-4 text-left grid lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-5">
        {heading}
        {subheading && subheading}
        {carousel && carousel}

        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <Text as="p" variant="bodyMd" applyMargin={false} className="">
                {benefit}
              </Text>
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
                key={client.clientDetails.name}
                className={`absolute left-${index * 4} top-0 z-${index + 1}`}
              >
                <AvatarImage
                  src={client.clientDetails.images[0].url}
                  alt={`@${client.clientDetails.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                />
                <AvatarFallback>{client.clientDetails.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Text as="p" variant="bodyMd" className="pl-8 text-sm">
            {clientCountText}
          </Text>
        </div>
      </div>

      {supportingComponent}
    </Container>
  );
};

export default Hero;
