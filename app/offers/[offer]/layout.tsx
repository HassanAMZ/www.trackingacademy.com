import { Metadata } from "next";
import { offers } from "@/data/offers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ offer: string }>;
}): Promise<Metadata> {
  const { offer: offerId } = await params;

  const offerData = offers[offerId];

  // Enhanced fallback for non-existent offers
  if (!offerData) {
    return {
      title:
        "Fix Meta Pixel Data Sharing Restrictions for Health, Financial & Restricted Niches | Restore Your Tracking",
      description:
        "Health & wellness businesses losing ad performance due to Meta Pixel data sharing restrictions? Get expert help to restore your tracking, maintain HIPAA compliance, and recover your ROAS within 3 days.",
      keywords: [
        "Meta Pixel data sharing restrictions",
        "health wellness Facebook ads",
        "HIPAA compliant tracking",
        "Meta Pixel health restrictions",
        "wellness business Facebook tracking",
        "healthcare advertising compliance",
        "blocked Meta Pixel events",
        "health business ad targeting",
        "GDPR Meta Pixel compliance",
        "wellness marketing restrictions",
      ],
      openGraph: {
        title: "Fix Meta Pixel Restrictions for Health & Wellness Businesses",
        description:
          "Restore blocked Meta Pixel tracking for health & wellness businesses. Expert compliance solutions to recover ad performance while maintaining HIPAA and GDPR compliance.",
        images: [
          {
            url: "/images/hero/meta-pixel-health-restrictions.png",
            width: 1200,
            height: 630,
            alt: "Meta Pixel Health Restrictions Solution",
          },
        ],
        type: "website",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        locale: "en_US",
        siteName: "Health & Wellness Meta Pixel Solutions",
      },
      twitter: {
        card: "summary_large_image",
        site: "@Shahzada_A",
        creator: "@Shahzada_A",
        title: "Fix Meta Pixel Health & Wellness Restrictions",
        description:
          "Expert solutions for health & wellness businesses facing Meta Pixel data sharing restrictions. Restore tracking while maintaining compliance.",
        images: [
          {
            url: "/images/hero/data-sharing-restrcition-03.png",
            alt: "Meta Pixel Health Restrictions Solution",
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      category: "Health & Wellness Marketing",
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
      title: `${headlineText} | ${offerData.package}`,
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
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
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
  return <>{children}</>;
}
