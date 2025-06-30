import React, { ReactNode } from "react";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export const metadata = {
  title: "For Freelancers - TrackingAcademy",
  description: `Courses, Training and more.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
