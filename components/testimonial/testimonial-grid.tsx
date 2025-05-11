import { testimonials as clientTestimonails } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";

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
          <Card className="bg-background/50 h-fit backdrop-blur-xs">
            <CardContent className="p-6">
              <Quote className="text-primary mb-4 h-8 w-8" />
              <p className="mb-4 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="bg-primary mr-4 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  {testimonial.author[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.role && ( // Conditionally render role if it exists
                    <p className="text-muted-foreground text-sm">
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
