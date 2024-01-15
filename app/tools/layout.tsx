import { ReactNode } from "react";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

export const metadata = {
 title: "Tools - TrackingAcademy",
 description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
 return (
  <ContainerLayout>
   <NavBar />
   {children}
   <Footer />
  </ContainerLayout>
 );
}
