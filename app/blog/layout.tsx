import BlogLayout from "@/components/blog/BlogLayout";
import { ReactNode } from "react";
import React from "react";
import { PostMetadata } from "@/types/index";
import getBlogsData from "utils/getBlogsData";
import { AuthContextProvider } from "@/context/AuthContext";

export const metadata = {
 title: "Blog Archieve- TrackingAcademy",
 description: `Blog for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export async function generateStaticParams(): Promise<
 (PostMetadata & { id: string; slug: string })[]
> {
 let allPostsData = await getBlogsData("app/blog");

 return allPostsData;
}
export default function Layout({ children }: { children: ReactNode }) {
 return <BlogLayout>{children}</BlogLayout>;
}
