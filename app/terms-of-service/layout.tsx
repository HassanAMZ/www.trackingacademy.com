// app/terms-of-service/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | TrackingAcademy",
  description:
    "Review the terms that govern your use of TrackingAcademy's tracking tools and services. Transparent and straightforward policies.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "service agreement",
    "tracking academy terms",
    "user agreement",
    "legal terms",
    "service policies",
    "tracking tools terms",
    "analytics service terms",
    "data tracking terms",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/terms-of-service`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Terms of Service | TrackingAcademy",
    description:
      "Read our full terms and conditions for using our server-side tracking suite and analytics services.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Terms of Service - Legal terms and conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | TrackingAcademy",
    description:
      "Understand the rules and agreements for using TrackingAcademy tracking and analytics tools.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
