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
   <div className='rounded-md text-left sm:text-center bg-gray-900 bg-opacity-5 shadow-md py-5 sm:py-12 px-2'>
    <h1 className='text-3xl sm:text-4xl leading-none font-bold tracking-tighter font-bold'>
     {metadata.title}
    </h1>
    <div className='text-gray-600'>
     <span> {formatDate(metadata.date)}</span>
     {/*  <span className='ml-4'>|</span>
    <span className='ml-4'>Tags: {metadata.tags.join(", ")}</span> */}
    </div>
   </div>
  </section>
 );
};

export default BlogHeader;
