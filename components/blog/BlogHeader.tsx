import React, { useEffect } from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";
import { Heading3xl } from "@/components/typography/Heading";

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
 const schema = generateSchema(metadata);

 return (
  <section className='pb-2'>
   <GTMBlogViewEvent metadata={metadata} />
   <Script
    id='blog-schema'
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />
   <div className='rounded-md text-left sm:text-center backgroundOverlay py-5 sm:py-12 px-2'>
    <Heading3xl className='py-2'>{metadata.title}</Heading3xl>
    <div className='text-gray-600 dark:text-gray-100'>
     <span> by ShahzadaAliHassan - {formatDate(metadata.date)}</span>
    </div>
   </div>
  </section>
 );
};

export default BlogHeader;
