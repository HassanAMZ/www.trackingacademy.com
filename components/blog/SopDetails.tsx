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
 isHidden = true,
}) => {
 const [showImage, setShowImage] = useState(!isHidden);

 const toggleImageVisibility = () => {
  setShowImage(!showImage);
 };

 return (
  <div className='space-y-4 pb-2'>
   <div
    key={imageSrc}
    className='bg-complementary text-dominant shadow-md border rounded-lg flex flex-col text-left p-6 gap-4'>
    <div className='flex items-center justify-between gap-4'>
     <span className='flex items-center justify-center w-10 h-10 bg-dominant text-complementary rounded-full font-bold '>
      {id}
     </span>
     <div className='flex flex-col lg:flex-row justify-between w-full items-start'>
      <div className='  font-semibold'>{heading}</div>
      {(details || imageSrc) && (
       <button
        onClick={toggleImageVisibility}
        className='flex items-center gap-2   animate-pulse text-accent'>
        See screenshot & details
        {showImage ? (
         <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='1em'
          width='1em'>
          <path d='M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z' />
         </svg>
        ) : (
         <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='1em'
          width='1em'>
          <path d='M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z' />
         </svg>
        )}
       </button>
      )}
     </div>
    </div>
    {showImage && <div className=' '>{details}</div>}
    {showImage && imageSrc && (
     <div className='transition ease-in duration-300'>
      <Image
       className='border border-accent rounded-lg shadow-md'
       width={imageWidth}
       height={imageHeight}
       src={imageSrc}
       alt={`Step ${id}`}
      />
     </div>
    )}
   </div>
  </div>
 );
};

export default SopDetails;
