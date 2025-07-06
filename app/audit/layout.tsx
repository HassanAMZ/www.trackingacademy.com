import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Website Audits | Tracking Academy",
  description:
    "Comprehensive website tracking and analytics audits to improve your data collection",
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
