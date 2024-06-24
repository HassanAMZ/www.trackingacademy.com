"use client";

import React, { useState, useEffect } from "react";
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
  title: "Comprehensive Analytics Training",
  paragraph:
   "Master the fundamentals of analytics with our structured courses designed for all skill levels. Learn how to make data-driven decisions to boost your business growth.",
  imageUrl: "/images/for-businesses/reason-data-001.png",
 },
 {
  id: 2,
  title: "Advanced Tag Manager Workshops",
  paragraph:
   "Dive deep into Google Tag Manager with our hands-on workshops. Learn how to set up, manage, and troubleshoot tags efficiently to ensure accurate data tracking.",
  imageUrl: "/images/for-businesses/reason-data-002.png",
 },
 {
  id: 3,
  title: "Expert Tracking Implementation",
  paragraph:
   "Gain practical skills in implementing and optimizing tracking solutions. Our training covers everything from basic setup to advanced tracking strategies.",
  imageUrl: "/images/for-businesses/reason-data-003.png",
 },
 {
  id: 4,
  title: "Interactive Reporting Techniques",
  paragraph:
   "Learn how to create and interpret insightful reports that drive action. Our courses teach you to use various tools to generate reports that are clear and actionable.",
  imageUrl: "/images/for-businesses/reason-data-004.png",
 },
];

export default function ReasonsData() {
 const [activeId, setActiveId] = useState<number>(1);

 useEffect(() => {
  const interval = setInterval(() => {
   setActiveId((prevId) => (prevId % reasonsData.length) + 1);
  }, 5000);
  return () => clearInterval(interval);
 }, []);

 const handleIdClick = (id: number) => {
  setActiveId(id);
 };

 return (
  <React.Fragment>
   <h2 className='text-2xl font-bold  text-center container-secondary'>
    4 Reasons Why You Should Enroll in Our Analytics and Tracking Courses
   </h2>
   <div className='grid lg:grid-cols-2 gap-2 lg:gap-4 py-10 w-full'>
    <section className='flex flex-col gap-2 justify-between'>
     {reasonsData.map((reason) => (
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
       src={reasonsData.find((reason) => reason.id === activeId)!.imageUrl}
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
}
