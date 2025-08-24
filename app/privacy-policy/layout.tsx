// app/privacy-policy/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | TrackingAcademy",
  description:
    "Learn how TrackingAcademy collects, uses, and protects your data through our privacy policy. Compliant with GDPR, CCPA, and ePrivacy regulations.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "ePrivacy compliance",
    "tracking academy privacy",
    "data handling practices",
    "user privacy",
    "cookie policy",
    "data security",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/privacy-policy`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Privacy Policy | TrackingAcademy",
    description:
      "Details on how we collect, store, and use personal and anonymized data across our server-side tracking tools.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Privacy Policy - Data protection and compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TrackingAcademy",
    description:
      "Comprehensive details on our data handling practices. Fully GDPR and CCPA compliant.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
