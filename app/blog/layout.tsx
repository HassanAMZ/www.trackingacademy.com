import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import GiscusComments from "@/components/mdx/GiscusComents";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Archive | TrackingAcademy - Expert Insights on Conversion Tracking & Analytics",
  description:
    "Expert blog for web analysts and marketing professionals. Discover strategies to restore 95% accurate tracking, overcome iOS restrictions, and maximize ad ROI for health & wellness businesses.",
  keywords: [
    "conversion tracking blog",
    "analytics blog",
    "marketing analytics",
    "Meta pixel tracking",
    "GA4 tracking",
    "GTM blog",
    "iOS tracking solutions",
    "ad blocker bypass",
    "CAPI setup",
    "data layer implementation",
    "cross-domain tracking",
    "consent mode compliance",
    "offline conversion tracking",
    "ROAS optimization",
    "customer acquisition cost reduction",
    "health & wellness marketing",
    "tracking academy blog",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/blog`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Blog Archive | TrackingAcademy - Expert Insights on Conversion Tracking & Analytics",
    description:
      "Expert blog for web analysts and marketing professionals. Discover strategies to restore 95% accurate tracking, overcome iOS restrictions, and maximize ad ROI for health & wellness businesses.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Blog - Expert insights on conversion tracking and analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Archive | TrackingAcademy - Expert Insights on Conversion Tracking & Analytics",
    description:
      "Expert blog for web analysts and marketing professionals. Discover strategies to restore 95% accurate tracking, overcome iOS restrictions, and maximize ad ROI for health & wellness businesses.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <GiscusComments />
      <Footer />
    </React.Fragment>
  );
}
