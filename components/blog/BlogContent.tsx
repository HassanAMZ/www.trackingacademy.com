"use client";
import React, { useState } from "react";
import SingleBlogCard from "@/components/blog/SingleBlogCard";
import { BlogContentProps } from "@/types/index";
import { Headingxl } from "@/components/typography/Heading";

const BlogContent: React.FC<BlogContentProps> = ({ data, type, rawData }) => {
 const [visiblePosts, setVisiblePosts] = useState(9); // Display first 9 posts by default

 const mainBlogPost = rawData?.find((blog) => blog.blogId === "00057")!;
 const visibleBlogLinks = data.slice(0, visiblePosts).map((post, index) => (
  <React.Fragment key={index}>
   <SingleBlogCard post={post} type={type} />
  </React.Fragment>
 ));

 const loadMoreHandler = () => {
  setVisiblePosts((prevValue) => prevValue + 9); // Load 9 more posts
 };

 return (
  <React.Fragment>
   <SingleBlogCard isMain={true} post={mainBlogPost} type={"blog"} />
   <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2'>
    {visibleBlogLinks}
   </div>
   {visiblePosts < data.length && (
    <button
     onClick={loadMoreHandler}
     className='bg-gray-800 border  py-2 px-4 rounded'>
     <Headingxl>Load More Blogs</Headingxl>
    </button>
   )}
  </React.Fragment>
 );
};

export default BlogContent;
