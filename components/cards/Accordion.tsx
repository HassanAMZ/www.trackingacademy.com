"use client";

"use client";

import React, { useState } from "react";
import {
 AccordionItemProps,
 AccordionProps,
 AccordionDataType,
} from "@/types/index";

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

const accordionData: AccordionDataType = {
 document_id_00001: [
  {
   title: "Setting Up Google Tag Manager on Shopify Front End",
   content:
    "Understand how to integrate GTM on the user-visible part of your website.",
  },
  {
   title: "GTM on the final Thank You Pages",
   content:
    "Learn how to set up GTM on the final thank-you pages to track essential events, such as purchases.",
  },
  {
   title: "Creating Your GTM Account",
   content:
    "If you're a first-timer with GTM, this section will guide you through the account setup process.",
  },
  {
   title: "Integrating GTM with Shopify",
   content:
    "Learn how to embed the GTM tracking snippets into your Shopify theme. We'll delve into both the head and body snippets, ensuring your tracking is comprehensive and accurate.",
  },
 ],
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
 const items =
  accordionData[`document_id_${data}` as keyof typeof accordionData] || [];

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
