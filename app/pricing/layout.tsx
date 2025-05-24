// app/pricing/layout.tsx
import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing | Conversion Confidence",
  description:
    "Transparent pricing for Conversion Confidence's tracking audits and implementations. Choose a package that fits your growth stage, from startups to enterprise.",
  openGraph: {
    title: "Pricing | Conversion Confidence",
    description:
      "Explore our tracking service plans—from basic audits to full server-side compliance setups. See what’s included and pick the right plan.",
    type: "website",
    images: ["/images/social-sharing.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Conversion Confidence",
    description:
      "Get complete visibility into our tracking solutions pricing. No surprises. Just high-impact solutions for your conversion tracking.",
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
