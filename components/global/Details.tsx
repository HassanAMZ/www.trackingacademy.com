import HeroComponent from "@/components/global/HeroComponent";
import {
 Paragraph,
 SubHeader,
 TitleHeader,
} from "@/components/typography/Heading";
import Image from "next/image";
import React from "react";

import { DetailsProps } from "@/types/index";

const Details: React.FC<DetailsProps> = ({ icon, header, details }) => {
 return (
  <React.Fragment>
   <div className=' flex gap-2 py-4'>
    <div>
     <div className='bg-gray-100 bg-opacity-20 rounded-full p-2'>{icon}</div>
    </div>
    <div className='flex flex-col gap-2'>
     <Paragraph className='font-semibold'>
      {header}:&nbsp;<span className='opacity-70'>{details}</span>
     </Paragraph>
    </div>
   </div>
  </React.Fragment>
 );
};

export default Details;
