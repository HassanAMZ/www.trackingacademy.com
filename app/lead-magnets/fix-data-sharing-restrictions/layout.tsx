import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Fix Meta Pixel Data Sharing Restrictions for Health & Wellness | Restore Your Tracking",
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
    images: ["/images/hero/meta-pixel-health-restrictions.png"],
    type: "website",
    locale: "en_US",
    siteName: "Health & Wellness Meta Pixel Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Meta Pixel Health & Wellness Restrictions",
    description:
      "Expert solutions for health & wellness businesses facing Meta Pixel data sharing restrictions. Restore tracking while maintaining compliance.",
    images: ["/images/hero/meta-pixel-health-restrictions.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
