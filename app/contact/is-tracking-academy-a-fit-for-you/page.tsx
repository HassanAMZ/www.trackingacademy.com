import Link from "next/link";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function page() {
  return (
    <main className="py-4">
      <TestimonialGrid />
      <Container>
        <Button asChild className="w-full">
          <Link href="/contact">Book a Call</Link>
        </Button>
      </Container>
    </main>
  );
}
