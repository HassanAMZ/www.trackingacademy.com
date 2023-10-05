import React from "react";
import Image from "next/image";
import {
 Heading2xl,
 Heading3xl,
 Paragraphlg,
 Paragraphmd,
} from "@/components/typography/Heading";
import ContainerLayout from "@/layouts/ContainerLayout";
import { SingleGridContentProps } from "@/types/index";

const SingleGridContent: React.FC<SingleGridContentProps> = ({
 imagesData,
 headingTexts,
 paragraphTexts,
}) => {
 return (
  <ContainerLayout className='pb-2'>
   <section className='backgroundOverlay md:p-10 p-4'>
    <div className={`order-1 flex w-full items-center justify-center`}>
     <Image
      alt={imagesData.alt}
      src={imagesData.src}
      width={imagesData.width}
      height={imagesData.height}
     />
    </div>
    <Heading2xl className=''>{headingTexts.heading}</Heading2xl>
    <Paragraphmd className='font-semibold py-1'>
     {paragraphTexts.primary}&nbsp;
     <span className='opacity-70'>{paragraphTexts.secondary}</span>
    </Paragraphmd>
   </section>
  </ContainerLayout>
 );
};

export default SingleGridContent;
