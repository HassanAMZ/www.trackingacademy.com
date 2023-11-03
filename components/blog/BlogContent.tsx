import React, { useState } from "react";
import SingleBlogCard from "@/components/blog/SingleBlogCard";
import { BlogContentProps } from "@/types/index";
import { Headingxl } from "@/components/typography/Heading";

const BlogContent: React.FC<BlogContentProps> = ({ data, type, rawData }) => {
 const [visiblePosts, setVisiblePosts] = useState(10); // Display first 9 posts by default

 const latestPost = data[0]; // Get the latest post
 const remainingPosts = data.slice(1, visiblePosts); // Exclude the latest post

 const loadMoreHandler = () => {
  setVisiblePosts((prevValue) => prevValue + 10); // Load 9 more posts
 };

 return (
  <React.Fragment>
   <SingleBlogCard post={latestPost} type={type} isMain={true} />
   <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>
    {remainingPosts.map((post, index) => (
     <React.Fragment key={index}>
      <SingleBlogCard post={post} type={type} />
     </React.Fragment>
    ))}
   </div>
   {visiblePosts < data.length && (
    <button
     onClick={loadMoreHandler}
     className='dark:bg-gray-800 bg-gray-100 backgroundOverlay border-2 shadow-md  py-2 px-4 rounded'>
     <Headingxl className='text-center'>Load More Blogs</Headingxl>
    </button>
   )}
  </React.Fragment>
 );
};

export default BlogContent;
