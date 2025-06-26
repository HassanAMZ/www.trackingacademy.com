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
    images: ["/images/hero/free-audit-report.png"],
    type: "website",
    locale: "en_US",
    siteName: "Total Transparency Tracking Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Tracking Audit - Fix Data Issues",
    description:
      "Comprehensive tracking analysis reveals attribution problems and provides actionable fixes. Improve your ad performance with accurate data tracking.",
    images: ["/images/hero/free-audit-report.png"],
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
