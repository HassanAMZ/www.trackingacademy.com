import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "$300 OFF - 3-Day 'See Every Sale' Tracking System | Restore Meta Tracking",
  description:
    "We help ecommerce brands Fix Facebook's Data Sharing Restrictions and Restore 95%+ Accurate Data for every Key Event in just 3 days, without violating policies.",
  openGraph: {
    title: "$300 OFF - 3-Day 'See Every Sale' Tracking System",
    description:
      "Get back the data your ad account is starving for. Policy-safe solution for banned, blocked, or blacklisted niches with 95%+ tracking accuracy.",
    images: ["/images/social-sharing.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "$300 OFF - 3-Day 'See Every Sale' Tracking System",
    description:
      "Restore 95%+ accurate tracking for ViewContent, Add to Cart, Checkout & Purchase events. $7,600 in free bonuses included.",
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
