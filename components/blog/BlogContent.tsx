// BlogContent.tsx

import React from "react";
import Link from "next/link";
import { PostMetaData } from "@/types/index";
import Image from "next/image";

interface BlogContentProps {
 data: (PostMetaData & { id: string; slug: string })[];
}

const BlogContent: React.FC<BlogContentProps> = ({ data }) => {
 const blogLinks = data.map((post, index) => (
  <Link
   key={index}
   className='rounded-md p-3 sm:p-4 shadow-md'
   href={`/blog/${post.slug}`}>
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
    <div className='sm:col-span-3 flex flex-col gap-2'>
     <h3 className='font-semibold line-clamp-2 text-left'>{post.title}</h3>
     <p className='sm:line-clamp-3 line-clamp-2 font-normal text-sm'>
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
