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
  title: "Caraway",
  description:
   "Mango Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  imageSrc: "/images/social-sharing.png",
  stats: [
   { percentage: "74%", text: "Lorem Ipsum is simply dummy text..." },
   { percentage: "32%", text: "Lorem Ipsum is simply dummy text..." },
  ],
 },
 {
  title: "Hallway",
  description:
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  imageSrc: "/images/social-sharing.png",
  stats: [
   { percentage: "74%", text: "Lorem Ipsum is simply dummy text..." },
   { percentage: "32%", text: "Lorem Ipsum is simply dummy text..." },
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
   <p className='text-secondary font-semibold'>It works, too</p>

   <h2 className='title-secondary text-dark-primary'>Case studies Man</h2>

   <div className='text-dark-primary sm:grid grid-cols-2 py-20'>
    <div>
     <Image
      src={imageSrc}
      alt={title}
      width={1920}
      height={1080}
      className='rounded-lg'
     />
    </div>
    <div className='text-center sm:text-left gap-5 flex flex-col'>
     <h3 className='title-tertiary '>{title}</h3>
     <p className='paragraph-tertiary'>{description}</p>
     <div className='grid grid-cols-2 gap-4'>
      {stats.map((stat, index) => (
       <div key={index}>
        <p className='title-secondary'>{stat.percentage}</p>
        <p className='paragraph-tertiary'>{stat.text}</p>
       </div>
      ))}
     </div>
     <div className='flex justify-start font-bold gap-4 items-center py-4 text-dark-primary'>
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
