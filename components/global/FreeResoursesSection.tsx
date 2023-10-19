"use client";

import React, { useState } from "react";
import ContainerLayout from "@/layouts/ContainerLayout"; // Import your ContainerLayout component
import Image from "next/image";
import {
 ColorDetails,
 HeadingTextsProps,
 LinksGroupProps,
} from "@/types/index";
import {
 Heading4xl,
 Headingxl,
 Paragraphlg,
 Heading2xl,
} from "@/components/typography/Heading";
import { ImageGeneralProps } from "@/types/index";
import Link from "next/link";

const FreeResoursesSection: React.FC<
 ImageGeneralProps & { headingTexts: HeadingTextsProps } & {
  links: LinksGroupProps;
 } & { colorDetails: ColorDetails } & { order?: string }
> = ({ image, headingTexts, links, colorDetails, order }) => {
 return (
  <ContainerLayout>
   <div className='backgroundOverlay '>
    <div className='md:grid md:grid-cols-4 flex flex-col gap-5 md:py-0'>
     <div className={`md:col-span-1 flex w-full ${order} `}>
      <Image
       src={image.src}
       alt={image.alt}
       width={image.width}
       height={image.height}
       className='md:w-full'
      />
     </div>
     <div
      className={`flex flex-col gap-3 md:col-span-3 items-left justify-center px-4 py-8 `}>
      <Heading4xl>{headingTexts.heading}</Heading4xl>
      <Paragraphlg className='textOpacity80'>
       {headingTexts.subHeading}
      </Paragraphlg>
      <div className='p-2 rounded-md w-full text-center border-2 font-semibold'>
       <Link href={links.primary.src}>{links.primary.text}</Link>
      </div>
     </div>
    </div>
   </div>
  </ContainerLayout>
 );
};
export default FreeResoursesSection;
