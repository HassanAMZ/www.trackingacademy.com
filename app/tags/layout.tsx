// 5. Tags Archive Page
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tags Archive - TrackingAcademy | Web Analytics & Marketing Resources",
  description:
    "Browse our comprehensive collection of web analytics and marketing tags. Find expert resources, tutorials, and insights for tracking optimization and digital marketing success.",
  openGraph: {
    title: "Tags Archive - TrackingAcademy Resources",
    description:
      "Explore categorized resources for web analysts and marketing professionals. Access expert guides, tutorials, and best practices for tracking and analytics.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Tags Archive",
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    locale: "en_US",
    siteName: "TrackingAcademy",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Shahzada_A",
    creator: "@Shahzada_A",
    title: "Tags Archive - TrackingAcademy",
    description:
      "Browse categorized web analytics and marketing resources. Expert guides and tutorials for tracking optimization.",
    images: [
      {
        url: "/images/social-sharing.png",
        alt: "TrackingAcademy Tags Archive",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    noarchive: true,
  },
  category: "Web Analytics Education",
  classification: "Educational Resources",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
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
