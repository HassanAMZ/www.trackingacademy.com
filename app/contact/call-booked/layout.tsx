// app/contact/call-booked/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Booked Successfully | TrackingAcademy - Next Steps",
  description:
    "Your implementation call is confirmed. Here's what to expect after booking your tracking consultation with TrackingAcademy experts.",
  keywords: [
    "call booked",
    "tracking consultation",
    "implementation call",
    "tracking academy consultation",
    "tracking setup call",
    "analytics consultation",
    "tracking optimization call",
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/contact/call-booked`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Call Booked Successfully | TrackingAcademy - Next Steps",
    description:
      "Your implementation call is confirmed. Here's what to expect after booking your tracking consultation with TrackingAcademy experts.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "Call Booked Successfully - TrackingAcademy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Booked Successfully | TrackingAcademy - Next Steps",
    description:
      "Your implementation call is confirmed. Here's what to expect after booking your tracking consultation with TrackingAcademy experts.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/contact/call-booked",
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

export default function MeetingBookedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
