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
import GlobalNavbar from "@/components/global/GlobalNavbar";
import { Poppins } from "next/font/google";

const Roboto = localFont({
 src: "fonts/Roboto/Roboto-Regular.ttf",
 display: "swap",
});

const poppins = Poppins({
 subsets: ["latin"],
 display: "swap",
 variable: "--font-poppins",
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    className={` selection:text-light-primary selection:bg-secondary  bg-dark-primary paragraph-primary text-light-primary ${poppins.className}`}>
    <ThemeProvider attribute='class' defaultTheme='dark'>
     <AuthContextProvider>
      <GlobalNavbar />
      {children}
      <Footer />
     </AuthContextProvider>
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
