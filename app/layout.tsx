import "@/styles/global.scss";
import "@/styles/tailwind.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/context/AuthContext";
import GTMAnalytics from "@/components/analytics/GTMAnalytics";
import React from "react";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Suspense } from "react";
import CanonicalTag from "@/components/seo/CanonicalTag";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar/Navbar";

const Roboto = localFont({
 src: "fonts/Roboto/Roboto-Regular.ttf",
 display: "swap",
});

export const metadata = {
 title: "TrackingAcademy - Top Rated Web Analytics Agency",
 description: `Blog for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function RootLayout({ children }: { children: ReactNode }) {
 return (
  <html lang='en'>
   <body
    className={` selection:text-light-primary selection:bg-secondary dark:selection:bg-secondary dark:bg-dark-primary bg-light-primary text-dark-primary dark:text-light-primary ${Roboto.className}`}>
    <ThemeProvider attribute='class' defaultTheme='dark'>
     {children}
    </ThemeProvider>

    <Suspense>
     <GTMAnalytics />
     <VercelAnalytics />
     <CanonicalTag />
     <SpeedInsights />
    </Suspense>
   </body>
  </html>
 );
}
