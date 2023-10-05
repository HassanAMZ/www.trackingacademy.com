"use client";

import React, { useState } from "react";
import ContainerLayout from "@/layouts/ContainerLayout";
import FreeResoursesSection from "@/components/global/FreeResoursesSection";
import { StartHereSectionProps } from "@/types/index";

const StartHereSection: React.FC<StartHereSectionProps> = ({
 colorDetails,
}) => {
 const [selectedButton, setSelectedButton] = useState<number>(1);

 return (
  <React.Fragment>
   <ContainerLayout className='flex flex-row gap-2 items-center justify-center py-3'>
    <button
     className='p-2 rounded-md w-full'
     style={{
      backgroundColor:
       selectedButton === 1 ? colorDetails.primary : "transparent",
      borderColor: selectedButton === 1 ? "transparent" : colorDetails.primary,
      borderWidth: selectedButton === 1 ? "0px" : "2px",
     }}
     onClick={() => setSelectedButton(1)}>
     I'm new to Freelancing!
    </button>
    <button
     className='p-2 rounded-md w-full'
     style={{
      backgroundColor:
       selectedButton === 2 ? colorDetails.primary : "transparent",
      borderColor: selectedButton === 2 ? "transparent" : colorDetails.primary,
      borderWidth: selectedButton === 2 ? "0px" : "2px",
     }}
     onClick={() => setSelectedButton(2)}>
     I'm already Freelancing!
    </button>
   </ContainerLayout>

   {selectedButton === 1 && (
    <div className='flex flex-col gap-3'>
     <FreeResoursesSection
      headingTexts={{
       heading: "Guidebook to Freelancing",
       subHeading:
        "Learn about the five key ingredients to freelancing that you need to succeed.",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "UpWork profile Cheklist",
       subHeading:
        "Download the checklist, and land more clients with the perfect UpWork profile!",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Self-Assessment Test",
       subHeading:
        "Receive a copy, it's free. Use the interactive testing tools to find out if you have the means to make a career change to freelancing.",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
    </div>
   )}
   {selectedButton === 2 && (
    <div className='flex flex-col gap-3'>
     <FreeResoursesSection
      headingTexts={{
       heading: "6 tips to grow your freelance business",
       subHeading:
        "The checklist details the potential impact of each item, and contains actual real-life examples on how to implement these changes.",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Companies that Hire Freelancers",
       subHeading:
        "Use this interactive database of real companies and learn what kind of freelancers have they hired & how much are they paying per project.",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Freelance Business Audit",
       subHeading:
        "Take the 5-minute questionnaire and receive your freelance business audit report card immediately.",
      }}
      image={{
       src: "/images/hero/temp_image_3.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      colorDetails={{ primary: colorDetails.primary }}
      links={{
       primary: { src: "/#start-here", text: "Start Here" },
      }}
     />
    </div>
   )}
  </React.Fragment>
 );
};

export default StartHereSection;
