import baseColors from "@/data/base-colors";
import FreeResoursesSection from "./FreeResoursesSection";

export default function CallToActionSections() {
 return (
  <section className='flex flex-col gap-2 items-center justify-center py-3'>
   <FreeResoursesSection
    headingTexts={{
     heading: "Freelancing in 21 Days ",
     subHeading:
      "Get started with freelancing by taking the comprehensive Freelance Starter Program. Build your business from the ground up with expert guideance.",
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
    order='order-last md:order-first'
   />
   <FreeResoursesSection
    headingTexts={{
     heading: "Crust Club Monthly Membership",
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
    order='order-last md:order-last'
   />
  </section>
 );
}
