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

const poppins = localFont({
 src: [
  { path: "fonts/Poppins/Poppins-Black.ttf", weight: "900", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-BlackItalic.ttf",
   weight: "900",
   style: "italic",
  },
  { path: "fonts/Poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-BoldItalic.ttf",
   weight: "700",
   style: "italic",
  },
  {
   path: "fonts/Poppins/Poppins-ExtraBold.ttf",
   weight: "800",
   style: "normal",
  },
  {
   path: "fonts/Poppins/Poppins-ExtraBoldItalic.ttf",
   weight: "800",
   style: "italic",
  },
  {
   path: "fonts/Poppins/Poppins-ExtraLight.ttf",
   weight: "200",
   style: "normal",
  },
  {
   path: "fonts/Poppins/Poppins-ExtraLightItalic.ttf",
   weight: "200",
   style: "italic",
  },
  { path: "fonts/Poppins/Poppins-Italic.ttf", weight: "400", style: "italic" },
  { path: "fonts/Poppins/Poppins-Light.ttf", weight: "300", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-LightItalic.ttf",
   weight: "300",
   style: "italic",
  },
  { path: "fonts/Poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-MediumItalic.ttf",
   weight: "500",
   style: "italic",
  },
  { path: "fonts/Poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-SemiBold.ttf",
   weight: "600",
   style: "normal",
  },
  {
   path: "fonts/Poppins/Poppins-SemiBoldItalic.ttf",
   weight: "600",
   style: "italic",
  },
  { path: "fonts/Poppins/Poppins-Thin.ttf", weight: "100", style: "normal" },
  {
   path: "fonts/Poppins/Poppins-ThinItalic.ttf",
   weight: "100",
   style: "italic",
  },
 ],
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
  <html lang='en' className={poppins.className}>
   <body className='selection:text-complementary paragraph-primary selection:bg-accent text-dominant bg-complementary'>
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
