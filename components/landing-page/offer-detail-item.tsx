import Container from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

// TypeScript interfaces for props
interface OfferItem {
  title?: string;
  description?: string;
  icon?: React.ComponentType<any>;
  benefits?: string[];
  image?: string;
  price?: string;
}

interface OfferDetailsProps {
  headerTitle?: string;
  headerDescription?: string;
  offerItems?: OfferItem[];
}

const OfferDetails: React.FC<OfferDetailsProps> = ({
  headerTitle,

  headerDescription,
  offerItems = [],
}) => {
  return (
    <section className="py-24">
      <Container className="flex w-full flex-col items-center space-y-16">
        {/* Render the header if headerTitle and headerDescription exist */}
        {headerTitle && (
          <div className="max-w-3xl text-center">
            <h2 className="mb-4">{headerTitle}</h2>
            {headerDescription && (
              <h4 className="text-muted-foreground">{headerDescription}</h4>
            )}
          </div>
        )}

        {/* Render each offer item dynamically */}
        {offerItems.length > 0 &&
          offerItems.map((item, index) => (
            <section
              key={index}
              className={`rounded-lg bg-primary/5 px-4 py-20 shadow-md`}
            >
              <Container className="grid grid-cols-1 items-center justify-between gap-6 md:grid-cols-2">
                <div className="space-y-5">
                  {item.title && (
                    <h2 className="flex items-center">
                      {item.icon && <item.icon className="mr-4 h-12 w-12" />}
                      {item.title}
                    </h2>
                  )}
                  {item.description && <p>{item.description}</p>}
                  {item.benefits && item.benefits.length > 0 && (
                    <div className="space-y-4">
                      {item.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="mr-2 mt-1 h-6 w-6 shrink-0 stroke-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.price && (
                    <h3>
                      Total Value:
                      <span className="mx-2 rounded-lg bg-primary p-2 text-secondary">
                        {item.price}
                      </span>
                    </h3>
                  )}
                </div>

                {/* Render the image if image exists */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`${item.title} Visualization`}
                    width={1920}
                    height={1080}
                    className="w-full rounded-lg"
                  />
                )}
              </Container>
            </section>
          ))}
      </Container>
    </section>
  );
};

export default OfferDetails;
