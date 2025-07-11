// app/call-booked/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Calculate",
  description: "Find our how many leads and revenue you are losing.",
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
