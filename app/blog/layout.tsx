import BlogLayout from "@/layouts/BlogLayout";
import { ReactNode } from "react";
import React from "react";
import { PostMetadata } from "@/types/index";
import getBlogsData from "@/components/utils/getBlogsData";

export const metadata = {
 title: "Blog Archieve- ShahzadaAliHassan",
 description: `Blog for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export async function generateStaticParams(): Promise<
 (PostMetadata & { id: string; slug: string })[]
> {
 let allPostsData = await getBlogsData();

 return allPostsData;
}
export default function Layout({ children }: { children: ReactNode }) {
 return (
  <BlogLayout>
   <React.Fragment>{children}</React.Fragment>
  </BlogLayout>
 );
}
