"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Reason {
 id: number;
 title: string;
 paragraph: string;
 imageUrl: string;
}

interface ReasonsDataProps {
 title: string;
 reasons: Reason[];
 intervalTime?: number; // Optional prop to control the interval time
}

const ReasonsData: React.FC<ReasonsDataProps> = ({
 title,
 reasons,
 intervalTime = 2000,
}) => {
 const [activeId, setActiveId] = useState<number>(1);

 useEffect(() => {
  const interval = setInterval(() => {
   setActiveId((prevId) => (prevId % reasons.length) + 1);
  }, intervalTime);
  return () => clearInterval(interval);
 }, [reasons.length, intervalTime]);

 const handleIdClick = (id: number) => {
  setActiveId(id);
 };

 return (
  <React.Fragment>
   <h2 className='text-2xl font-bold  text-center container-secondary'>
    {title}
   </h2>
   <div className='grid lg:grid-cols-2 gap-2 lg:gap-4 py-10 w-full'>
    <section className='flex flex-col gap-2 justify-between'>
     {reasons.map((reason) => (
      <div
       key={reason.id}
       className={`py-8 px-4 items-center border-2 flex cursor-pointer rounded-lg transition-colors duration-300 ${
        activeId === reason.id
         ? "bg-accent text-complementary"
         : "bg-complementary hover:text-complementary"
       } hover:bg-accent hover:text-complementary`}
       onClick={() => handleIdClick(reason.id)}>
       <p
        className={`text-3xl font-bold font-black px-4 lg:pr-10 lg:row-span-2 ${
         activeId === reason.id ? "text-complementary" : "text-dominant"
        }`}>
        {reason.id}
       </p>
       <div className='flex flex-col'>
        <h3 className='text-xl font-bold   font-semibold'>{reason.title}</h3>
        {activeId === reason.id && (
         <p className='pb-2 col-span-2 lg:col-span-1 lg:pt-2 text-sm'>
          {reason.paragraph}
         </p>
        )}
       </div>
      </div>
     ))}
    </section>
    <section className='pt-2 grid items-center justify-center rounded-lg'>
     {activeId !== null && (
      <Image
       src={reasons.find((reason) => reason.id === activeId)!.imageUrl}
       alt='Reason Image'
       width={1080}
       height={1080}
       className='rounded-lg w-1/2 lg:w-full mx-auto aspect-square'
      />
     )}
    </section>
   </div>
  </React.Fragment>
 );
};

export default ReasonsData;
