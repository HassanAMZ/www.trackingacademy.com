import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import { Star } from "lucide-react";
import TypographyH1 from "../ui/typography-h1";
import TypographyP from "../ui/typography-p";
import { TestimonialsCarousel } from "./testimonials-carousel";
import TypographyH2 from "../ui/typography-h2";

export default function Hero() {
  return (
    <Container className="py-4 md:py-12">
      <div className="flex flex-col items-start justify-center gap-4 md:grid md:grid-cols-3">
        <div className="space-y-3 md:col-span-2">
          <TypographyH1>
            <span className="text-primary">Master Analytics and Tracking</span>{" "}
            in 12 Weeks – Guaranteed! Learn how to turn your data into{" "}
            <span className="text-primary">actionable insights</span> and{" "}
            <span className="text-primary">grow your business</span>.
          </TypographyH1>
          <TypographyP applyMargin={false}>
            Our expert-led training ensures you master conversion tracking and
            analytics, with hands-on practice and real-world projects.
          </TypographyP>
          <div className="relative w-full max-w-xl space-y-1 rounded-lg border bg-secondary px-6 py-2">
            <div className="absolute -top-4 right-0 flex space-x-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <TypographyP applyMargin={false} className="font-semibold italic">
              “Shahzada is great and extremely knowledgable and friendly. He
              Helped us out tremendously.”
            </TypographyP>
            <TypographyP applyMargin={false} className="pb-2 text-xs">
              Mark, <strong>CMO at LemonLawFirm </strong>
            </TypographyP>
            <div className="absolute -bottom-4 right-0 mb-2 mr-2 flex space-x-4">
              <Button className="m-0 h-max rotate-3 transform rounded-lg p-1 text-sm font-semibold">
                12.7 ROAS
              </Button>
              <Button className="m-0 h-max -rotate-3 transform rounded-lg p-1 text-sm font-semibold">
                +64% Conversions
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="space-y-1">
              <TypographyP>✔ Setup and optimized within 7 days.</TypographyP>
              <TypographyP>✔ Achieve 95% tracking accuracy.</TypographyP>
              <TypographyP>✔ 95% accuracy or full refund.</TypographyP>
            </div>
          </div>

          <Button asChild className="w-full px-10 py-4 md:w-max">
            <Link href="/for-freelancers/enroll-now">Enroll Now</Link>
          </Button>

          {/* <div className='flex items-center justify-center md:justify-start gap-2'>
            <div className='relative h-8 w-8 grayscale'>
              <Avatar className='absolute left-0 top-0 z-1'>
                <AvatarImage
                  src='/images/clients/malik-osama.jfif'
                  alt='@malik-osama'
                />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>

              <Avatar className='absolute left-4 top-0 z-2'>
                <AvatarImage
                  src='/images/clients/philipp-herglotz.jfif'
                  alt='@philipp-herglotz'
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>

              <Avatar className='absolute left-8 top-0 z-3'>
                <AvatarImage
                  src='/images/clients/imtiaz-ahmad.jfif'
                  alt='@imtiaz-ahmad'
                />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
            </div>
            <TypographyP applyMargin={false} className='pl-10'>
              1000+ students trained & 300+ success stories
            </TypographyP>
          </div> */}
        </div>

        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg">
          <TestimonialsCarousel />
        </div>
      </div>
    </Container>
  );
}
