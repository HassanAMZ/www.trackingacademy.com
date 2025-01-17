import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";

interface DetailedCTAProps {
  heading?: string;
  subheading?: string;
  listItems?: string[];
  buttonText?: string;
  buttonLink?: string;
  footerText?: string;
}

const DetailedCTA: React.FC<DetailedCTAProps> = ({
  heading,
  subheading,
  listItems,
  buttonText,
  buttonLink,
  footerText,
}) => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-24">
      <Container className="text-center">
        {/* Heading */}
        {heading && <h2>{heading}</h2>}

        {/* Subheading */}
        {subheading && <p className="mb-8">{subheading}</p>}

        {/* List Items */}
        {listItems && listItems.length > 0 && (
          <div className="grid place-content-center">
            <ul className="mb-8 grid grid-cols-2 text-left">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Button */}
        {buttonText && buttonLink && (
          <Button
            size="lg"
            asChild
            className="whitespace-pre-wrap p-8 text-lg hover:bg-primary/90"
          >
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}

        {/* Footer Text */}
        {footerText && (
          <p className="py-4 text-muted-foreground">{footerText}</p>
        )}
      </Container>
    </section>
  );
};

export default DetailedCTA;
