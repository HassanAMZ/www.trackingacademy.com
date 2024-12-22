'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/ui/text';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import clients from '@/data/clients';
import Image from 'next/image';

const TestimonialsCarousel: React.FC = () => {
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
          imageLink: images?.[0]?.url || '/default-image.png', // Handle missing images
          roas: `${roas.value}${roas.symbol} ROAS`,
          conversions: `${conversions.value}${conversions.symbol} Conversions`,
        };
      }),
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [clientTestimonials.length]);

  const currentTestimonial = clientTestimonials[currentIndex];

  return (
    <div className="relative space-y-1 rounded-lg border bg-card px-6 py-4">
      <div className="absolute -top-4 right-0 flex space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} fill="gold" stroke="gold" />
        ))}
      </div>
      <Text as="p" variant="bodyMd" applyMargin={false} className="font-semibold italic">
        "{currentTestimonial.testimonialText}"
      </Text>
      <div className="flex items-center gap-2 pt-4 text-left">
        <Image
          src={currentTestimonial.imageLink}
          alt={`Client ${currentTestimonial.businessName}`}
          width={1920}
          height={1080}
          className="h-8 w-8 rounded-full"
          placeholder="blur"
          blurDataURL="/placeholder-image.png" // Optional placeholder image
        />
        <div className="text-xs">
          <Text as="p" variant="bodySm" applyMargin={false}>
            {currentTestimonial.clientName}
          </Text>
          <Text as="p" variant="bodySm" applyMargin={false}>
            <strong>{currentTestimonial.clientTitle}</strong> at{' '}
            <strong>{currentTestimonial.businessName}</strong>
          </Text>
        </div>
      </div>
      <div className="absolute -bottom-4 right-0 mb-2 mr-2 flex space-x-4">
        <Button
          variant="outline"
          className="m-0 h-max rotate-3 transform rounded-lg p-1 text-sm font-semibold"
        >
          {currentTestimonial.roas}
        </Button>
        <Button
          variant="outline"
          className="m-0 h-max -rotate-3 transform rounded-lg p-1 text-sm font-semibold"
        >
          {currentTestimonial.conversions}
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
