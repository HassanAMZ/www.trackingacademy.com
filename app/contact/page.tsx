"use client";

import React, { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { GTMCalendlyEvent } from "@/components/analytics/GTMEvents";
import {
 Heading2xl,
 Heading3xl,
 Heading4xl,
} from "@/components/typography/Heading";
import ContactForm from "@/components/contact/ContactForm";
import ContainerLayout from "@/components/layouts/ContainerLayout";

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
   <ContainerLayout>
    <Heading2xl>Submit a Contact Form</Heading2xl>
   </ContainerLayout>
   <ContactForm />
   <ContainerLayout>
    <Heading2xl>Schedule a meeting</Heading2xl>
   </ContainerLayout>{" "}
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
