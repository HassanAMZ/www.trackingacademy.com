import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Audit Request Submitted - Expert Analysis Coming Soon | Total Transparency",
  description:
    "Your tracking audit request has been successfully submitted. Our specialists will deliver a comprehensive analysis of your Meta Pixel, Conversions API, and tracking setup within 24 hours.",
  openGraph: {
    title: "Tracking Audit Request Confirmed - 24 Hour Delivery",
    description:
      "Thank you for submitting your audit request. Our tracking experts are now conducting a manual review of your website's implementation. Expect 20-40% improved attribution and 15-30% better ROAS.",
    images: ["/images/hero/free-audit-report.png"],
    type: "website",
    locale: "en_US",
    siteName: "Total Transparency Tracking Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Request Submitted Successfully",
    description:
      "Professional tracking analysis underway. Get detailed recommendations for Meta Pixel optimization, GDPR compliance, and conversion tracking improvements.",
    images: ["/images/hero/free-audit-report.png"],
  },
  robots: {
    index: false, // Don't index thank you/success pages
    follow: true,
    noarchive: true,
    nosnippet: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
