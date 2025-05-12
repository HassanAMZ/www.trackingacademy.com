// app/terms-of-service/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Conversion Confidence",
  description:
    "Review the terms that govern your use of Conversion Confidence’s tracking tools and services. Transparent and straightforward policies.",
  openGraph: {
    title: "Terms of Service | Conversion Confidence",
    description:
      "Read our full terms and conditions for using our server-side tracking suite and analytics services.",
    type: "website",
    images: ["/images/social-sharing.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Conversion Confidence",
    description:
      "Understand the rules and agreements for using Conversion Confidence tracking and analytics tools.",
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
