import React, { ReactNode } from "react";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
