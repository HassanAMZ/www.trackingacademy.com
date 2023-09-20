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
    <div className='px-4 py-4 border-t border-gray-50'>{content}</div>
   </div>
  </div>
 );
};

const accordionData: AccordionDataType = {
 document_id_00001: [
  {
   title: "Setting Up Google Tag Manager on User Front End",
   content:
    "Understand how to integrate GTM on the user-visible part of your website.",
  },
  {
   title: "GTM Party on Thank You Pages",
   content:
    "Learn how to set up GTM on the final thank-you pages to track essential events, such as purchases.",
  },
  {
   title: "Getting Fancy with Upsell Tracking",
   content:
    "Discover the intricacies of tracking upsell purchases using GTM. This section will address some of the nuances related to upsell tracking.",
  },
  {
   title: "Essentials Before You Begin",
   content:
    "Before delving into the setup, there are certain prerequisites you need to be aware of. Ensure you have both a Google Tag Manager account and a Shopify store. If you're new to GTM, [LINK to a beginner's guide].",
  },
  {
   title: "Setting Up Your GTM Account",
   content:
    "If you're a first-timer with GTM, this section will guide you through the account setup process.",
  },
  {
   title: "Integrating GTM with Shopify",
   content:
    "Learn how to embed the GTM tracking snippets into your Shopify theme. We'll delve into both the head and body snippets, ensuring your tracking is comprehensive and accurate.",
  },
  {
   title: "Ensuring Tracking on Thank You Pages",
   content:
    "Get insights on how to ensure your GTM code fires on the final thank-you page. This is crucial for tracking conversions and understanding your sales funnel better.",
  },
  {
   title: "Upsell Page Tracking",
   content:
    "If you're using upsell apps like Reconvert or Zipify Upsell, the checkout process might be a bit more intricate. Understand how to track user interactions on upsell pages effectively.",
  },
  {
   title: "What’s Next?",
   content:
    "After setting up GTM, the sky's the limit! You can integrate other platforms like Google Analytics 4 to track user interactions. If you're interested in that, [LINK to GA4 guide] or if you're leaning towards Facebook, [LINK to Facebook tutorials].",
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
