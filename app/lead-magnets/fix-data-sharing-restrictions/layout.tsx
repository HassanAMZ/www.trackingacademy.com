import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Fix Meta Pixel Data Sharing Restrictions for Health, Financial, & other Restricted Niche | Restore Your Tracking",
  description:
    "Health & wellness businesses losing ad performance due to Meta Pixel data sharing restrictions? Get expert help to restore your tracking, maintain HIPAA compliance, and recover your ROAS within 7 days.",
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
        url: "/images/hero/meta-pixel-health-restrictions.png",
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
      noimageindex: true,
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

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
