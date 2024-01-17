import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";
import React from "react";
import { ReactNode } from "react";

export const metadata = {
 title: "TrackingAcademy - Top Rated Web Analytics Agency",
 description: `Blog for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}
