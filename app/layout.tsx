import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import Navbar from "@/components/global/navbar";
import { AuthContextProvider } from "./context/AuthContext";
import VercelAnalytics from "@/components/analytics/vercel";
import CanonicalTag from "@/components/seo/CanonicalTag";
import { ReactNode, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GTMAnalytics from "@/components/analytics/gtm";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackingAcademy - Top Rated Web Analytics Agency",
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ["/images/social-sharing.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <AuthContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <Suspense>
            <GTMAnalytics />
            <VercelAnalytics />
            <CanonicalTag />
            <SpeedInsights />
          </Suspense>
        </AuthContextProvider>
      </body>
    </html>
  );
}
