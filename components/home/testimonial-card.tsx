import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Text from "@/components/ui/text";
import { Card, CardContent } from "../ui/card";

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
    <Card className="max-w-4xl w-full mx-auto">
      <CardContent>
        <div className="space-y-4 py-4">
          <Text as="p" variant="bodyMd">
            <span className="text-primary">
              {client.businessName} ({category}: {cms})
            </span>
            <span>: {businessDetails}</span>
          </Text>
          <div className="overflow-hidden rounded-md border border-secondary bg-secondary object-contain shadow filter">
            <Image
              src={imageUrl}
              alt={`Client ${client.name}`}
              width={1920}
              height={1080}
              className="aspect-video"
            />
          </div>

          <Text as="p" variant="bodyMd">
            <span className="text-primary">Client's Feedback:&nbsp;</span>
            <span>"{results}"</span>
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientTestimonialCard;
