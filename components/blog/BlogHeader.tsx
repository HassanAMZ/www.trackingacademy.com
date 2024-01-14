"use client";

import React, { useEffect } from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";
import { Heading6xl, Paragraphmd } from "@/components/typography/Heading";
import BreadCrumbs from "./BreadCrumbs";

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
   <div className='rounded-md text-left sm:!text-center backgroundOverlay py-5 sm:py-12 px-4'>
    <Heading6xl className='py-2 sm:!text-center !text-4xl'>
     {metadata.title}
    </Heading6xl>
    <Paragraphmd className='text-gray-600 dark:text-gray-300'>
     by ShahzadaAliHassan - {formatDate(metadata.date)}
    </Paragraphmd>
   </div>
   <BreadCrumbs />
  </section>
 );
};

export default BlogHeader;
