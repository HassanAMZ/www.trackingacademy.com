import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Courses - TrackingAcademy",
  description: "Courses Built for Analysts to make life easier.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
