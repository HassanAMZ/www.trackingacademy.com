import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "$300 Off – 3-Day 'See Your Sales Again' Tracking Setup | Restore Meta Sales Funnel",
  description:
    "Lost tracking due to a restricted domain? Restore AddToCart, Checkout & Purchase tracking in 3 days — or get your money back. Health & Wellness businesses only.",
  openGraph: {
    title: "$300 Off – 3-Day Tracking Setup for Meta Ads",
    description:
      "Get back your sales funnel data (AddToCart, Checkout, Purchase) in 3 days. $300 off for first 10 customers. Includes $3,200 in value-added bonuses.",
    images: ["/images/social-sharing.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "$300 Off – 'See Your Sales Again' Tracking Setup",
    description:
      "Lost tracking on Meta Ads? We restore your sales funnel in 3 days. $3,200 value, now $1,200. First 10 only.",
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
