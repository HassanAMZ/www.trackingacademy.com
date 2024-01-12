import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
 return (
  <ContainerLayout>
   <NavBar />
   {children}
   <Footer />
  </ContainerLayout>
 );
}
