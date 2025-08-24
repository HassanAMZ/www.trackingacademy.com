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
  customButton?: React.ReactElement; // 👈 NEW PROP
}

const DetailedCTA: React.FC<DetailedCTAProps> = ({
  heading,
  subheading,
  listItems,
  buttonText,
  buttonLink,
  footerText,
  customButton,
}) => {
  return (
    <section className="bg-linear-to-b from-primary/5 to-background py-24">
      <Container className="grid place-content-center text-center">
        {/* Heading */}
        {heading && <h2 className="mb-4">{heading}</h2>}

        {/* Subheading */}
        {subheading && <h4 className="mb-8 text-muted-foreground">{subheading}</h4>}

        {/* List Items */}
        {listItems && listItems.length > 0 && (
          <div className="grid place-content-center">
            <ul className="mb-8 grid grid-cols-2 gap-5 text-left">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Button or Custom Button */}
        {customButton ? (
          <React.Fragment>{customButton}</React.Fragment> //
        ) : buttonText && buttonLink ? (
          <Button size="lg" asChild className="p-8 text-lg whitespace-pre-wrap hover:bg-primary/90">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : null}

        {/* Footer Text */}
        {footerText && <p className="py-4 text-muted-foreground">{footerText}</p>}
      </Container>
    </section>
  );
};

export default DetailedCTA;
