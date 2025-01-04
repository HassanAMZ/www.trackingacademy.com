import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
