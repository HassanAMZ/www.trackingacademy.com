"use client";

import React, { useState } from "react";
import {
 Heading3xl,
 Heading2xl,
 Headingxl,
 Paragraphsm,
 Paragraphxs,
 Heading5xl,
} from "@/components/typography/Heading";
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
     <Link
      href={`/${type}/${post.slug}`}
      className=''
      onClick={handleLinkClick}>
      <section className='grid backgroundOverlay h-full w-full'>
       <>
        <div
         className={`backgroundOverlay !shadow-none border-b `}
         style={{
          backgroundColor: generateBrightColor(0.15),
          position: "relative",
         }}>
         {isMain && (
          <div className='absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-md'>
           New
          </div>
         )}
         <Heading2xl className='line-clamp-2 !p-0 m-4'>{post.title}</Heading2xl>
        </div>
        <div className='textOpacity80 border-md'>
         <Paragraphsm className='line-clamp-3 text-left !p-0 m-4'>
          {post.description}
         </Paragraphsm>
         <Paragraphxs className='p-4 text-left'>
          {formatDate(post.date)} - ShahzadaAliHassan
         </Paragraphxs>
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
