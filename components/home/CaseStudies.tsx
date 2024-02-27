"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

interface Stat {
 percentage: string;
 text: string;
}

interface CaseStudy {
 title: string;
 description: string;
 imageSrc: string;
 stats: Stat[];
}

const caseStudies: CaseStudy[] = [
 {
  title: "Google Analytics 4 using GTM and Gtag (Ecommerce Store)",
  description: `The objective to seamlessly transition to GA4 for Hama, ensuring that Google Ads and Ga4 tracking were not just maintained but optimized in the process, this transition was critical, as GA4 offers a more comprehensive view.`,
  imageSrc: "/images/home/client-hama.png",
  stats: [
   {
    percentage: "86%",
    text: "Increase in conversions tracked on Ads and attribution.",
   },
   { percentage: "32%", text: "Improvement in Return on Ads Spent." },
  ],
 },
 {
  title: "Facebook Pixel and Conversion API (Server Side Tracking)",
  description: `The primary goal was to ensure the precise tracking of purchase events and other significant user interactions directly to Facebook's servers, bypassing browser restrictions and enhancing data privacy and accuracy.`,
  imageSrc: "/images/home/client-ticketonsale.png",
  stats: [
   {
    percentage: "71%",
    text: "Increase in conversions tracked on Ads and attribution.",
   },
   { percentage: "43%", text: "Improvement in Return on Ads Spent." },
  ],
 },
];

const CaseStudies: React.FC = () => {
 const [current, setCurrent] = useState<number>(0);

 const goToPrevious = (): void => {
  setCurrent(current - 1 < 0 ? caseStudies.length - 1 : current - 1);
 };

 const goToNext = (): void => {
  setCurrent((current + 1) % caseStudies.length);
 };

 const { title, description, imageSrc, stats } = caseStudies[current];

 return (
  <div className='flex flex-col items-center text-center py-10 container-primary'>
   <p className='text-complementary font-semibold'>It works, too</p>
   <h2 className='title-secondary text-complementary'>Case studies </h2>
   <div className='text-complementary lg:grid lg:grid-cols-2 items-center justify-center gap-6 py-20'>
    <div className='col-span-1 p-6'>
     <Image src={imageSrc} alt='Desktop version' width={1000} height={1000} />
    </div>
    <div className=' col-span-1 text-left gap-5 flex flex-col'>
     <h3 className='title-secondary '>{title}</h3>
     <p className='paragraph-primary'>{description}</p>
     <div className='grid grid-cols-2 gap-4'>
      {stats.map((stat, index) => (
       <div key={index}>
        <p className='title-secondary'>{stat.percentage}</p>
        <p className='paragraph-primary'>{stat.text}</p>
       </div>
      ))}
     </div>
     <div className='flex lg:justify-start justify-center font-bold gap-4 items-center py-4 text-complementary'>
      <button
       onClick={goToPrevious}
       className=''
       aria-label='Previous case study'>
       &lt;
      </button>
      <p>
       {current + 1} / {caseStudies.length}
      </p>
      <button onClick={goToNext} aria-label='Next case study'>
       &gt;
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default CaseStudies;
