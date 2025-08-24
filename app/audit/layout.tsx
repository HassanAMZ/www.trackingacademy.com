import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Website Audits | TrackingAcademy - Professional Tracking & Analytics Audits",
  description:
    "Comprehensive website tracking and analytics audits to improve your data collection. Get detailed insights on Meta pixel, GA4, GTM setup, and conversion tracking optimization.",
  keywords: [
    "website audit",
    "tracking audit",
    "analytics audit",
    "Meta pixel audit",
    "GA4 audit",
    "GTM audit",
    "conversion tracking audit",
    "data collection audit",
    "marketing analytics audit",
    "ROAS optimization audit",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/audit`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Website Audits | TrackingAcademy - Professional Tracking & Analytics Audits",
    description:
      "Comprehensive website tracking and analytics audits to improve your data collection. Get detailed insights on Meta pixel, GA4, GTM setup, and conversion tracking optimization.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy - Professional website tracking and analytics audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Audits | TrackingAcademy - Professional Tracking & Analytics Audits",
    description:
      "Comprehensive website tracking and analytics audits to improve your data collection. Get detailed insights on Meta pixel, GA4, GTM setup, and conversion tracking optimization.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/audit",
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
