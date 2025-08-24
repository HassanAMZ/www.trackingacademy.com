// 5. Tags Archive Page
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tags Archive | TrackingAcademy - Web Analytics & Marketing Resources",
  description:
    "Browse our comprehensive collection of web analytics and marketing tags. Find expert resources, tutorials, and insights for tracking optimization and digital marketing success.",
  keywords: [
    "web analytics tags",
    "marketing tags",
    "tracking optimization",
    "digital marketing resources",
    "analytics tutorials",
    "tracking academy tags",
    "marketing insights",
    "web analytics resources",
    "conversion tracking guides",
    "ROAS optimization resources",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/tags`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Tags Archive | TrackingAcademy - Web Analytics & Marketing Resources",
    description:
      "Explore categorized resources for web analysts and marketing professionals. Access expert guides, tutorials, and best practices for tracking and analytics.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Tags Archive - Web analytics and marketing resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tags Archive | TrackingAcademy - Web Analytics & Marketing Resources",
    description:
      "Browse categorized web analytics and marketing resources. Expert guides and tutorials for tracking optimization.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/tags",
  },
  robots: {
    index: false,
    follow: true,
    noarchive: true,
  },
  category: "Web Analytics Education",
  classification: "Educational Resources",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
