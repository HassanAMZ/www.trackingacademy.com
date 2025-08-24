// app/calculator/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead & Revenue Loss Calculator | TrackingAcademy",
  description:
    "Calculate how many leads and revenue you are losing due to tracking issues. Use our professional calculators to assess the impact of Meta restrictions, iOS updates, and ad blockers on your business.",
  keywords: [
    "lead loss calculator",
    "revenue loss calculator",
    "tracking loss calculator",
    "conversion loss calculator",
    "Meta restrictions calculator",
    "iOS tracking loss calculator",
    "ad blocker impact calculator",
    "ROAS loss calculator",
    "customer acquisition cost calculator",
    "tracking academy calculator",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/calculator`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Lead & Revenue Loss Calculator | TrackingAcademy",
    description:
      "Calculate how many leads and revenue you are losing due to tracking issues. Use our professional calculators to assess the impact of Meta restrictions, iOS updates, and ad blockers on your business.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy - Lead & Revenue Loss Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead & Revenue Loss Calculator | TrackingAcademy",
    description:
      "Calculate how many leads and revenue you are losing due to tracking issues. Use our professional calculators to assess the impact of Meta restrictions, iOS updates, and ad blockers on your business.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/calculator",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
