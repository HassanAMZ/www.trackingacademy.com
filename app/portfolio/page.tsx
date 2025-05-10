import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="py-12">
      <TestimonialGrid />

      <div className="flex items-center justify-center space-x-4 py-12">
        <Button size="lg" asChild>
          <Link href="/contact">
            Let’s Handle Your Tracking Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
