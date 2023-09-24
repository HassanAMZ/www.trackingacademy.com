// BlogContent.tsx

import React from "react";
import CustomLink from "@/components/mdx/CustomLink";
import { PostMetaData } from "@/types/index";
import Image from "next/image";
import { BlogContentProps } from "@/types/index";

const BlogContent: React.FC<BlogContentProps> = ({ data, type }) => {
 const blogLinks = data.map((post, index) => (
  <CustomLink
   key={index}
   className='backgroundOverlay p-1  hover:dark:bg-gray-100 hover:dark:bg-opacity-10 hover:bg-gray-900 hover:bg-opacity-5'
   href={`/${type}/${post.slug}`}>
   <div className='grid grid-cols-4 sm:gap-2 gap-0 jusitfy-center items-center'>
    <div className='col-span-1 sm:pl-2'>
     <Image
      width={1920}
      height={1080}
      className={`rounded-md border-2 aspect-video`}
      src={post.openGraph.images[0]}
      alt={post.title}
     />
    </div>
    <div className='col-span-3 flex flex-col px-2 sm:px-4'>
     <h3 className='font-semibold text-left  sm:line-clamp-2 line-clamp-1'>
      {post.title}
     </h3>
     <p className=' font-normal text-left line-clamp-2 sm:line-clamp-3 opacity-70 '>
      {post.description}
     </p>
    </div>
   </div>
  </CustomLink>
 ));

 return <div className='grid grid-cols-1 gap-2'>{blogLinks}</div>;
};

export default BlogContent;
