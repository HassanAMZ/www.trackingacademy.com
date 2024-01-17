import "@/styles/global.scss";
import "@/styles/tailwind.css";
import localFont from "next/font/local";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/context/AuthContext";
import GTMAnalytics from "@/components/analytics/GTMAnalytics";
import React from "react";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";
import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import { Suspense } from "react";
import CanonicalTag from "@/components/seo/CanonicalTag";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    className={` selection:text-white selection:bg-purple-700 dark:selection:bg-red-700 dark:bg-black bg-white ${Roboto.className}`}>
    <ThemeProvider attribute='class' defaultTheme='dark'>
     <AuthContextProvider>{children}</AuthContextProvider>
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
