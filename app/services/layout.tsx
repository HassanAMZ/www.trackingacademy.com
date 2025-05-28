import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tracking Academy Services | Analytics & Tracking Solutions",
  description:
    "Explore Tracking Academy's Services showcasing advanced analytics and tracking solutions that empower ecommerce brands to achieve 95%+ data accuracy and optimize campaigns.",
  openGraph: {
    title: "Tracking Academy Services",
    description:
      "Discover how Tracking Academy delivers policy-safe, high-accuracy tracking solutions for ecommerce, with real-world results in Google Analytics, Meta Pixel, and more.",
    images: ["/images/case-studies.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracking Academy Services",
    description:
      "See how Tracking Academy restores accurate tracking for ecommerce brands, with Services on GA4, Meta Pixel, and server-side tracking solutions.",
    images: ["/images/case-studies.png"],
  },
};

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
