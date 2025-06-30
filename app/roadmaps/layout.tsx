import React, { ReactNode } from "react";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export const metadata = {
  title: "Roadmaps - TrackingAcademy",
  description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <>{children}</>
      <Footer />
    </React.Fragment>
  );
}
