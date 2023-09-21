"use client";

import React, { useState } from "react";
import {
 AccordionItemProps,
 AccordionProps,
 AccordionDataType,
} from "@/types/index";
import blogAccordian from "@/data/blog-accordian";
const AccordionItem: React.FC<
 AccordionItemProps & { isOpen: boolean; onClick: () => void }
> = ({ title, content, isOpen, onClick }) => {
 return (
  <div
   className={`border-2 border-gray-50 rounded-md ${
    isOpen ? "bg-gray-200" : ""
   } hover:bg-gray-300 transition-all duration-300`}>
   <button
    className='w-full text-left py-2 px-4 flex justify-between items-center font-medium'
    onClick={onClick}>
    {title}
    <span>{isOpen ? "↑" : "↓"}</span>
   </button>
   <div
    className={`overflow-hidden transition-max-height duration-500 ${
     isOpen ? "max-h-60" : "max-h-0"
    }`}>
    <div className='px-4 py-4 border-t border-gray-50 bg-gray-100 '>
     {content}
    </div>
   </div>
  </div>
 );
};

const accordionData: AccordionDataType = blogAccordian;

const Accordion: React.FC<AccordionProps> = ({ data }) => {
 const items = accordionData[`${data}` as keyof typeof accordionData] || [];

 const [openIndex, setOpenIndex] = useState<number | null>(null);

 return (
  <div className='flex flex-col gap-2'>
   {items.map((item, index) => (
    <AccordionItem
     key={index}
     title={item.title}
     content={item.content}
     isOpen={openIndex === index}
     onClick={() => setOpenIndex(openIndex === index ? null : index)}
    />
   ))}
  </div>
 );
};

export default Accordion;
