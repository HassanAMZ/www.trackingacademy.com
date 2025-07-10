"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "“I learned more in a week than I did in years of trial and error.”",
    author: "Greg Fisher, CMO at Atlantic Studio",
    image: "/images/clients/malik-osama.png",
  },
  {
    text: "“This program transformed our marketing approach completely.”",
    author: "Sarah Lee, Marketing Director",
    image: "/images/clients/philipp-herglotz.png",
  },
  {
    text: "“Outstanding insights and practical tools for any business.”",
    author: "Michael Brown, CEO at Innovatech",
    image: "/images/clients/imtiaz-ahmad.png",
  },
  {
    text: "“A must-have training for anyone serious about analytics.”",
    author: "Emily Davis, Data Analyst",
    image: "/images/clients/imtiaz-ahmad.jpg",
  },
  {
    text: "“Incredible value and top-notch support from the team.”",
    author: "James Wilson, Product Manager",
    image: "/images/clients/jamie-norsa.png",
  },
  {
    text: "“Our conversion rates have doubled since the training.”",
    author: "Laura Johnson, E-commerce Specialist",
    image: "/images/clients/david-bodnar.png",
  },
];

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
              priority={false}
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full rounded-t-lg object-cover"
              width={500}
              height={200}
            />
            <Card className="relative space-y-4 shadow-sm">
              <div className="absolute -top-4 right-4 flex space-x-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <CardContent>
                <p className="font-semibold italic">{testimonial.text}</p>
                <p className="mt-4 text-xs">{testimonial.author}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
