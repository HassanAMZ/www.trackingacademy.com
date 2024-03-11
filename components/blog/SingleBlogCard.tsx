"use client";

import React, { useState } from "react";

import Link from "next/link";
import generateBrightColor from "utils/generateBrightColor";
import formatDate from "@/components/seo/formatDate";
import { SingleBlogCardProps } from "@/types/index";
import { GTMSelectBlogEvent } from "../analytics/GTMEvents";

const BlogCard: React.FC<SingleBlogCardProps> = ({
 post,
 type,
 isMain = false,
 className = "",
}) => {
 const [isClicked, setIsClicked] = useState(false);

 const handleLinkClick = () => {
  setIsClicked(true);
 };
 return (
  <React.Fragment>
   {post && (
    <div className={`shadow-md   ${className || ""}`}>
     <Link href={`/${type}/${post.slug}`} onClick={handleLinkClick}>
      <section className='grid h-full w-full rounded-lg'>
       <>
        <div
         className='p-4'
         style={{
          backgroundColor: generateBrightColor(0.15),
          position: "relative",
         }}>
         {isMain && (
          <div className='absolute top-0 right-0 bg-accent text-complementary px-2 py-1 rounded-lg'>
           New
          </div>
         )}
         <h2 className='line-clamp-2 title-tertiary'>{post.title}</h2>
        </div>
        <div className='p-4'>
         <p className='line-clamp-3 text-left paragraph-primary'>
          {post.description}
         </p>
         <p className='py-4 text-left paragraph-secondary'>
          {formatDate(post.date)}
         </p>
        </div>
       </>
      </section>
     </Link>
     {isClicked && <GTMSelectBlogEvent metadata={post} />}
    </div>
   )}
  </React.Fragment>
 );
};

export default BlogCard;
