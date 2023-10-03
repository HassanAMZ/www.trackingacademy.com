import React, { ReactNode } from "react";
import reverseFormatString from "@/components/utils/reverseFormatString";
import getBlogsData from "@/components/utils/getBlogsData";

export async function generateMetadata({ params }: any) {
 return {
  title: `${reverseFormatString(params.blog)} Archieve- ShahzadaAliHassan`,
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
   images: ["/images/social-sharing.png"],
  },
 };
}

export async function generateStaticParams(): Promise<{ blog: string }[]> {
 const blogs = await getBlogsData();

 const seenBlogs = new Set();
 const blogSlugs = blogs
  .map((blog) => {
   const parts = blog.slug.split("/");
   return { blog: parts[parts.length - 2] }; // Taking the second last part of the slug after breaking at "/"
  })
  .filter((blogObj) => {
   if (!seenBlogs.has(blogObj.blog)) {
    seenBlogs.add(blogObj.blog);
    return true; // keep the object
   }
   return false; // remove the object
  });

 return blogSlugs;
}

export default async function Layout({ children }: { children: ReactNode }) {
 return <React.Fragment>{children}</React.Fragment>;
}
