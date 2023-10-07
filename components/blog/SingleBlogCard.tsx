import React from "react";
import { Heading3xl, Paragraphsm } from "@/components/typography/Heading";
import Link from "next/link";
import generateDarkColor from "@/components/utils/generateDarkColor";
import formatDate from "@/components/seo/formatDate";
import { SingleBlogCardProps } from "@/types/index";

const BlogCard: React.FC<SingleBlogCardProps> = ({
 post,
 type,
 isMain = false,
 className = "",
}) => {
 const renderContent = () => (
  <>
   <div
    className={`${
     isMain ? "min-w-fit" : "w-full"
    } bg-cover bg-center relative py-8 rounded${isMain ? "" : "-t"}-md`}
    style={{
     backgroundImage: `url(${post.openGraph.images[0]})`,
    }}>
    <div className='relative z-10 p-3'>
     <Heading3xl className='line-clamp-2 min-w-fit'>{post.title}</Heading3xl>
    </div>
    <div
     className={`absolute inset-0 opacity-30 rounded${isMain ? "" : "-t"}-md`}
     style={{ backgroundColor: generateDarkColor() }}></div>
   </div>
   <div className='textOpacity80 p-6'>
    <Paragraphsm className='line-clamp-4'>{post.description}</Paragraphsm>
    <Paragraphsm className='md:pt-6 pt-4 pb-2 flex justify-between'>
     <span> {formatDate(post.date)} - ShahzadaAliHassan</span>
    </Paragraphsm>
   </div>
  </>
 );

 return (
  <div className={`${isMain ? "hidden md:flex" : ""} ${className}`}>
   <Link href={`/${type}/${post.slug}`} className=''>
    <section
     className={`${isMain ? "flex" : "grid"} backgroundOverlay h-full w-full`}>
     {renderContent()}
    </section>
   </Link>
  </div>
 );
};

export default BlogCard;
