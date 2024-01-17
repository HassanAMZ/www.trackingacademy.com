import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export const metadata = {
 title: "TrackingAcademy - For Agencies ",
 description: `Services for Agencies`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}
