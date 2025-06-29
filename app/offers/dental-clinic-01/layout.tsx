// 4. Dental Clinic Meta Pixel Page
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fix Meta Pixel Data Sharing Restrictions for Dental Clinics | Restore Your Tracking",
  description:
    "Dental clinics losing ad performance due to Meta Pixel data sharing restrictions? Get expert help to restore your tracking, maintain HIPAA compliance, and recover your ROAS within 3 days.",
  keywords: [
    "Meta Pixel dental restrictions",
    "dental clinic Facebook ads",
    "HIPAA compliant tracking",
    "dental marketing restrictions",
    "Meta Pixel health restrictions",
    "dental advertising compliance",
    "blocked Meta Pixel events",
    "dental business ad targeting",
    "GDPR Meta Pixel compliance",
    "dental practice tracking solutions",
  ],
  openGraph: {
    title: "Fix Meta Pixel Restrictions for Dental Clinics",
    description:
      "Restore blocked Meta Pixel tracking for dental clinics. Expert compliance solutions to recover ad performance while maintaining HIPAA and GDPR compliance.",
    images: [
      {
        url: "/images/hero/data-sharing-restrcition-03.png",
        width: 1200,
        height: 630,
        alt: "Meta Pixel Dental Restrictions Solution",
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    locale: "en_US",
    siteName: "Dental Clinic Meta Pixel Solutions",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Shahzada_A",
    creator: "@Shahzada_A",
    title: "Fix Meta Pixel Dental Restrictions",
    description:
      "Expert solutions for dental clinics facing Meta Pixel data sharing restrictions. Restore tracking while maintaining compliance.",
    images: [
      {
        url: "/images/hero/data-sharing-restrcition-03.png",
        alt: "Meta Pixel Dental Restrictions Solution",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Dental Marketing",
  classification: "Business Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
