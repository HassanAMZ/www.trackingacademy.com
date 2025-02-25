import { HeroSection } from "@/components/home/hero-section";
import { CTASection } from "@/components/home/cta-section";
import { ProblemsSection } from "@/components/home/problem-section";
import { SolutionsSection } from "@/components/home/solution-section";
import { TestimonialsSection } from "@/components/home/testimonial-section";
import Container from "@/components/ui/container";
import Navbar from "@/components/global/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Container>
        <HeroSection />
        <SolutionsSection />
        <ProblemsSection />
        <TestimonialsSection />
        <CTASection />
      </Container>
    </div>
  );
}
