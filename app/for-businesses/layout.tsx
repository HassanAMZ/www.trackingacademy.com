import Navbar from "@/components/global/navbar";
import React, { ReactNode } from "react";

export const metadata = {
  title: "For Businesses - TrackingAcademy",
  description: `Services, Training and more.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
