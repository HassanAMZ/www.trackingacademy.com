import HeroComponent from "@/components/global/HeroComponent";
import Image from "next/image";
import React from "react";
import baseColors from "@/data/base-colors";
import LearnMore from "@/components/global/LearnMore";
import Link from "next/link";

export default function Page() {
 return (
  <React.Fragment>
   <HeroComponent
    textGroup={{
     welcomeText: "Top Rated Web Analyst on Upwork ",
     heading: "Grow your business with Accurate data",
     subHeading: {
      one: "Hey, I'm Hassan, ",
      two: "and I help businesses audit and setup Tracking Effectively and Accurately.",
     },
     learnMore: {
      heading: "What is Freelancing in 6 Weeks Program? 🚀",
      subHeading:
       "We don’t just hand you tools. We make sure you know how to use them.",
     },
    }}
    links={{
     primary: { src: "/portfolio", text: "Show me the Portfolio" },
     secondary: { src: "/contact", text: "Get In Touch" }, // Included as per your request
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
     primary: baseColors.forBusinesses.primary,
     dark: { value: 80 },
     light: { value: 10 },
    }}
   />

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
      <LearnMore
       detailsList={[
        {
         icon: "🔨",
         header: "Week 1",
         details:
          "Establishing a Solid Foundation for Your Freelance Business. 🎯",
        },
        {
         icon: "🖥",
         header: "Week 2",
         details: "Drawing Clients with a Genuine and Engaging Personal Brand.",
        },
        {
         icon: "📈",
         header: "Week 3",
         details:
          "Establishing Credibility Through a Professional Website and Portfolio.",
        },
        {
         icon: "💼",
         header: "Week 4",
         details:
          "Implement a Lead Generation Strategy and Secure Your First Clients.",
        },
        {
         icon: "🚀",
         header: "Week 5",
         details:
          "Confidently Negotiate and Lock in Lucrative Freelance Contracts.",
        },
        {
         icon: "🌟",
         header: "Week 6",
         details:
          "Successfully Complete Projects and Expand with Client Testimonials.",
        },
       ]}
      />
     </div>
    </div>
    <Link
     className='font-semibold  rounded-md py-4 px-6 w-full flex items-center justify-center'
     style={{ backgroundColor: baseColors.forBusinesses.primary }}
     href='#'>
     Enroll Today
    </Link>
   </section>
  </React.Fragment>
 );
}
