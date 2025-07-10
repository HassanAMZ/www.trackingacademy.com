import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Free Website Tracking Audit - No More Data Doubts | Total Transparency",
  description:
    "Get a comprehensive free tracking audit for your website. Identify Meta Pixel issues, GDPR compliance problems, and conversion tracking errors. Improve your ROAS by 15-30% with our expert analysis.",
  keywords: [
    "free tracking audit",
    "Meta Pixel audit",
    "website tracking analysis",
    "conversion tracking",
    "GDPR compliance",
    "Facebook Pixel audit",
    "tracking optimization",
    "data accuracy audit",
  ],
  openGraph: {
    title: "Free Website Tracking Audit - Spot & Fix Data Issues",
    description:
      "Professional tracking audit reveals hidden issues costing you conversions. Get expert recommendations to improve attribution accuracy and ROAS within 24 hours.",
    images: [
      {
        url: "/images/hero/free-audit-report.png",
        width: 1200,
        height: 630,
        alt: "Free Website Tracking Audit Report",
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    locale: "en_US",
    siteName: "Total Transparency Tracking Audit",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Shahzada_A",
    creator: "@Shahzada_A",
    title: "Free Website Tracking Audit - Fix Data Issues",
    description:
      "Comprehensive tracking analysis reveals attribution problems and provides actionable fixes. Improve your ad performance with accurate data tracking.",
    images: [
      {
        url: "/images/hero/free-audit-report.png",
        alt: "Free Website Tracking Audit Report",
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
  category: "Website Analytics",
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
