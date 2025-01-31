import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";
import { testimonials as clientTestimonails } from "@/data/testimonials";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

function TestimonialGrid({
  testimonials = clientTestimonails,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <div className="columns-1 gap-6 space-y-8 [column-fill:_balance] md:columns-2 lg:columns-3">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="break-inside-avoid">
          <Card className="h-fit bg-background/50 backdrop-blur-xs">
            <CardContent className="p-6">
              <Quote className="mb-4 h-8 w-8 text-primary" />
              <p className="mb-4 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  {testimonial.author[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.role && ( // Conditionally render role if it exists
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default TestimonialGrid;
