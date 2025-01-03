import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

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
        {heading && (
          <Text as="h2" variant="heading2xl" className="mb-6">
            {heading}
          </Text>
        )}

        {/* Subheading */}
        {subheading && (
          <Text variant="headingLg" className="mb-8" as="p">
            {subheading}
          </Text>
        )}

        {/* List Items */}
        {listItems && listItems.length > 0 && (
          <div className="grid place-content-center">
            <ul className="mb-8 grid grid-cols-2 text-left">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Button */}
        {buttonText && buttonLink && (
          <Button size="lg" asChild className="mb-4">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}

        {/* Footer Text */}
        {footerText && (
          <Text as="p" className="text-muted-foreground">
            {footerText}
          </Text>
        )}
      </Container>
    </section>
  );
};

export default DetailedCTA;
