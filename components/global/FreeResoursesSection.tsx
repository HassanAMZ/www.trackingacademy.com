"use client";

import React, { useState } from "react";
import ContainerLayout from "@/layouts/ContainerLayout"; // Import your ContainerLayout component
import Image from "next/image";
import {
 ColorDetails,
 HeadingTextsProps,
 LinksGroupProps,
} from "@/types/index";
import { Heading4xl, Paragraphlg } from "../typography/Heading";
import { ImageGeneralProps } from "@/types/index";
import Link from "next/link";

const FreeResoursesSection: React.FC<
 ImageGeneralProps & { headingTexts: HeadingTextsProps } & {
  links: LinksGroupProps;
 } & { colorDetails: ColorDetails }
> = ({ image, headingTexts, links, colorDetails }) => {
 return (
  <ContainerLayout>
   <div className='backgroundOverlay '>
    <div className='md:grid md:grid-cols-4 flex flex-col gap-5'>
     <div className='md:col-span-1 flex items-center justify-center w-full'>
      <Image
       src={image.src}
       alt={image.alt}
       width={image.width}
       height={image.height}
       className='rounded-full w-[200px] md:w-full'
      />
     </div>
     <div className='flex flex-col gap-3 md:col-span-3 items-left justify-center p-4'>
      <Heading4xl>{headingTexts.heading}</Heading4xl>
      <Paragraphlg className='opacity-70'>
       {headingTexts.subHeading}
      </Paragraphlg>
      <button
       className='p-2 rounded-md w-full text-center'
       style={{ backgroundColor: colorDetails.primary }}>
       <Link href={links.primary.src}>{links.primary.text}</Link>
      </button>
     </div>
    </div>
   </div>
  </ContainerLayout>
 );
};
export default FreeResoursesSection;
