import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
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
    <section className="from-primary/5 to-background bg-linear-to-b py-24">
      <Container className="text-center">
        {/* Heading */}
        {heading && <h2 className="mb-4">{heading}</h2>}

        {/* Subheading */}
        {subheading && (
          <h4 className="text-muted-foreground mb-8">{subheading}</h4>
        )}

        {/* List Items */}
        {listItems && listItems.length > 0 && (
          <div className="grid place-content-center">
            <ul className="mb-8 grid grid-cols-2 gap-5 text-left">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <CheckCircle className="text-primary mr-2 h-5 w-5" />
                  {item}
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
            className="hover:bg-primary/90 p-8 text-lg whitespace-pre-wrap"
          >
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}

        {/* Footer Text */}
        {footerText && (
          <p className="text-muted-foreground py-4">{footerText}</p>
        )}
      </Container>
    </section>
  );
};

export default DetailedCTA;
