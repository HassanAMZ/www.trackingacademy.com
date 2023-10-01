import React, { ReactNode } from "react";
import reverseFormatString from "@/components/utils/reverseFormatString";

export async function generateMetadata({ params }: any) {
 return {
  title: `${reverseFormatString(params.blog)} Archieve- ShahzadaAliHassan`,
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
   images: ["/images/social-sharing.png"],
  },
 };
}

export default async function Layout({ children }: { children: ReactNode }) {
 return <React.Fragment>{children}</React.Fragment>;
}
