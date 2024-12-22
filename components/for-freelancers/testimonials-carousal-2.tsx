'use client';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import clients from '@/data/clients';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const TestimonialsCarousel2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clientTestimonials = clients.map((client) => {
    const { resultDetails, clientDetails, businessDetails } = client;
    const testimonial = resultDetails.testimonial;

    return {
      testimonialText: testimonial.content,
      clientName: clientDetails.name,
      clientTitle: clientDetails.position,
      businessName: businessDetails.name,
      roas: `${resultDetails.roas.value}${resultDetails.roas.symbol} ROAS`,
      conversions: `${resultDetails.conversions.value}${resultDetails.conversions.symbol} Conversions`,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientTestimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [clientTestimonials.length]);

  const currentTestimonial = clientTestimonials[currentIndex];

  return (
    <div className="relative max-w-xl space-y-1 rounded-lg border px-6 py-2 shadow">
      <div className="absolute -top-4 right-0 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <Text as="p" variant="bodyMd" className="font-semibold italic">
        "{currentTestimonial.testimonialText}"
      </Text>
      <Text as="p" variant="bodyMd" className="pb-2 text-xs">
        {currentTestimonial.clientName}, <strong>{currentTestimonial.clientTitle}</strong> at{' '}
        <strong>{currentTestimonial.businessName}</strong>
      </Text>
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

export default TestimonialsCarousel2;
