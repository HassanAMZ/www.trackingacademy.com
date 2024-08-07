"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import TypographyP from "../ui/typography-p";
import { Star } from "lucide-react";
import Image from "next/image";
import clients from "@/data/clients";

interface TestimonialsProps {
  testimonialText: string;
  clientName: string;
  clientTitle: string;
  businessName: string;
  image: string;
}

const testimonials: TestimonialsProps[] = clients.map((client) => ({
  testimonialText: client.results_details.testimonial_details.testimonial,
  clientName: client.client_details.name,
  clientTitle: client.client_details.position,
  businessName: client.business_details.name,
  image: client.client_details.images[0].link,
}));

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div className="min-w-full" key={index}>
            <Image
              src={testimonial.image}
              alt={testimonial.clientName}
              className="rounded-t-lg object-cover w-full"
              width={500}
              height={200}
            />
            <Card className="relative space-y-4 shadow-lg">
              <div className="absolute -top-4 right-4 flex space-x-1">
                <Star className="text-primary fill-primary" />
                <Star className="text-primary fill-primary" />
                <Star className="text-primary fill-primary" />
                <Star className="text-primary fill-primary" />
                <Star className="text-primary fill-primary" />
              </div>
              <CardContent>
                <TypographyP className="font-semibold italic">
                  {testimonial.testimonialText}
                </TypographyP>
                <TypographyP className="mt-4 text-xs">
                  {testimonial.clientName}, {testimonial.clientTitle} at{" "}
                  {testimonial.businessName}
                </TypographyP>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
