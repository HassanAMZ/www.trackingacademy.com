import React from "react";
import { MetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";

// Usage in your component
const BlogHeader: React.FC<MetadataProps> = ({ metadata }) => {
 const schema = generateSchema(metadata);
 return (
  <section className='py-3'>
   <Script
    id='blog-schema'
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />
   <div className='rounded-md text-left sm:text-center dark:bg-gray-1000 bg-gray-200 bg-opacity-10 dark:bg-opacity-10 shadow-md py-5 sm:py-12 px-2'>
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
