// LearnMoreHeader.tsx

import React from "react";
import {
 Heading2xl,
 Heading4xl,
 Headingxl,
} from "@/components/typography/Heading";
import { LearnMoreHeaderProps, WhyUsProps } from "@/types/index"; // make sure to use the actual path
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";

const WhyUs: React.FC<WhyUsProps> = ({
 links,
 headingTexts,
 paragraphTexts,
 colorDetails,
}) => {
 if (!headingTexts.heading && !headingTexts.subHeading) return null;

 return (
  <ContainerLayout>
   <section
    className='backgroundOverlay md:px-20 md:py-16 py-12 px-5 space-y-5'
    style={{ backgroundColor: colorDetails.primary }}>
    <div className='text-left space-y-2'>
     {headingTexts.heading && (
      <Heading4xl className='py-2'>{headingTexts.heading}</Heading4xl>
     )}
     {paragraphTexts && (
      <Headingxl>
       {paragraphTexts.primary}
       <span className='textOpacity80'>{paragraphTexts.secondary}</span>
      </Headingxl>
     )}
    </div>
    <button className='p-2 rounded-md text-left border-2 border-gray-100'>
     <Link className='font-semibold' href={links.primary.src}>
      {links.primary.text}
     </Link>
    </button>
   </section>
  </ContainerLayout>
 );
};

export default WhyUs;
