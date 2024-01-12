import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export const metadata = {
 title: "Client's Portfolio - ShahzadaAliHassan",
 description: `Become a part of the clientele and master your data`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
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
