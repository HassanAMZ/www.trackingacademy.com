import React from "react";
import Image from "next/image";
import { Detail, DetailsProps } from "@/types/index";
import Link from "next/link";
import { Heading4xl } from "@/components/typography/Heading";
import LearnMore from "@/components/global/LearnMore";
import ContainerLayout from "@/layouts/ContainerLayout";
import { TwoGridContentProps } from "@/types/index";

const TwoGridContent: React.FC<TwoGridContentProps> = ({
 imagesData,
 learnMoreHeader,
 detailsList,
 primaryLink,
 colorDetails,
 order,
}) => (
 <ContainerLayout className='pb-2'>
  <section className='backgroundOverlay md:p-10 p-4'>
   <div className='md:grid md:grid-cols-1'>
    {/* <div
     className={` order-${order} flex w-full items-center justify-center`}>
     <Image
      alt={imagesData?.alt}
      src={imagesData?.src}
      width={imagesData?.width}
      height={imagesData?.height}
     />
    </div> */}
    <div className=''>
     <Heading4xl className='py-2 text-center md:text-left'>
      {learnMoreHeader}
     </Heading4xl>
     <LearnMore detailsList={detailsList} />
     <Link
      className='font-semibold  rounded-md py-4 px-6 w-full flex items-center justify-center'
      style={{ backgroundColor: colorDetails.primary }}
      href={primaryLink.src}>
      {primaryLink.text}
     </Link>
    </div>
   </div>
  </section>
 </ContainerLayout>
);

export default TwoGridContent;
