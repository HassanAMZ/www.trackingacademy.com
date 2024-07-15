import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/ui/container";
import TypographyP from "@/components/ui/typography-p";
import TypographyH3 from "@/components/ui/typography-h3";

interface ClientTestimonialCardProps {
  client: {
    name: string;
    businessName: string;
  };
  category?: string;
  cms?: string;
  businessDetails: string;
  imageUrl: string;
  results: string;
}

const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({
  client,
  category,
  cms,
  businessDetails,
  imageUrl,
  results,
}) => {
  return (
    <React.Fragment>
      <div className="space-y-4 pb-2">
        <TypographyP>
          <span className="text-primary">
            {client.businessName} ({category}: {cms})
          </span>
          <span>: {businessDetails}</span>
        </TypographyP>
        <div className="overflow-hidden rounded-md border border-secondary bg-secondary object-contain shadow-md filter">
          <Image
            src={imageUrl}
            alt={`Client ${client.name}`}
            width={1920}
            height={1080}
            className="aspect-video"
          />
        </div>

        <TypographyP>
          <span className="text-primary">Results:&nbsp;</span>
          <span>"{results}"</span>
        </TypographyP>
      </div>
      <Separator />
    </React.Fragment>
  );
};

export default ClientTestimonialCard;
