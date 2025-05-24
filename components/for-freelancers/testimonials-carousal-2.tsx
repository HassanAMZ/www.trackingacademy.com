"use client";

import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/case-studies";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Container from "../ui/container";

const TestimonialsCarousel2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clientTestimonials = caseStudies.map((study) => {
    const { testimonial, analytics, name, id } = study;
    return {
      id: id,
      author: testimonial.author,
      testimonialText: testimonial.quote,
      clientName: testimonial.author,
      clientTitle: testimonial.role,
      clientImage: testimonial.image,
      businessName: name,
      analytics,
      // Using random numbers between 0-40 instead of 0 as default
      accuracy: `${analytics.accuracy}% Accuracy`,
      recoveredConversions: `${analytics.recoveredFromTrackingPreventionPercentage}% Recovered`,
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
    <Link
      href={`/case-study/${currentTestimonial.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative space-y-3 rounded-lg border px-6 py-2 transition-shadow hover:shadow-md md:mx-0">
        <div className="absolute -top-3 right-0 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="font-semibold italic pt-6 line-clamp-1">
          "{currentTestimonial.testimonialText}"
        </p>
        <div className="flex items-center gap-1">
          {currentTestimonial.clientImage && (
            <Avatar className="mr-4 h-12 w-12">
              <AvatarImage
                src={currentTestimonial.clientImage}
                alt={currentTestimonial.clientName}
              />
              <AvatarFallback>
                {currentTestimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col items-left text-left">
            <p className="text-sm font-bold">
              {currentTestimonial.clientName},{" "}
            </p>
            <p className="text-xs">
              <strong>{currentTestimonial.clientTitle}</strong> at{" "}
              <strong>{currentTestimonial.id}</strong>
            </p>
          </div>
        </div>
        <div className="absolute right-0 -bottom-5 mr-2 mb-2 flex space-x-8">
          <Button
            variant="outline"
            className="mx-1  h-max rotate-3 transform rounded-lg px-2 py-1 text-sm font-semibold"
          >
            {currentTestimonial.accuracy}
          </Button>
          <Button
            variant="outline"
            className="mx-1 h-max -rotate-3 transform rounded-lg  px-2 py-1 text-sm font-semibold"
          >
            {currentTestimonial.recoveredConversions}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialsCarousel2;
