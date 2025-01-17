import GTMAnalytics from "@/components/analytics/gtm";
import VercelAnalytics from "@/components/analytics/vercel";
import { ThemeProvider } from "@/components/global/theme-provider";
import CanonicalTag from "@/components/seo/CanonicalTag";
import "@/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { ReactNode, Suspense } from "react";
import { AuthContextProvider } from "./context/AuthContext";
export const metadata: Metadata = {
  title: "TrackingAcademy - Top Rated Web Analytics Agency",
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ["/images/social-sharing.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`prose sm:prose-lg md:prose-xl lg:prose-2xl max-w-none ${GeistSans.className}`}
      >
        <body>
          <AuthContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={true}
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
    </ViewTransitions>
  );
}
