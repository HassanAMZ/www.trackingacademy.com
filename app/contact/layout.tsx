import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-5">
      {children}
      <TestimonialGrid />
    </main>
  );
}
