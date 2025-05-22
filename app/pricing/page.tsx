import Navbar from "@/components/global/navbar";
import FAQSection from "@/components/pricing/faq-section";
import PricingVertical from "@/components/pricing/pricing-vertical";
import Container from "@/components/ui/container";

export default function PricingPage() {
  return (
    <Container className="py-12 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1>Transparent Pricing Plans</h1>
        <h4 className="text-muted-foreground">
          Choose the perfect tracking solution to reclaim your lost conversions
          and maximize your ad spend ROI.
        </h4>
      </div>

      <PricingVertical />

      <FAQSection />
    </Container>
  );
}
