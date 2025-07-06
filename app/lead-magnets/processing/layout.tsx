// 2. Analysis in Progress Page
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Analyzing Your Website - Tracking Audit in Progress | Total Transparency",
  description:
    "Your website tracking audit is being processed. Our AI system is analyzing Meta Pixel implementation, GDPR compliance, and conversion tracking setup for comprehensive optimization recommendations.",
  openGraph: {
    title: "Website Tracking Analysis in Progress",
    description:
      "Our expert system is scanning your website's tracking implementation. You'll receive detailed audit results with actionable recommendations within 24 hours.",
    images: [
      {
        url: "/images/hero/free-audit-report.png",
        width: 1200,
        height: 630,
        alt: "Website Tracking Analysis in Progress",
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
    title: "Tracking Audit Analysis in Progress",
    description:
      "Professional analysis of your website's tracking setup is underway. Get expert recommendations to improve data accuracy and attribution.",
    images: [
      {
        url: "/images/hero/free-audit-report.png",
        alt: "Website Tracking Analysis in Progress",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    nocache: true,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
