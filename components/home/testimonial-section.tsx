import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Vision Labs is an integral part of monitoring and measuring our business. They assist us in providing solutions to attribution, tracking, customer behaviour, etc. I highly recommend working with them!",
    author: "Heather Thomas",
    role: "Ecommerce Director",
    company: "JUVENON",
  },
  {
    quote:
      "JJ & the Vision Labs team have been an incredible resource, making our GA4 setup a breeze. They ask the right questions and continually adjust our reporting for smooth data analysis.",
    author: "Bridget Poetker",
    role: "Head of Growth",
    company: "loop & tie",
  },
  {
    quote:
      "We've recommended JJ and the Vision Labs team numerous times and they consistently impress by collecting the right data, organizing it into a compelling story, and creating easy-to-read reports.",
    author: "Chris Mercer",
    role: "Co-founder",
    company: "MeasureU",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container space-y-16 py-24" id="testimonials">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          High-growing businesses work with Vision Labs to activate their data
        </h2>
      </div>{" "}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card key={i}>
            <CardContent className="space-y-4 pt-6">
              <p className="text-muted-foreground">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <div className="space-y-1">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  <p className="text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
