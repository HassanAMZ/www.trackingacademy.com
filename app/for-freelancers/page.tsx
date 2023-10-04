import HeroComponent from "@/components/global/HeroComponent";
import {
 Paragraph,
 SubHeader,
 SubTitleHeader,
 TitleHeader,
} from "@/components/typography/Heading";
import Image from "next/image";
import React from "react";
import baseColors from "@/data/base-colors";
import Details from "@/components/global/Details";
import Link from "next/link";
export default function Page() {
 return (
  <React.Fragment>
   <HeroComponent
    clientImageBoolean={true}
    linksBoolean={true}
    welcomeText='Become a Freelancer with our 6-Week Mastery Program 🚀'
    heading='From ZERO to freelancer in 6 weeks'
    subHeading1=''
    subHeading2='A step-by-step course designed to help you start and grow your freelance business.'
    primaryLink={{ src: "#", text: "Enroll Here" }}
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
    primaryColor={baseColors.service.primary}
    colorPercentage={{ dark: { value: 80 }, light: { value: 10 } }}
   />
   <div className='py-16 text-center'>
    <SubTitleHeader className='py-2'>
     What is Freelancing in 6 Weeks Program? 🚀
    </SubTitleHeader>

    <SubHeader style={{ color: baseColors.service.primary }}>
     We don’t just hand you tools. We make sure you know how to use them.
    </SubHeader>
   </div>

   <section className='backgroundOverlay md:p-10 p-4 '>
    <div className='md:grid  md:grid-cols-5'>
     <div className='md:col-span-2 order-1 flex w-full items-center justify-center '>
      <Image
       alt='temp'
       src='/images/hero/temp_img.png'
       width={863}
       height={1163}
      />
     </div>
     <div className='md:col-span-3'>
      <SubTitleHeader>A proven recipe of freelance success</SubTitleHeader>
      <Details
       icon='🔨'
       header='Week 1'
       details='Establishing a Solid Foundation for Your Freelance Business. 🎯'
      />

      <Details
       icon='🖥'
       header='Week 2'
       details='Drawing Clients with a Genuine and Engaging Personal Brand.'
      />

      <Details
       icon='📈'
       header='Week 3'
       details='Establishing Credibility Through a Professional Website and Portfolio.'
      />

      <Details
       icon='💼'
       header='Week 4'
       details='Implement a Lead Generation Strategy and Secure Your First Clients.'
      />

      <Details
       icon='🚀'
       header='Week 5'
       details='Confidently Negotiate and Lock in Lucrative Freelance Contracts.'
      />

      <Details
       icon='🌟'
       header='Week 6'
       details='Successfully Complete Projects and Expand with Client Testimonials.'
      />
     </div>
    </div>
    <Link
     className='font-semibold  rounded-md py-4 px-6 w-full flex items-center justify-center'
     style={{ backgroundColor: baseColors.service.primary }}
     href='#'>
     Enroll Today
    </Link>
   </section>
  </React.Fragment>
 );
}
