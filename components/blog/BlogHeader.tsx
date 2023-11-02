import React, { useEffect } from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";
import {
 Heading2xl,
 Heading3xl,
 Heading4xl,
 Paragraphsm,
} from "@/components/typography/Heading";

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
    <Heading3xl className='py-2 sm:!text-center  '>{metadata.title}</Heading3xl>
    <div className='text-gray-600 dark:text-gray-300'>
     <Paragraphsm>
      by ShahzadaAliHassan - {formatDate(metadata.date)}
     </Paragraphsm>
    </div>
   </div>
  </section>
 );
};

export default BlogHeader;
