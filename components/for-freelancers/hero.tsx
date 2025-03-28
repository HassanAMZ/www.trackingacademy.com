import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import clients from "@/data/clients";
import { Link } from "next-view-transitions";
import Container from "../ui/container";
import TestimonialsCarousel2 from "./testimonials-carousal-2";
import { TestimonialsCarousel } from "./testimonials-carousel";

export default function Hero() {
  const topClients = clients.slice(0, 3);
  return (
    <Container className="sm:py py-2 lg:pt-8">
      <div className="flex flex-col items-start justify-center gap-4 md:grid md:grid-cols-3">
        <div className="space-y-3 md:col-span-2">
          <h1>
            <span className="text-primary">Master Analytics and Tracking</span>{" "}
            in 12 Weeks – Guaranteed!
            {/* Learn how to turn your data into{" "}
            <span className="text-primary">actionable insights</span> and{" "}
            <span className="text-primary">grow your business</span>. */}
          </h1>
          <p>
            Learn how to turn your data into actionable insights and grow your
            business. Our expert-led training ensures you master conversion
            tracking and analytics, with hands-on practice and real-world
            projects.
          </p>
          <TestimonialsCarousel2 />
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="space-y-1">
              <p>✔ Setup and optimized within 7 days.</p>
              <p>✔ Achieve 95% tracking accuracy.</p>
              <p>✔ 95% accuracy or full refund.</p>
            </div>
          </div>

          <Button asChild className="w-full px-10 py-4 md:w-max">
            <Link href="/for-freelancers/enroll-now">Enroll Now</Link>
          </Button>

          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="relative h-8 w-8">
              {topClients.map((client, index) => (
                <Avatar
                  key={client.clientDetails.name}
                  className={`absolute left-${index * 4} top-0 z-${index + 1}`}
                >
                  <AvatarImage
                    src={client.clientDetails.images[0].url}
                    alt={`@${client.clientDetails.name.toLowerCase().replace(" ", "-")}`}
                  />
                  <AvatarFallback>
                    {client.clientDetails.name[0]}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="pl-10">2 students trained & 2 success stories</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg">
          <TestimonialsCarousel />
        </div>
      </div>
    </Container>
  );
}
