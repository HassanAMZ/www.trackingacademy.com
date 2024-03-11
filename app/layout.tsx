import "@/styles/global.scss";
import "@/styles/tailwind.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/context/AuthContext";
import GTMAnalytics from "@/components/analytics/GTMAnalytics";
import React from "react";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import CanonicalTag from "@/components/seo/CanonicalTag";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GlobalNavbar from "@/components/global/GlobalNavbar";
import { Inter, Roboto_Mono, Poppins } from "next/font/google";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

const poppins = Poppins({
 variable: "--font-poppins",
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 subsets: ["latin"],
 display: "swap",
});

const roboto_mono = Roboto_Mono({
 subsets: ["latin"],
 variable: "--font-roboto-mono",
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
  <html
   lang='en'
   className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable}`}>
   <body className='selection:text-complementary selection:bg-accent paragraph-primary '>
    <AuthContextProvider>
     <GlobalNavbar />
     {children}
     <Footer />
    </AuthContextProvider>

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
