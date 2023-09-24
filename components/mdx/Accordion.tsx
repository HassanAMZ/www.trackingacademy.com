"use client";

import React, { useState } from "react";
import {
 AccordionItemProps,
 AccordionProps,
 AccordionDataType,
} from "@/types/index";
import blogAccordion from "@/data/blog-accordion";
const AccordionItem: React.FC<
 AccordionItemProps & { isOpen: boolean; onClick: () => void }
> = ({ title, content, isOpen, onClick }) => {
 return (
  <div
   className={`divide-y border-gray-800 dark:border-gray-100  ${
    isOpen ? "bg-gray-200 bg-opacity-5 dark:bg-gray-700 dark:bg-opacity-5" : ""
   } hover:bg-gray-300 hover:dark:bg-gray-600 hover:bg-opacity-20 hover:dark:bg-opacity-20 transition-all duration-300`}>
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
    <div className='px-4 py-4 border-t border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-600 bg-opacity-5 dark:bg-opacity-5 '>
     {content}
    </div>
   </div>
  </div>
 );
};

const accordionData: AccordionDataType = blogAccordion;

const Accordion: React.FC<AccordionProps> = ({ data }) => {
 const items = accordionData[`${data}` as keyof typeof accordionData] || [];

 const [openIndex, setOpenIndex] = useState<number | null>(null);

 return (
  <div className='flex flex-col border rounded-md'>
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
