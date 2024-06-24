import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";
import React from "react";
import { ReactNode } from "react";

export const metadata = {
 title: "TrackingAcademy - Offers Page",
 description: `Offers`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function Layout({ children }: { children: ReactNode }) {
 return (
  <main className='text-xl leading-normal bg-dominant text-complementary '>
   {children}
  </main>
 );
}
