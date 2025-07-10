// app/call-booked/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Booked — Here's What's Next",
  description: "Your implementation call is confirmed. Here's what to expect after booking.",
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
