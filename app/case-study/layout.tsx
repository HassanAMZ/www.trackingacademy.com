import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export const metadata: Metadata = {
  title: "Tracking Academy Case Studies | Analytics & Tracking Solutions",
  description:
    "Explore Tracking Academy's case studies showcasing advanced analytics and tracking solutions that empower ecommerce brands to achieve 95%+ data accuracy and optimize campaigns.",
  openGraph: {
    title: "Tracking Academy Case Studies",
    description:
      "Discover how Tracking Academy delivers policy-safe, high-accuracy tracking solutions for ecommerce, with real-world results in Google Analytics, Meta Pixel, and more.",
    images: ["/images/case-studies.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracking Academy Case Studies",
    description:
      "See how Tracking Academy restores accurate tracking for ecommerce brands, with case studies on GA4, Meta Pixel, and server-side tracking solutions.",
    images: ["/images/case-studies.png"],
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
