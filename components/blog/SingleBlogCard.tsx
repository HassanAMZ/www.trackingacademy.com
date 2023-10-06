import React from "react";
import {
 Heading2xl,
 Heading3xl,
 Paragraphmd,
} from "@/components/typography/Heading";
import ContainerLayout from "@/layouts/ContainerLayout";
import { SingleBlogCardProps } from "@/types/index";
import Link from "next/link";
import generateDarkColor from "@/components/utils/generateDarkColor";

const SingleBlogCard: React.FC<SingleBlogCardProps> = ({ post, type }) => {
 return (
  <div className='flex '>
   <Link href={`/${type}/${post.slug}`} className=''>
    <section className='grid  backgroundOverlay h-full w-full'>
     <div className='flex '>
      <div
       className='bg-cover bg-center relative py-8 w-full rounded-t-md'
       style={{
        backgroundImage: `url(${post.openGraph.images[0]})`,
       }}>
       <div className='relative z-10 p-3'>
        <Heading3xl className=' line-clamp-2'>{post.title}</Heading3xl>
       </div>
       <div
        className='absolute inset-0 opacity-30 rounded-t-md'
        style={{ backgroundColor: generateDarkColor() }}></div>
      </div>
     </div>
     <div>
      <div className='opacity-80 p-3'>
       <Paragraphmd className=' line-clamp-4'>{post.description}</Paragraphmd>
      </div>
     </div>
     <div className='w-full flex items-center justify-center p-2'></div>
    </section>
   </Link>
  </div>
 );
};

export default SingleBlogCard;
