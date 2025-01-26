import Navbar from "@/components/global/navbar";
import React, { ReactNode } from "react";

export const metadata = {
  title: "For Freelancers - TrackingAcademy",
  description: `Courses, Training and more.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
