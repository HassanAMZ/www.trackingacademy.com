"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Reason {
 id: number;
 title: string;
 paragraph: string;
 imageUrl: string;
}

const reasonsData: Reason[] = [
 {
  id: 1,
  title: "Clear, Actionable Insights",
  paragraph:
   "Get straightforward insights from your data without complex setups. We make your data work for you, providing clear, actionable insights for growth.",
  imageUrl: "/images/home/reason-data-001.png",
 },
 {
  id: 2,
  title: "Unique Problems, Custom Solutions",
  paragraph:
   "We tailor solutions to your unique needs, from sensible ecommerce tracking to analytics for decision-making. Enjoy better decisions, more conversions, and clearer goals.",
  imageUrl: "/images/home/reason-data-002.png",
 },
 {
  id: 3,
  title: "Fast, Efficient, and Transparent",
  paragraph:
   "We set up your tracking quickly, keep you informed, and ensure transparency in costs. No hidden fees, just honest work for your business growth.",
  imageUrl: "/images/home/reason-data-003.png",
 },
 {
  id: 4,
  title: "Reports You'll Actually Read",
  paragraph:
   "Our reports are like a chat with a knowledgeable friend. Easy to read, understand, and use. No jargon or endless tables, just useful insights.",
  imageUrl: "/images/home/reason-data-004.png",
 },
];

export default function ReasonsData() {
 const [activeId, setActiveId] = useState<null | number>(1);

 return (
  <React.Fragment>
   <h2 className='title-secondary text-center container-secondary'>
    4 Reasons Why You Should Work with Us to Configure Your Website's Tracking
   </h2>
   <div className='grid lg:grid-cols-2 gap-2 lg:gap-4 py-10 w-full'>
    <section className='pt-2 grid place-content-center'>
     {activeId !== null && (
      <Image
       src={reasonsData.find((reason) => reason.id === activeId)!.imageUrl}
       alt='Reason Image'
       width={1080}
       height={1080}
       className='rounded-lg grayscale'
      />
     )}
    </section>
    <section className='flex flex-col gap-2'>
     {reasonsData.map((reason, index) => (
      <div
       key={index}
       className={`py-12 px-6 items-center border-2 flex cursor-pointer rounded-lg transition-colors duration-300 ${
        activeId === reason.id
         ? "bg-accent text-complementary"
         : "bg-complementary hover:text-complementary"
       } hover:bg-accent hover:text-complementary`}
       onClick={() => setActiveId(activeId === reason.id ? 1 : reason.id)}>
       <p
        className={`title-primary font-black px-4 lg:pr-10 leading-none lg:leading-normal lg:row-span-2 ${
         activeId === reason.id ? "text-complementary" : "text-dominant"
        }`}>
        {reason.id}
       </p>
       <div className='flex flex-col'>
        <h3 className='title-tertiary font-semibold'>{reason.title}</h3>
        {activeId === reason.id && (
         <p className='pb-2 col-span-2 lg:col-span-1 lg:pt-2 paragraph-secondary'>
          {reason.paragraph}
         </p>
        )}
       </div>
      </div>
     ))}
    </section>
   </div>
  </React.Fragment>
 );
}
