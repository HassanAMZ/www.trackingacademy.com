"use client";

import React from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";
import BreadCrumbs from "./BreadCrumbs";
import Image from "next/image";
import YoutubeEmbed from "../mdx/YoutubeEmbed";

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
 const schema = generateSchema(metadata);
 const backgroundImage = metadata.openGraph.images[0]; // Assuming the first image is the background image

 return (
  <section className='pb-2'>
   <GTMBlogViewEvent metadata={metadata} />
   <BreadCrumbs />
   <Script
    id='blog-schema'
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />
   <div className='rounded-lg'>
    <h1 className='py-2 text-2xl font-bold '>{metadata.title}</h1>
    <p className='text-sm'>
     by ShahzadaAliHassan - {formatDate(metadata.date)}
    </p>
   </div>
   {metadata.embedId === "" && (
    <Image
     src={backgroundImage}
     alt={"blog image"}
     width={1920}
     height={1080}
     className='rounded-lg'
    />
   )}
   {metadata.embedId !== "" && <YoutubeEmbed embedId={metadata.embedId} />}
  </section>
 );
};

export default BlogHeader;
