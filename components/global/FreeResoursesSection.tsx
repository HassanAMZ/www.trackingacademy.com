"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeadingTextsProps, LinksGroupProps } from "@/types/index";
import { Heading4xl, Paragraphlg } from "@/components/typography/Heading";
import { ImageGeneralProps } from "@/types/index";
import Link from "next/link";

const FreeResoursesSection: React.FC<
 ImageGeneralProps & { headingTexts: HeadingTextsProps } & {
  links: LinksGroupProps;
 } & { order?: string }
> = ({ image, headingTexts, links, order }) => {
 return (
  <React.Fragment>
   <div className='bg-dominant text-complementary'>
    <div className='lg:grid lg:grid-cols-4 flex flex-col gap-5 lg:py-0'>
     <div className={`lg:col-span-1 flex w-full ${order} `}>
      <Image
       src={image.src}
       alt={image.alt}
       width={image.width}
       height={image.height}
       className='lg:w-full'
      />
     </div>
     <div
      className={`flex flex-col gap-3 lg:col-span-3 items-left justify-center px-4 py-8 `}>
      <Heading4xl>{headingTexts.heading}</Heading4xl>
      <Paragraphlg className='textOpacity80'>
       {headingTexts.subHeading}
      </Paragraphlg>
      <div className='p-2 rounded-lg w-full text-center border-2 border-white  font-semibold'>
       <Link href={links.primary.src}>{links.primary.text}</Link>
      </div>
     </div>
    </div>
   </div>
  </React.Fragment>
 );
};
export default FreeResoursesSection;
