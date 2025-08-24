import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Case Studies | TrackingAcademy - Real Results from Tracking Solutions",
  description:
    "Explore TrackingAcademy's case studies showcasing advanced analytics and tracking solutions that empower health & wellness businesses to achieve 95%+ data accuracy and optimize campaigns.",
  keywords: [
    "tracking case studies",
    "analytics case studies",
    "conversion tracking results",
    "Meta pixel case studies",
    "GA4 case studies",
    "GTM case studies",
    "server-side tracking results",
    "tracking academy case studies",
    "health & wellness tracking",
    "ROAS improvement case studies",
    "conversion recovery case studies",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/case-study`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Case Studies | TrackingAcademy - Real Results from Tracking Solutions",
    description:
      "Discover how TrackingAcademy delivers policy-safe, high-accuracy tracking solutions for health & wellness businesses, with real-world results in Google Analytics, Meta Pixel, and more.",
    images: [
      {
        url: "/images/case-studies.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Case Studies - Real tracking solution results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | TrackingAcademy - Real Results from Tracking Solutions",
    description:
      "See how TrackingAcademy restores accurate tracking for health & wellness businesses, with case studies on GA4, Meta Pixel, and server-side tracking solutions.",
    images: ["/images/case-studies.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/case-study",
  },
};

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
