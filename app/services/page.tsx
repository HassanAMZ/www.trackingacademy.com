import Navbar from "@/components/global/navbar";
import FAQSection from "@/components/pricing/faq-section";
import {
  FeatureComparison,
  ServiceCard,
} from "@/components/pricing/pricing-vertical";
import ServiceHero from "@/components/service/service-hero";
import Container from "@/components/ui/container";
import { services } from "@/data/services";

export default function PricingPage() {
  return (
    <Container className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Choose Your Perfect
          <span className="text-primary"> Tracking Solution</span>
        </h1>
        <p className="text-muted-foreground text-xl">
          Reclaim your lost conversions and maximize your ad spend ROI with our
          comprehensive tracking solutions. From basic audits to
          enterprise-level implementations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>

      {/* Feature Comparison */}
      <FeatureComparison services={services.slice(0, 4)} />

      <FAQSection />
      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.slice(0, 4).map((service) => (
          <ServiceHero key={service.name} service={service} />
        ))}
      </div>
    </Container>
  );
}
