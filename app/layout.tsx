import ClarityInit from "@/components/analytics/clarity";
import GTMAnalytics from "@/components/analytics/gtm";
import VercelAnalytics from "@/components/analytics/vercel";
import FloatingCalendarWidget from "@/components/contact/floating-calendar-widget";
import { ThemeProvider } from "@/components/global/theme-provider";

import "@/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import AuthWrapper from "./context/AuthContextWrapper";

export const metadata: Metadata = {
  title: "TrackingAcademy - Restore 95% Accurate Tracking for Health & Wellness Businesses",
  description:
    "Data restrictions, iOS updates, and ad blockers block up to 50% of your conversions. We restore up to 95% accurate tracking, cut customer acquisition costs by 30%, and show you exactly which ads drive revenue.",
  keywords: [
    "tracking solutions",
    "health & wellness marketing",
    "conversion tracking",
    "Meta pixel tracking",
    "GA4 tracking",
    "iOS tracking issues",
    "ad blocker bypass",
    "CAPI setup",
    "data layer implementation",
    "cross-domain tracking",
    "consent mode compliance",
    "offline conversion tracking",
    "marketing analytics",
    "ROAS optimization",
    "customer acquisition cost reduction",
  ],
  authors: [
    {
      name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    },
  ],
  creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
  publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "TrackingAcademy - Restore 95% Accurate Tracking for Health & Wellness Businesses",
    description:
      "Data restrictions, iOS updates, and ad blockers block up to 50% of your conversions. We restore up to 95% accurate tracking, cut customer acquisition costs by 30%, and show you exactly which ads drive revenue.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy - Professional tracking solutions for health & wellness businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackingAcademy - Restore 95% Accurate Tracking for Health & Wellness Businesses",
    description:
      "Data restrictions, iOS updates, and ad blockers block up to 50% of your conversions. We restore up to 95% accurate tracking, cut customer acquisition costs by 30%, and show you exactly which ads drive revenue.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  classification: "Business Services",
  referrer: "origin-when-cross-origin",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    "application-name": process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.className} `} suppressHydrationWarning>
      <body>
        <AuthWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Suspense>
            <GTMAnalytics />
            <ClarityInit />
            <VercelAnalytics />
            <FloatingCalendarWidget />
            <SpeedInsights />
          </Suspense>
        </AuthWrapper>
      </body>
    </html>
  );
}
