"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/ui/text";
import clients from "@/data/clients";
import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

interface TestimonialsCarouselProps {
  className?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  className,
}) => {
  const clientTestimonials = useMemo(
    () =>
      clients.map((client) => {
        const {
          resultDetails: { testimonial, roas, conversions },
          clientDetails: { name: clientName, position: clientTitle, images },
          businessDetails: { name: businessName },
        } = client;

        return {
          testimonialText: testimonial.content,
          clientName,
          clientTitle,
          businessName,
          imageLink: images?.[0]?.url || "/default-image.png", // Handle missing images
          roas: `${roas.value}${roas.symbol} ROAS`,
          conversions: `${conversions.value}${conversions.symbol} Conversions`,
        };
      }),
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % clientTestimonials.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [clientTestimonials.length]);

  const currentTestimonial = clientTestimonials[currentIndex];

  return (
    <Card
      className={clsx("relative bg-background/80 backdrop-blur-sm", className)}
    >
      <CardContent className="space-y-1 px-6 py-4">
        <div className="absolute -top-2 right-4 flex space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-yellow-300 stroke-yellow-300"
            />
          ))}
        </div>
        <Text as="p" variant="bodyMd" className="font-semibold italic">
          "{currentTestimonial.testimonialText}"
        </Text>
        <div className="flex items-center gap-2 pt-4">
          <Image
            src={currentTestimonial.imageLink}
            alt={`Client ${currentTestimonial.businessName}`}
            width={1920}
            height={1080}
            className="h-8 w-8 rounded-full"
            placeholder="blur"
            blurDataURL="/placeholder-image.png" // Optional placeholder image
          />
          <div className="text-left text-xs">
            <Text as="p" variant="bodySm">
              {currentTestimonial.clientName}
            </Text>
            <Text as="p" variant="bodySm">
              <strong>{currentTestimonial.clientTitle}</strong> at{" "}
              <strong>{currentTestimonial.businessName}</strong>
            </Text>
          </div>
        </div>
        <div className="absolute -bottom-3 right-2 flex rotate-3 space-x-2">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-semibold"
          >
            {currentTestimonial.roas}
          </Button>
        </div>
        <div className="absolute -bottom-3 right-28 flex -rotate-3 space-x-2">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-semibold"
          >
            {currentTestimonial.conversions}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCarousel;
