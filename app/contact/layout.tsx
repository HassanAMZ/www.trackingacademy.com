import Navbar from "@/components/global/navbar";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact TrackingAcademy | Expert Analytics & Tracking Support",
  description:
    "Get in touch with TrackingAcademy's team of analytics experts. Schedule a consultation to discuss your tracking implementation, data accuracy issues, and optimization needs for health & wellness businesses.",
  keywords: [
    "contact tracking academy",
    "analytics consultation",
    "tracking support",
    "data accuracy help",
    "health & wellness tracking expert",
    "google analytics help",
    "meta pixel support",
    "tracking consultation",
    "conversion tracking help",
    "ROAS optimization consultation",
    "iOS tracking solutions",
    "ad blocker bypass help",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/contact`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Contact TrackingAcademy | Expert Analytics Support",
    description:
      "Connect with TrackingAcademy's analytics experts for personalized tracking solutions. Get help with GA4, Meta Pixel, server-side tracking, and data accuracy optimization for health & wellness businesses.",
    images: [
      {
        url: "/images/contact-us.png",
        width: 1200,
        height: 630,
        alt: "Contact TrackingAcademy - Expert analytics and tracking support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TrackingAcademy | Analytics Experts",
    description:
      "Reach out to TrackingAcademy for expert help with tracking implementation, data accuracy, and analytics optimization for your health & wellness business.",
    images: ["/images/contact-us.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-5">
      <Navbar />
      {children}
      <TestimonialGrid />
    </main>
  );
}
