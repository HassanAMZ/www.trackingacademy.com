import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatBot - OpenAI Bots built for Sales Teams",
  description: `Helping the team to get things done faster`,
  openGraph: {
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
