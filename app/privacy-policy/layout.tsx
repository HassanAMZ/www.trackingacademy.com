// app/privacy-policy/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Conversion Confidence",
  description:
    "Learn how Conversion Confidence collects, uses, and protects your data through our privacy policy. Compliant with GDPR, CCPA, and ePrivacy regulations.",
  openGraph: {
    title: "Privacy Policy | Conversion Confidence",
    description:
      "Details on how we collect, store, and use personal and anonymized data across our server-side tracking tools.",
    type: "website",
    images: ["/images/social-sharing.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Conversion Confidence",
    description:
      "Comprehensive details on our data handling practices. Fully GDPR and CCPA compliant.",
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
