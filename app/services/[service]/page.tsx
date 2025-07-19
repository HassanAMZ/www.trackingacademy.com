// app/services/[service]/page.tsx

import FAQSection from "@/components/pricing/faq-section";
import { FeatureComparison } from "@/components/pricing/pricing-vertical";
import ServiceHero from "@/components/service/service-hero";
import Container from "@/components/ui/container";
import { Service, services } from "@/data/services";
import getServicesByKeys from "@/utils/getServices";
import { notFound } from "next/navigation";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
  }));
}

function getServiceByservice(serviceSlug: string): Service | undefined {
  return services.find((service) => service.id === serviceSlug);
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const service = getServiceByservice((await params).service);

  if (!service) {
    notFound();
  }

  // Determine service comparison list based on "subscription" in name
  const serviceIds = service.id.toLowerCase().includes("subscription")
    ? ["premium-subscription", "pro-subscription", "growth-subscription", "starter-subscription"]
    : ["advanced-tracking", "professional-setup", "website-tracking-audit"];

  return (
    <Container className="space-y-16 py-12">
      <ServiceHero service={service} />
      <FeatureComparison services={getServicesByKeys([service.id, ...serviceIds])} />
      <FAQSection />
    </Container>
  );
}
