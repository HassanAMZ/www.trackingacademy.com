"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/ui/text";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import clients from "@/data/clients";
import {
  containerVariants,
  itemVariants,
  MotionButton,
  MotionDiv,
  MotionText,
} from "@/utils/framerMotion";

interface Testimonial {
  testimonialText: string;
  clientName: string;
  clientTitle: string;
  businessName: string;
  roas: string;
  conversions: string;
}

const clientTestimonials: Testimonial[] = clients.map((client) => ({
  testimonialText: client.results_details.testimonial_details.testimonial,
  clientName: client.client_details.name,
  clientTitle: client.client_details.position,
  businessName: client.business_details.name,
  roas: `${client.results_details.roas.value}${client.results_details.roas.symbol} ROAS`,
  conversions: `${client.results_details.conversions.value}${client.results_details.conversions.symbol} Conversions`,
}));

const TestimonialsCarousel2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % clientTestimonials.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = clientTestimonials[currentIndex];

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      key={currentIndex}
      className="relative space-y-1 rounded-lg border bg-secondary px-6 py-2 max-w-xl"
    >
      <div className="absolute -top-4 right-0 flex space-x-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <Text
        as="p"
        variant="bodyMd"
        applyMargin={false}
        className="font-semibold italic"
      >
        "{currentTestimonial.testimonialText}"
      </Text>
      <Text
        as="p"
        variant="bodyMd"
        applyMargin={false}
        className="pb-2 text-xs"
      >
        {currentTestimonial.clientName},{" "}
        <strong>{currentTestimonial.clientTitle}</strong> at{" "}
        <strong>{currentTestimonial.businessName}</strong>
      </Text>
      <div className="absolute -bottom-4 right-0 mb-2 mr-2 flex space-x-4">
        <MotionButton
          variants={itemVariants}
          variant={"outline"}
          className="m-0 h-max rotate-3 transform rounded-lg p-1 text-sm font-semibold"
        >
          {currentTestimonial.roas}
        </MotionButton>
        <MotionButton
          variants={itemVariants}
          variant={"outline"}
          className="m-0 h-max -rotate-3 transform rounded-lg p-1 text-sm font-semibold"
        >
          {currentTestimonial.conversions}
        </MotionButton>
      </div>
    </MotionDiv>
  );
};

export default TestimonialsCarousel2;
