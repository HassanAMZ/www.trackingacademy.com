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
    title: `${headlineText} | ${offerData.package} - Tracking Academy`,
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
    ],
    openGraph: {
      title: `${offerData.solution.headerTitle} | ${offerData.package}`,
      description: `Fix your Meta Ads tracking for ${offerData.businessTypePlural}. Our ${offerData.package} solution restores ${offerData.restrictionData.affected} of blocked conversions while maintaining full compliance.`,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${offerData.package} - Meta Ads Tracking Solution for ${offerData.businessTypePlural}`,
        },
      ],
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/offers/${offerData.slug}`,
      siteName: "Tracking Academy",
    },
    twitter: {
      card: "summary_large_image",
      site: "@Shahzada_A",
      creator: "@Shahzada_A",
      title: `${headlineText} | ${offerData.package}`,
      description: `Fix Meta Ads tracking for ${offerData.businessTypePlural}. ${offerData.restrictionData.affected} affected by restrictions. ${offerData.restrictionData.severity} severity level.`,
      images: [
        {
          url: "/images/social-sharing.png",
          alt: `${offerData.package} Solution for ${offerData.businessTypePlural}`,
        },
      ],
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
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  };
}

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}
