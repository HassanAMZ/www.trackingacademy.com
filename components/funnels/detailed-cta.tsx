import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

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
    <section className="from-primary/5 to-background bg-linear-to-b py-24">
      <Container className="grid place-content-center text-center">
        {/* Heading */}
        {heading && <h2 className="mb-4">{heading}</h2>}

        {/* Subheading */}
        {subheading && <h4 className="text-muted-foreground mb-8">{subheading}</h4>}

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

        {/* Button or Custom Button */}
        {customButton ? (
          <React.Fragment>{customButton}</React.Fragment> //
        ) : buttonText && buttonLink ? (
          <Button size="lg" asChild className="hover:bg-primary/90 p-8 text-lg whitespace-pre-wrap">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : null}

        {/* Footer Text */}
        {footerText && <p className="text-muted-foreground py-4">{footerText}</p>}
      </Container>
    </section>
  );
};

export default DetailedCTA;
