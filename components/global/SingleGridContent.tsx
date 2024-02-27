import React from "react";
import Image from "next/image";

import ContainerLayout from "@/layouts/ContainerLayout";
import { SingleGridContentProps } from "@/types/index";

const SingleGridContent: React.FC<SingleGridContentProps> = ({
 imagesData,
 headingTexts,
 paragraphTexts,
}) => {
 return (
  <section className='bg-dominant text-complementary rounded-lg grid p-6 lg:p-12'>
   <div className='order-1 flex w-full items-center justify-center'>
    {imagesData && (
     <Image
      alt={imagesData.alt}
      src={imagesData.src}
      width={imagesData.width}
      height={imagesData.height}
     />
    )}
   </div>
   <div className='py-4'>
    <h4 className='title-tertiary pb-2 lg:pb-4'>{headingTexts.heading}</h4>
    {paragraphTexts && (
     <p className='paragraph-primary font-semibold py-1'>
      {paragraphTexts?.primary}&nbsp;
      <span className='textOpacity80 font-normal'>
       {paragraphTexts?.secondary}
      </span>
     </p>
    )}
   </div>
  </section>
 );
};

export default SingleGridContent;
