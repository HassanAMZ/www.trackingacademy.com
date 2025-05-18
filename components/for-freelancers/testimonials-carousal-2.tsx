"use client";

import { Button } from "@/components/ui/button";
import clients from "@/data/clients";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

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
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % clientTestimonials.length,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [clientTestimonials.length]);

  const currentTestimonial = clientTestimonials[currentIndex];

  return (
    <div className="relative mx-auto max-w-xl space-y-1 rounded-lg border px-6 py-2 shadow-sm md:mx-0">
      <div className="absolute -top-4 right-0 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="font-semibold italic">
        "{currentTestimonial.testimonialText}"
      </p>
      <p className="pb-2 text-xs">
        {currentTestimonial.clientName},{" "}
        <strong>{currentTestimonial.clientTitle}</strong> at{" "}
        <strong>{currentTestimonial.businessName}</strong>
      </p>
      <div className="absolute right-0 -bottom-4 mr-2 mb-2 flex space-x-4">
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
