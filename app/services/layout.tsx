import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services | TrackingAcademy - Professional Analytics & Tracking Solutions",
  description:
    "Explore TrackingAcademy's comprehensive services for advanced analytics and tracking solutions that empower health & wellness businesses to achieve 95%+ data accuracy and optimize campaigns.",
  keywords: [
    "tracking services",
    "analytics services",
    "conversion tracking services",
    "Meta pixel services",
    "GA4 services",
    "GTM services",
    "server-side tracking services",
    "tracking academy services",
    "health & wellness tracking",
    "ROAS optimization services",
    "conversion recovery services",
    "data sharing restriction solutions",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/services`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Services | TrackingAcademy - Professional Analytics & Tracking Solutions",
    description:
      "Discover how TrackingAcademy delivers policy-safe, high-accuracy tracking solutions for health & wellness businesses, with real-world results in Google Analytics, Meta Pixel, and more.",
    images: [
      {
        url: "/images/case-studies.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Services - Professional tracking and analytics solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | TrackingAcademy - Professional Analytics & Tracking Solutions",
    description:
      "See how TrackingAcademy restores accurate tracking for health & wellness businesses, with services on GA4, Meta Pixel, and server-side tracking solutions.",
    images: ["/images/case-studies.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/services",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
