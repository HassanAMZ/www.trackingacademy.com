import FAQSection from "@/components/pricing/faq-section";
import { FeatureComparison, ServiceCard } from "@/components/pricing/pricing-vertical";
import ServiceHero from "@/components/service/service-hero";
import Container from "@/components/ui/container";
import { services } from "@/data/services";
import getServicesByKeys from "@/utils/getServices";

export default function PricingPage() {
  return (
    <Container className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h1>
          Choose Your Perfect
          <span className="text-primary"> Tracking Solution</span>
        </h1>
        <h4 className="mx-auto max-w-3xl text-muted-foreground">
          Reclaim your lost conversions and maximize your ad spend ROI with our comprehensive
          tracking solutions. From basic audits to enterprise-level implementations.
        </h4>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {getServicesByKeys(["enterprise-solution", "advanced-tracking", "professional-setup"]).map(
          (service) => (
            <ServiceCard key={service.id} service={service} />
          ),
        )}
      </div>

      {/* Feature Comparison */}
      <FeatureComparison
        services={getServicesByKeys([
          "enterprise-solution",
          "advanced-tracking",
          "professional-setup",
        ])}
      />

      <FAQSection />
      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8">
        {services.slice(0, 4).map((service) => (
          <ServiceHero key={service.name} service={service} />
        ))}
      </div>
    </Container>
  );
}
