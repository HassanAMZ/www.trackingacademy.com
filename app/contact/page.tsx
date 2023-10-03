"use client";

import React, { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { GTMCalendlyEvent } from "@/components/analytics/GTMEvents";
import CustomHeader from "@/components/home/CustomHeader";

const Page = () => {
 // Define a state variable to keep track of the height
 const [height, setHeight] = useState("100vh");

 // Set up event listeners using the useCalendlyEventListener hook
 useCalendlyEventListener({
  onProfilePageViewed: () => {
   setHeight("110vh");
  },
  onEventTypeViewed: () => {
   setHeight("120vh");
  },
  onDateAndTimeSelected: () => {
   setHeight("170vh");
  },
  onEventScheduled: () => {
   setHeight("100vh");
  },
 });

 return (
  <React.Fragment>
   <GTMCalendlyEvent />
   <CustomHeader text='Schedule a meeting' />
   <div className='backgroundOverlay'>
    <InlineWidget
     url='https://calendly.com/shahzadaalihassan'
     styles={{ height: height }} // Use the height state variable here
    />
   </div>
  </React.Fragment>
 );
};

export default Page;
