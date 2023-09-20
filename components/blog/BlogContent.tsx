// BlogContent.tsx

import React from "react";
import Link from "next/link";
import { PostMetaData } from "@/types/index";
import Image from "next/image";
import { BlogContentProps } from "@/types/index";

const BlogContent: React.FC<BlogContentProps> = ({ data, type }) => {
 const blogLinks = data.map((post, index) => (
  <Link
   key={index}
   className='rounded-md shadow-md'
   href={`/${type}/${post.slug}`}>
   <div className='grid sm:grid-cols-4 gap-2 jusitfy-center items-center'>
    <div className='col-span-1'>
     <Image
      width={1920}
      height={1080}
      className={`rounded-md border-2 aspect-video`}
      src={post.openGrapgh.images[0]}
      alt={post.title}
     />
    </div>
    <div className='sm:col-span-3 flex flex-col gap-2 px-3 sm:px-4 py-1'>
     <h3 className='font-semibold line-clamp-3 text-left'>{post.title}</h3>
     <p className='line-clamp-3 font-normal text-left text-sm opacity-70'>
      {post.description}
     </p>
    </div>
   </div>
  </Link>
 ));

 return (
  <div className='grid grid-cols-2 sm:grid-cols-1 gap-2'>{blogLinks}</div>
 );
};

export default BlogContent;
