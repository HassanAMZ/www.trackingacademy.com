// app/services/[service]/page.tsx

import FAQSection from "@/components/pricing/faq-section";
import { FeatureComparison } from "@/components/pricing/pricing-vertical";
import ServiceHero from "@/components/service/service-hero";
import Container from "@/components/ui/container";
import { Service, services } from "@/data/services";
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

  return (
    <Container className="space-y-16 py-12">
      <ServiceHero service={service} />

      <FeatureComparison services={services.slice(0, 3)} />
      <FAQSection />
    </Container>
  );
}
