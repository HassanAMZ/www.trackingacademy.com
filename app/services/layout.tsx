import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";
import { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
 title: "Services we Offer - ShahzadaAliHassan",
 description: `helping businesses improve their data using better tracking practices`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },

 robots: "noindex",
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
