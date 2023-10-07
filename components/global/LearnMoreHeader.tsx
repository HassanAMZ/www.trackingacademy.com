// LearnMoreHeader.tsx

import React from "react";
import {
 Heading2xl,
 Heading4xl,
 Headingxl,
} from "@/components/typography/Heading";
import { LearnMoreHeaderProps } from "@/types/index"; // make sure to use the actual path

const LearnMoreHeader: React.FC<LearnMoreHeaderProps> = ({
 headingTexts,
 colorDetails,
}) => {
 if (!headingTexts.heading && !headingTexts.subHeading) return null;

 return (
  <div id='learnMoreHeader' className='py-12 text-center space-y-2'>
   {headingTexts.heading && (
    <Heading4xl className='py-2'>{headingTexts.heading}</Heading4xl>
   )}
   {headingTexts.subHeading && (
    <Headingxl style={{ color: colorDetails.primary }}>
     {headingTexts.subHeading}
    </Headingxl>
   )}
  </div>
 );
};

export default LearnMoreHeader;
