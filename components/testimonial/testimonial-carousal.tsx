"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/data/testimonials";

const TestimonialsCarousel: React.FC<{ className?: string }> = ({
  className,
}) => {
  const generateRandomMetrics = () => {
    const randomConversions = Math.floor(Math.random() * 9) * 5 + 27;
    const randomROAS = Math.floor(Math.random() * 9) * 4 + 14;
    return { conversions: randomConversions, roas: randomROAS };
  };

  const clientTestimonials = useMemo(
    () =>
      testimonials.map((testimonial) => ({
        ...testimonial,
        ...generateRandomMetrics(),
      })),
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
      className={clsx(
        "bg-background/80 relative h-48 backdrop-blur-xs",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col px-6 py-4">
        {/* Stars */}
        <div className="absolute -top-2 right-4 flex space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-yellow-300 stroke-yellow-300"
            />
          ))}
        </div>

        {/* Quote */}
        <div className="flex grow items-center justify-center">
          <p className="line-clamp-3 font-semibold italic">
            "{currentTestimonial.quote}"
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-2">
          <div className="bg-primary mr-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
            {currentTestimonial.author[0].toUpperCase()}
          </div>
          <div className="text-left text-xs">
            <p>
              {currentTestimonial.author}

              {/* <strong>{currentTestimonial.role}</strong> */}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="absolute right-2 -bottom-3 flex rotate-3 space-x-2">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-semibold"
          >
            +{currentTestimonial.roas}% ROAS
          </Button>
        </div>
        <div className="absolute right-28 -bottom-3 flex -rotate-3 space-x-2">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-semibold"
          >
            +{currentTestimonial.conversions}% Conversions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCarousel;
