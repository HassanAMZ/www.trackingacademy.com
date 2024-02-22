// LearnMoreHeader.tsx

import React from "react";
import {
 Heading2xl,
 Heading4xl,
 Headingxl,
} from "@/components/typography/Heading";
import { LearnMoreHeaderProps } from "@/types/index"; // make sure to use the actual path

const LearnMoreHeader: React.FC<LearnMoreHeaderProps> = ({ headingTexts }) => {
 if (!headingTexts.heading && !headingTexts.subHeading) return null;

 return (
  <div className='learnMoreHeader container-secondary py-8 text-center space-y-2'>
   {headingTexts.heading && (
    <div className='py-2 title-secondary'>{headingTexts.heading}</div>
   )}
   {headingTexts.subHeading && (
    <div className='text-center paragraph-primary'>
     {headingTexts.subHeading}
    </div>
   )}
  </div>
 );
};

export default LearnMoreHeader;
