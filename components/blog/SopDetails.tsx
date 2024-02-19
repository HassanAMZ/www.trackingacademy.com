"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SopDetailsProps {
 id: number;
 details: JSX.Element | string;
 heading: JSX.Element | string;
 imageSrc?: string;
 imageWidth?: number;
 imageHeight?: number;
 isHidden?: boolean;
}

const SopDetails: React.FC<SopDetailsProps> = ({
 id,
 details,
 heading,
 imageSrc,
 imageWidth = 1920,
 imageHeight = 1080,
 isHidden = false,
}) => {
 const [showImage, setShowImage] = useState(!isHidden);

 return (
  <div className='space-y-4 pb-2'>
   <div
    key={imageSrc}
    className='bg-dark-secondary rounded-lg flex flex-col text-left p-6 gap-4 border-dark-secondary'>
    <div className='flex items-center justify-start gap-4'>
     <span className='flex items-center justify-center w-10 h-10 bg-light-secondary text-dark-primary rounded-full font-bold'>
      {id}
     </span>
     <div className='paragraph-primary font-semibold text-light-primary'>
      {heading}
     </div>
    </div>
    <div className='paragraph-primary text-light-secondary'>{details}</div>
    {imageSrc && (
     <div>
      {/* <button
       className='text-primary underline'
       onClick={() => setShowImage(!showImage)}>
       {showImage ? "Hide screenshot" : "See the screenshot"}
      </button> */}
      {showImage && (
       <div className='transition ease-in duration-300'>
        <Image
         className='rounded-lg'
         width={imageWidth}
         height={imageHeight}
         src={imageSrc}
         alt={`Step ${id}`}
        />
       </div>
      )}
     </div>
    )}
   </div>
  </div>
 );
};

export default SopDetails;
