import baseColors from "@/data/base-colors";
import FreeResoursesSection from "./FreeResoursesSection";
import React from "react";
import LearnMoreHeader from "./LearnMoreHeader";
import { ColorDetails } from "@/types/index";

const CallToActionSections: React.FC<{ colorDetails: ColorDetails }> = ({
 colorDetails,
}) => {
 return (
  <React.Fragment>
   <LearnMoreHeader
    headingTexts={{
     heading: "Enhance Your Website's Tracking",
     subHeading:
      "I offer specialized services to ensure your website's tracking is set up accurately, efficiently, and delivers the insights you need.",
    }}
    colorDetails={{ primary: colorDetails.primary }}
   />
   <section className='flex flex-col gap-2 items-center justify-center py-3'>
    <FreeResoursesSection
     headingTexts={{
      heading: "Comprehensive Tracking Audit",
      subHeading:
       "I'll meticulously review your existing tracking setup, identify gaps, and provide expert solutions to get the most out of your web analytics tools.",
     }}
     image={{
      src: "/images/hero/temp_image_4.png",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
      height: 1920,
      width: 1080,
     }}
     colorDetails={{
      primary: baseColors.home.primary,
     }}
     links={{
      primary: { src: "/contact", text: "Get In Touch" },
     }}
     order='order-last md:order-first items-end'
    />
    <FreeResoursesSection
     headingTexts={{
      heading: "End-to-End Tracking Implementation",
      subHeading:
       "From client-side to server-side setups, I ensure your website is primed to collect accurate data. This includes advanced tools like GA4, UA, FB Pixel, and server-side tracking.",
     }}
     image={{
      src: "/images/hero/temp_image_5.png",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
      height: 600,
      width: 600,
     }}
     colorDetails={{
      primary: baseColors.home.primary,
     }}
     links={{
      primary: { src: "/contact", text: "Get In Touch" },
     }}
     order='order-last md:order-last items-end'
    />
   </section>
  </React.Fragment>
 );
};
export default CallToActionSections;
