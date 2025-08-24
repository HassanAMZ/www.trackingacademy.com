import { CalculatorConfigs, offers } from "@/data/offers";
import type { Metadata } from "next";

function parseCalculatorSlug(slug: string) {
  const parts = slug.split("-");
  if (parts.length < 2) return null;

  const calculatorType = parts[parts.length - 1];

  const offerSlug = parts.slice(0, -1).join("-");

  return { offerSlug, calculatorType: calculatorType as keyof CalculatorConfigs };
}

// Generate static params for all calculator combinations
export async function generateStaticParams() {
  const calculatorParams: Array<{ calculator: string }> = [];

  Object.entries(offers).forEach(([offerSlug, offer]) => {
    if (offer.calculators) {
      Object.keys(offer.calculators).forEach((calculatorType) => {
        calculatorParams.push({
          calculator: `${offerSlug}-${calculatorType}`,
        });
      });
    }
  });

  return calculatorParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    calculator: string;
  }>;
}): Promise<Metadata> {
  const { calculator } = await params;
  const parsed = parseCalculatorSlug(calculator);

  if (!parsed) {
    return {
      title: "Calculator Not Found | TrackingAcademy",
      description:
        "The requested calculator could not be found. Please check the URL and try again.",
      keywords: [
        "calculator not found",
        "tracking academy calculator",
        "lead loss calculator",
        "revenue loss calculator",
      ],
      authors: [
        {
          name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        },
      ],
      creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      alternates: {
        canonical: "/calculator/not-found",
      },
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const { offerSlug, calculatorType } = parsed;
  const offer = offers[offerSlug];

  if (!offer || !offer.calculators?.[calculatorType]) {
    return {
      title: "Calculator Not Found | TrackingAcademy",
      description:
        "The requested calculator could not be found. Please check the URL and try again.",
      keywords: [
        "calculator not found",
        "tracking academy calculator",
        "lead loss calculator",
        "revenue loss calculator",
      ],
      authors: [
        {
          name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        },
      ],
      creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      alternates: {
        canonical: "/calculator/not-found",
      },
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const calculatorConfig = offer.calculators[calculatorType];

  return {
    title: `${calculatorConfig.title} | TrackingAcademy Calculator`,
    description: calculatorConfig.description,
    keywords: [
      ...offer.keywords,
      `${offer.niche} calculator`,
      `${calculatorType} calculator`,
      "lead loss calculator",
      "revenue loss calculator",
      "tracking academy calculator",
      "conversion loss calculator",
    ],
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/calculator/${calculator}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${calculatorConfig.title} | TrackingAcademy Calculator`,
      description: calculatorConfig.description,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${calculatorConfig.title} - TrackingAcademy Calculator`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${calculatorConfig.title} | TrackingAcademy Calculator`,
      description: calculatorConfig.description,
      images: ["/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/calculator/${calculator}`,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
