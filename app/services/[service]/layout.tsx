import { services } from "@/data/services";
import type { Metadata } from "next";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceId } = await params;

  const serviceData =
    services.find((service) => service.id.toLowerCase() === serviceId.toLowerCase()) || null;

  if (!serviceData) {
    return {
      title: "Service Not Found | TrackingAcademy",
      description: "The requested service could not be found. Please check the URL and try again.",
      keywords: [
        "service not found",
        "tracking academy services",
        "tracking services",
        "analytics services",
      ],
      authors: [
        {
          name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        },
      ],
      creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      alternates: {
        canonical: "/services/not-found",
      },
    };
  }

  // Generate dynamic keywords based on service features
  const dynamicKeywords = [
    "tracking service",
    "analytics service",
    "conversion tracking service",
    "tracking academy service",
    "health & wellness tracking",
    `${serviceData.accuracy} accuracy service`,
  ];

  // Add feature-specific keywords
  if (serviceData.features) {
    Object.entries(serviceData.features).forEach(([feature, value]) => {
      if (value) {
        dynamicKeywords.push(`${feature} service`);
        if (typeof value === "string") {
          dynamicKeywords.push(`${value} ${feature} service`);
        }
      }
    });
  }

  return {
    title: `${serviceData.name} | TrackingAcademy Service`,
    description: serviceData.description,
    keywords: dynamicKeywords,
    authors: [
      {
        name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      },
    ],
    creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/services/${serviceId}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${serviceData.name} | TrackingAcademy Service`,
      description: serviceData.description,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${serviceData.name} - TrackingAcademy Service`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.name} | TrackingAcademy Service`,
      description: serviceData.description,
      images: ["/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/services/${serviceId}`,
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
