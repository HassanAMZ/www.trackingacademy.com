import Navbar from "@/components/global/navbar";
import FAQSection from "@/components/pricing/faq-section";
import PricingVertical from "@/components/pricing/pricing-vertical";
import Container from "@/components/ui/container";
import { services } from "@/data/services";

export default function PricingPage() {
  return (
    <Container className="space-y-16 py-12">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h1>Transparent Pricing Plans</h1>
        <h4 className="text-muted-foreground">
          Choose the perfect tracking solution to reclaim your lost conversions
          and maximize your ad spend ROI.
        </h4>
      </div>

      <PricingVertical services={services.slice(0, 4)} />

      <FAQSection />
    </Container>
  );
}
