import React, { useEffect } from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
 const schema = generateSchema(metadata);

 return (
  <section className='py-3'>
   <GTMBlogViewEvent metadata={metadata} />
   <Script
    id='blog-schema'
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />
   <div className='rounded-md text-left sm:text-center backgroundOverlay py-5 sm:py-12 px-2'>
    <h2 className='text-3xl py-2 leading-none font-semibold tracking-tighter'>
     {metadata.title}
    </h2>
    <div className='text-gray-600 dark:text-gray-100'>
     <span> {formatDate(metadata.date)}</span>
     {/*  <span className='ml-4'>|</span>
    <span className='ml-4'>Tags: {metadata.tags.join(", ")}</span> */}
    </div>
   </div>
  </section>
 );
};

export default BlogHeader;
