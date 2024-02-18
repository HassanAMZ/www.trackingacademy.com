import React from "react";
import LearnMore from "@/components/global/LearnMore";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import baseColors from "@/data/base-colors";
import AboutDetails from "@/components/about/AboutDetails";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Image from "next/image";

export default function Page() {
 return (
  <section className=''>
   <LearnMoreHeader
    headingTexts={{
     heading: "Hey, I'm Hassan 👋 ",
     subHeading:
      "I'm a Top Rated Freelancer on Upwork, here's what you should know about me.",
    }}
    colorDetails={{ primary: baseColors.aboutUs.primary }}
   />

   <section className='pt-2'>
    <Image
     src='/images/social-sharing.png'
     alt='Imtiaz Ahmed'
     width={1920}
     height={1080}
     className='rounded-lg'
    />
   </section>
   <AboutDetails />
  </section>
 );
}
