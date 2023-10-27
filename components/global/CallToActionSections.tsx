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
     heading: "Transform your carreer",
     subHeading:
      "Our programs were designed to guide you though launching or improving your web analytics freelance business.",
    }}
    colorDetails={{ primary: colorDetails.primary }}
   />
   <section className='flex flex-col gap-2 items-center justify-center py-3'>
    <FreeResoursesSection
     headingTexts={{
      heading: "Freelancing in 6 Weeks ",
      subHeading:
       "Get started with freelancing in Web Analytics Niche by taking the comprehensive Freelance Starter Program. ",
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
      primary: { src: "/#start-here", text: "Start Here" },
     }}
     order='order-last md:order-first items-end'
    />
    <FreeResoursesSection
     headingTexts={{
      heading: "Compass Club Monthly Membership",
      subHeading:
       "Join the Crust Club to sharpen your skills and land better clients with these exclusive freelancing resources.",
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
      primary: { src: "/#start-here", text: "Start Here" },
     }}
     order='order-last md:order-last items-end'
    />
   </section>
  </React.Fragment>
 );
};
export default CallToActionSections;
