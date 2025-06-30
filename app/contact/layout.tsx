import { ReactNode } from "react";
import { Metadata } from "next";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";

export const metadata: Metadata = {
  title: "Contact Tracking Academy | Expert Analytics & Tracking Support",
  description:
    "Get in touch with Tracking Academy's team of analytics experts. Schedule a consultation to discuss your tracking implementation, data accuracy issues, and optimization needs.",
  keywords: [
    "contact tracking academy",
    "analytics consultation",
    "tracking support",
    "data accuracy help",
    "ecommerce tracking expert",
    "google analytics help",
    "meta pixel support",
  ],
  openGraph: {
    title: "Contact Tracking Academy | Expert Analytics Support",
    description:
      "Connect with Tracking Academy's analytics experts for personalized tracking solutions. Get help with GA4, Meta Pixel, server-side tracking, and data accuracy optimization.",
    images: ["/images/contact-us.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tracking Academy | Analytics Experts",
    description:
      "Reach out to Tracking Academy for expert help with tracking implementation, data accuracy, and analytics optimization for your ecommerce business.",
    images: ["/images/contact-us.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-5">
      {children}
      <TestimonialGrid />
    </main>
  );
}
