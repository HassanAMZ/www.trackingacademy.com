import { ReactNode, FC } from "react";
import { BlogLayoutProps } from "@/types/index";
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import GiscusComments from "../mdx/GiscusComents";
import {
 Heading2xl,
 Headingxl,
 Paragraphmd,
 Paragraphsm,
} from "../typography/Heading";
import React from "react";
import getBlogsData from "@/utils/getBlogsData";

const BlogLayout: FC<BlogLayoutProps> = async ({
 children,
 className,
 metadata,
}) => {
 let allPostsData = await getBlogsData();

 const shuffledPosts = allPostsData.sort(() => 0.5 - Math.random());
 const randomPosts = shuffledPosts.slice(0, 4);
 return (
  <ContainerLayout className={`text-left ${className || ""}`}>
   {metadata && (
    <div className='blog-metadata'>
     <h1>{metadata.title}</h1>
     <span>{metadata.date}</span>
     {/* You can expand this to display other metadata details as required */}
    </div>
   )}
   <main className=''>{children}</main>

   <GiscusComments />

   <div className='pt-4'>
    <Heading2xl className=''>Other Related Blogs</Heading2xl>
    <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
     {randomPosts.map((blog) => (
      <Link
       key={blog.blogId}
       className='backgroundOverlay p-4 border '
       href={`/blog/${blog.slug}`}>
       <Headingxl>{blog.title}</Headingxl>
       <Paragraphsm className='line-clamp-2 text-opacity-75'>
        {blog.description}
       </Paragraphsm>
      </Link>
     ))}
    </div>
   </div>
  </ContainerLayout>
 );
};

export default BlogLayout;
