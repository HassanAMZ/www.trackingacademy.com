import React from "react";
import HeroComponent from "@/components/global/HeroComponent";
import CourseContainer from "@/components/courses/CourseContainer";
import getCoursesData from "utils/getCoursesData";
import { GTMCourseListViewEvent } from "@/components/analytics/GTMEvents";
import WaitlistForm from "@/components/courses/WaitlistForm";

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
  <div className='flex flex-col'>
   {/* <React.Fragment>
    <HeroComponent
     textGroup={{
      welcomeText: "TrackingAcademy Courses",
      heading: "Learn from technical marketing experts",
      subHeading: {
       one: "Sign up to join our waiting list and be the first to know when courses go live. ",
       two: "Stay ahead in digital marketing with task-based learning from TrackingAcademy.",
      },
     }}
     links={{
      primary: { src: "#waiting-list", text: "Join Waiting List" },
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
      background: {
       desktop: "/images/hero/hero-image-md.png",
       mobile: "/images/hero/hero-image-sm.png",
      },
     }}
    />
   </React.Fragment> */}
   {sortedData.length === 0 && (
    <React.Fragment>
     <div className='text-left w-screen py-8 min-h-[60vh] grid place-content-center'>
      <WaitlistForm />
     </div>
    </React.Fragment>
   )}
  </div>
 );
}
