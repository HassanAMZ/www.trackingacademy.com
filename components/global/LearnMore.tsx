import React from "react";
import { DetailsProps } from "@/types/index";
import { Paragraphlg } from "@/components/typography/Heading";

const LearnMore: React.FC<DetailsProps> = ({ detailsList }) => {
 return (
  <React.Fragment>
   {detailsList.map((detail, index) => (
    <div key={index} className='flex gap-2 py-4'>
     <div>
      <div className='bg-gray-100 bg-opacity-20 rounded-full p-2'>
       {detail.icon}
      </div>
     </div>
     <div className='flex flex-col gap-2 pl-4'>
      <Paragraphlg className='font-semibold'>
       {detail.header}:&nbsp;
       <span className='textOpacity80'>{detail.details}</span>
      </Paragraphlg>
     </div>
    </div>
   ))}
  </React.Fragment>
 );
};

export default LearnMore;
