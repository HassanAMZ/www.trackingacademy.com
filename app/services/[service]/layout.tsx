import { services } from "@/data/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceId } = await params;

  const serviceData =
    services.find(
      (service) => service.id.toLowerCase() === serviceId.toLowerCase(),
    ) || null;

  if (!serviceData) {
    return {
      title: "Services Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${serviceData.name} | Tracking Academy Service`,
    description: serviceData.description,
    openGraph: {
      title: `${serviceData.name} | Tracking Academy`,
      description: serviceData.description,
      images: ["/images/social-sharing.png"],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.name} | Tracking Academy`,
      description: serviceData.description,
      images: ["/images/social-sharing.png"],
    },
  };
}

export default function serviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
