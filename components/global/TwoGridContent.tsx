import React from "react";
import Link from "next/link";
import { Heading4xl } from "@/components/typography/Heading";
import LearnMore from "@/components/global/LearnMore";
import { TwoGridContentProps } from "@/types/index";

const TwoGridContent: React.FC<TwoGridContentProps> = ({
 learnMoreHeader,
 detailsList,
 primaryLink,
}) => (
 <div className='pb-2'>
  <section className='backgroundOverlay lg:p-10 p-4'>
   <div className='lg:grid lg:grid-cols-1'>
    <div>
     <Heading4xl className='py-2 text-center lg:text-left'>
      {learnMoreHeader}
     </Heading4xl>
     <LearnMore detailsList={detailsList} />
     <Link
      className='font-semibold  rounded-md py-4 px-6 w-full flex items-center justify-center'
      href={primaryLink.src}>
      {primaryLink.text}
     </Link>
    </div>
   </div>
  </section>
 </div>
);

export default TwoGridContent;
