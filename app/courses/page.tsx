import TestimonialCard from "@/components/testimonial/TestimonialCard";
import HeroComponent from "@/components/global/HeroComponent";
import baseColors from "@/data/base-colors";
import StartHereSection from "@/components/home/StartHereSection";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import FreeResoursesSection from "@/components/global/FreeResoursesSection";
import WhyUs from "@/components/global/WhyUs";
import Clients from "@/components/home/Clients";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CallToActionSections from "@/components/global/CallToActionSections";
import React from "react";
import CourseContainer from "@/components/courses/CourseContainer";
import getCoursesData from "@/components/utils/getCoursesData";
import { GTMCourseListViewEvent } from "@/components/analytics/GTMEvents";

export default async function Page() {
 const data = await getCoursesData();
 const sortedData = (await Promise.all(data))
  .filter((data) => data.draft === false)
  .sort((a, b) => {
   const dateA = new Date(a.date);
   const dateB = new Date(b.date);
   return dateB.getTime() - dateA.getTime();
  });

 return (
  <div className='flex flex-col gap-2'>
   <React.Fragment>
    <HeroComponent
     textGroup={{
      welcomeText: "Tracking Academy Courses",
      heading: "Learn from technical marketing experts",
      subHeading: {
       one: "With TrackingAcademy, ",
       two: "our courses are designed in task-based and bite-sized chunks so that you learn by doing. ",
      },
     }}
     links={{
      primary: { src: "#", text: "Coming Soon" },
      //   secondary: { src: "/courses", text: "Coming Soon" },
     }}
     images={{
      group: {
       list: [
        {
         src: "/images/clients/001_1.jfif",
         alt: "Imtiaz Ahmed - Job Ready Programmer",
        },
        { src: "/images/clients/007.jfif", alt: "Client" },
        {
         src: "/images/clients/008.jfif",
         alt: "Pjipipp Herglotz - Kiss Agency",
        },
        {
         src: "/images/clients/001.jpg",
         alt: "Imtiaz Ahmed - Job Ready Programmer",
        },
       ],
      },
      background: "/images/hero/hero-image.png",
     }}
     colorDetails={{
      primary: baseColors.courses.primary,
      dark: { value: 80 },
      light: { value: 10 },
     }}
    />
   </React.Fragment>
   {sortedData.length > 0 && (
    <React.Fragment>
     <GTMCourseListViewEvent courseList={sortedData} />
     <CourseContainer rawData={data} data={sortedData} type='courses' />
    </React.Fragment>
   )}
  </div>
 );
}
