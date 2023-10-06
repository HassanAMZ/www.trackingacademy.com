import HeroComponent from "@/components/global/HeroComponent";
import Image from "next/image";
import React from "react";
import baseColors from "@/data/base-colors";
import LearnMore from "@/components/global/LearnMore";
import Link from "next/link";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import SingleGridContent from "@/components/global/SingleGridContent";
import AboutDetails from "@/components/about/AboutDetails";
import TestimonialCard from "@/components/testimonial/TestimonialCard";
import WhyUs from "@/components/global/WhyUs";

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
   <div className='divide-y p-4'>
    <LearnMore
     detailsList={[
      {
       icon: "📚",
       header: "Startups and agencies can struggle with scaling",
       details:
        "Especially when you want to find quality talent but don't have the time and resources to do so. But...",
      },
      {
       icon: "🌎",
       header: "Time should not be a factor.",
       details:
        "Established companies with complex hiring processes and checklists can spend months finding the right talent. A fast-moving business has different priorities.",
      },
      {
       icon: "🔧",
       header: "The best talent wants flexibility.",
       details:
        "The era of remote work is here to stay, in fact, the best of the best actually prefers the freedoms of freelancing & remote work. The hidden gems of the job market.",
      },
     ]}
    />
   </div>
   <div className='flex px-2'>
    <Link
     href='/contact'
     className='font-semibold rounded-md p-3 w-full text-center'
     style={{ backgroundColor: baseColors.forBusinesses.primary }}>
     Schedule a Quick Demo
    </Link>
   </div>

   <LearnMoreHeader
    headingTexts={{
     heading: "How do I know all of this? 🤨",
     subHeading: "Because I have seen the gig economy from all THREE sides.",
    }}
    colorDetails={{ primary: baseColors.forBusinesses.primary }}
   />

   <div className='divide-y p-4'>
    <LearnMore
     detailsList={[
      {
       icon: "📚",
       header: "Startups and agencies can struggle with scaling",
       details:
        "Especially when you want to find quality talent but don't have the time and resources to do so. But...",
      },
      {
       icon: "🌎",
       header: "Time should not be a factor.",
       details:
        "Established companies with complex hiring processes and checklists can spend months finding the right talent. A fast-moving business has different priorities.",
      },
      {
       icon: "🔧",
       header: "The best talent wants flexibility.",
       details:
        "The era of remote work is here to stay, in fact, the best of the best actually prefers the freedoms of freelancing & remote work. The hidden gems of the job market.",
      },
     ]}
    />
   </div>

   <div className=''>
    <Image
     src='/images/social-sharing.png'
     alt='Imtiaz Ahmed'
     width={1920}
     height={1080}
     className='rounded-lg'
    />
   </div>

   <LearnMoreHeader
    headingTexts={{
     heading: "How can a workshop help with all that? 👍",
     subHeading:
      "This one-day online workshop touches on the four keystones of freelance talent acquisition.",
    }}
    colorDetails={{ primary: baseColors.forBusinesses.primary }}
   />

   <div className='grid md:grid-cols-2'>
    <SingleGridContent
     imagesData={{
      src: "/images/hero/temp_img_2.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Session 1) Organizational demand" }}
     paragraphTexts={{
      primary: "60 minutes, interactive online session.",
      secondary:
       "We identify what areas of your organization would benefit the most from finding freelance talent, how many work hours would you need, and what kind of exact talent you require. We talk about budget, goals and what's realistic.",
     }}
    />
    <SingleGridContent
     imagesData={{
      src: "/images/hero/temp_img_2.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Session 2) Where to find talent" }}
     paragraphTexts={{
      primary: "90 minutes, interactive online session.",
      secondary:
       "We discuss the most common freelancing platforms, from UpWork through Fiverr to job hunting on remote boards. We talk about the pros and cons of each platform, and brainstorm which one is the best choice for your business.",
     }}
    />
    <SingleGridContent
     imagesData={{
      src: "/images/hero/temp_img_2.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Session 3) How to find the right talent" }}
     paragraphTexts={{
      primary: "90 minutes, interactive online session.",
      secondary:
       "Once we agree on a plan of action regarding budget, goals and freelancing platform, we talk about how to post jobs, filter for great talent, spot common red flags & how to find the perfect talent for your budget.",
     }}
    />
    <SingleGridContent
     imagesData={{
      src: "/images/hero/temp_img_2.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Session 4) Working with outside talent" }}
     paragraphTexts={{
      primary: "60 minutes, interactive online session.",
      secondary:
       "Finally we discuss the best-practices of onboarding outside talent. This includes legal frameworks, project management, communication as well as boundary setting that is beneficial to both parties.",
     }}
    />
   </div>

   <LearnMoreHeader
    headingTexts={{
     heading: "What do I know about freelancing? 🙌",
     subHeading:
      "Hey, I'm Peter, and I have been teaching the business of freelancing for 10+ years.",
    }}
    colorDetails={{ primary: baseColors.forBusinesses.primary }}
   />

   <AboutDetails />
   <div className='flex px-2'>
    <Link
     href='/contact'
     className='font-semibold rounded-md p-3 w-full text-center'
     style={{ backgroundColor: baseColors.forBusinesses.primary }}>
     Schedule a Quick Demo
    </Link>
   </div>
   <LearnMoreHeader
    headingTexts={{
     heading:
      "Here's what freelance talent have to say about Freelance Pizza ☀️",
     subHeading:
      "Writers, designers, developers, marketers and creative professional have all placed their trust in us.",
    }}
    colorDetails={{ primary: baseColors.forBusinesses.primary }}
   />

   <div className='grid md:grid-cols-3 grid-cols-1'>
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Peter was shining a light on questions I never even asked myself!",
      position: "Freelance Journalist",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001_1.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
   </div>

   <WhyUs
    headingTexts={{
     heading: "Let's chat.",
    }}
    paragraphTexts={{
     primary: "Setup a quick demo ",
     secondary:
      " and learn how the Freelance Outsourcing Workshop can help skyrocket your business.",
    }}
    colorDetails={{
     primary: baseColors.forBusinesses.primary,
    }}
    links={{
     primary: { src: "/contact", text: "Schedule a session" },
    }}
   />
  </React.Fragment>
 );
}
