import BlogLayout from "@/components/blog/BlogLayout";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Tags Archieve- TrackingAcademy",
 description: `Tag Pages for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
 robots: "noindex",
};

export default function Layout({ children }: { children: ReactNode }) {
 return (
  <BlogLayout>
   <React.Fragment>{children}</React.Fragment>
  </BlogLayout>
 );
}
