import ClarityInit from "@/components/analytics/clarity";
import GTMAnalytics from "@/components/analytics/gtm";
import VercelAnalytics from "@/components/analytics/vercel";
import FloatingCalendarWidget from "@/components/contact/floating-calendar-widget";
import { ThemeProvider } from "@/components/global/theme-provider";
import CanonicalTag from "@/components/seo/CanonicalTag";
import "@/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode, Suspense, unstable_ViewTransition as ViewTransition } from "react";
import AuthWrapper from "./context/AuthContextWrapper";

export const metadata: Metadata = {
  title: "TrackingAcademy - Top Rated Web Analytics Agency",
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ["/images/social-sharing.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransition>
      <html lang="en" className={GeistSans.className} suppressHydrationWarning>
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
              <CanonicalTag />
              <FloatingCalendarWidget />
              <SpeedInsights />
            </Suspense>
          </AuthWrapper>
        </body>
      </html>
    </ViewTransition>
  );
}
