import { offers } from "@/data/offers";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ offer: string }>;
}): Promise<Metadata> {
  const { offer: offerId } = await params;

  const offerData = offers[offerId] || offers["default-offer"];

  // Dynamic content generation
  const headlineText = `${offerData.headline.prefix} ${offerData.headline.conversion.join(" & ")} ${offerData.headline.suffix}`;
  const cleanDescription = offerData.subheading.replace(/<[^>]*>/g, "");
  const industryKeywords = offerData.keywords;

  return {
    title: `${headlineText} | ${offerData.package} - TrackingAcademy`,
    description: `${cleanDescription} Fix your Meta Ads tracking for ${offerData.businessTypePlural} with our ${offerData.package} solution. ${offerData.restrictionData.affected} of ${offerData.businessTypePlural} affected by Meta's restrictions.`,
    keywords: [
      ...industryKeywords,
      offerData.niche,
      offerData.businessType,
      offerData.businessTypePlural,
      offerData.package,
      "Meta Ads tracking",
      "Facebook Pixel restrictions",
      "data sharing restrictions",
      "conversion tracking",
      "ROAS optimization",
      `${offerData.businessType} marketing`,
      `${offerData.businessType} advertising`,
      "tracking academy",
      "health & wellness tracking",
      "restricted niche tracking",
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/offers/${offerData.slug}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${offerData.solution.heading} | ${offerData.package}`,
      description: `Fix your Meta Ads tracking for ${offerData.businessTypePlural}. Our ${offerData.package} solution restores ${offerData.restrictionData.affected} of blocked conversions while maintaining full compliance.`,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${offerData.package} - Meta Ads Tracking Solution for ${offerData.businessTypePlural}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${headlineText} | ${offerData.package}`,
      description: `Fix Meta Ads tracking for ${offerData.businessTypePlural}. ${offerData.restrictionData.affected} affected by restrictions. ${offerData.restrictionData.severity} severity level.`,
      images: ["/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/offers/${offerData.slug}`,
    },
    robots: {
      index: true,
      follow: false,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: `${offerData.niche} Marketing`,
    classification: "Business Services",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"),
  };
}

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <BackgroundBeams /> */}
      {children}
    </>
  );
}
