// Page component
"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { GTMCalendlyEvent } from "@/components/analytics/GTMEvents"; // Update the import path as per your directory structure
import CustomHeader from "@/components/home/CustomHeader";

const Page = () => {
 return (
  <>
   <GTMCalendlyEvent />
   <CustomHeader text='Schedule a meeting' />
   <div className='backgroundOverlay'>
    <InlineWidget
     url='https://calendly.com/shahzadaalihassan'
     styles={{ height: "130vh" }}
    />
    {/* 
            <iframe
              src='https://calendly.com/shahzadaalihassan?text_color=ffffff&primary_color=333333'
              className='absolute inset-0import { InlineWidget } from "react-calendly"; w-full h-full border-none'
              scrolling='no'></iframe>
            */}
   </div>
  </>
 );
};

export default Page;
