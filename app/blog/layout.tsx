import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import GiscusComments from "@/components/mdx/GiscusComents";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Blog Archieve- TrackingAcademy",
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ["/images/social-sharing.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="text-base">{children}</main>
      <GiscusComments />
      <Footer />
    </React.Fragment>
  );
}
