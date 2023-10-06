import React from "react";
import LearnMore from "@/components/global/LearnMore";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import baseColors from "@/data/base-colors";
import AboutDetails from "@/components/about/AboutDetails";
export default function Page() {
 return (
  <section className=''>
   {/* <div className=''>
    <Image
     src='/images/social-sharing.png'
     alt='Imtiaz Ahmed'
     width={1920}
     height={1080}
     className='rounded-md'
    />
   </div> */}

   <LearnMoreHeader
    headingTexts={{
     heading: "Hey, I'm Hassan 👋 ",
     subHeading:
      "I'm a Top Rated Freelancer on Upwork, here's what you should know about me.",
    }}
    colorDetails={{ primary: baseColors.aboutUs.primary }}
   />
   <AboutDetails />
   {/* <HeroComponent
    clientImageBoolean={false}
    linksBoolean={false}
    welcomeText='Welcome to Freelance Pizza!'
    heading="Hey, I'm Hassan."
    subHeading1='A top rated Freelancer on Upwork,  '
    subHeading2="here's what you should know about me."
    primaryLink='startHereLink'
    secondaryLink='membershipLink'
    imagesData={[
     {
      src: "/images/clients/001_1.jfif",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
     },
     { src: "/images/clients/007.jfif", alt: "Client" },
     { src: "/images/clients/008.jfif", alt: "Pjipipp Herglotz - Kiss Agency" },
     {
      src: "/images/clients/001.jpg",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
     },
    ]}
    backgroundImage='/images/hero/hero-image.png'
    primaryColor='rgba(255,87,51,1)'
   /> */}
  </section>
 );
}
