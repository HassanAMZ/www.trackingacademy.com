import HeroComponent from "@/components/global/HeroComponent";
import React from "react";
import baseColors from "@/data/base-colors";
import TwoGridContent from "@/components/global/TwoGridContent";
import SingleGridContent from "@/components/global/SingleGridContent";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import TestimonialCard from "@/components/testimonial/TestimonialCard";
import { Paragraphmd } from "@/components/typography/Heading";
import FreeResoursesSection from "@/components/global/FreeResoursesSection";
import WhyUs from "@/components/global/WhyUs";
import CallToActionSections from "@/components/global/CallToActionSections";

export default function Page() {
 return (
  <React.Fragment>
   <HeroComponent
    textGroup={{
     welcomeText: "Become a Freelancer with our 6-Week Mastery Program ",
     heading: "From ZERO to freelancer in 6 weeks",
     subHeading: {
      one: "",
      two: "A step-by-step course designed to help you start and grow your freelance business.",
     },
     learnMore: {
      heading: "What is Freelancing in 6 Weeks Program? 🚀",
      subHeading:
       "We don’t just hand you tools. We make sure you know how to use them.",
     },
    }}
    links={{
     primary: { src: "#", text: "Enroll Here" },
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
     primary: baseColors.forFreelancers.primary,
     dark: { value: 80 },
     light: { value: 10 },
    }}
   />
   <TwoGridContent
    imagesData={{
     alt: "temp",
     src: "/images/hero/001.png",
     width: 863,
     height: 1163,
    }}
    learnMoreHeader='A proven recipe of freelance success'
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
    primaryLink={{ src: "#", text: "Enroll Here" }}
    colorDetails={{ primary: baseColors.forFreelancers.primary }}
    order={1} // Grid order
   />
   <TwoGridContent
    imagesData={{
     alt: "temp",
     src: "/images/hero/002.png",
     width: 500,
     height: 412,
    }}
    learnMoreHeader='Actionable, practical, impactful'
    detailsList={[
     {
      icon: "▶️",
      header: "Explainer Videos",
      details:
       "44 high-quality over-the-shoulder explainer videos showing the exact steps of HOW to build your business.",
     },
     {
      icon: "🎨",
      header: "Done For You",
      details:
       "47 customizable templates, checklists, and spreadsheets, all designed to help you build a freelance business faster.",
     },
     {
      icon: "🖼",
      header: "Structured Approach",
      details:
       "Gain an overview of your progress with the structured Freelancing Canvas.",
     },
    ]}
    primaryLink={{ src: "#", text: "Enroll Here" }}
    colorDetails={{ primary: baseColors.forFreelancers.primary }}
    order={-1}
   />
   <div className='flex md:flex-row flex-col'>
    <SingleGridContent
     imagesData={{
      src: "/images/hero/001.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Real-life examples, real freelancers" }}
     paragraphTexts={{
      primary: "You are not alone on your journey.",
      secondary:
       "The course comes with case study videos of real freelance businesses. Gain inspiration, insight, and learn what the current best practices are.",
     }}
    />
    <SingleGridContent
     imagesData={{
      src: "/images/hero/003.png",
      alt: "Description of image",
      width: 600,
      height: 400,
     }}
     headingTexts={{ heading: "Email feedback and coaching" }}
     paragraphTexts={{
      primary: "Assurance that you are on the right path.",
      secondary:
       "Whenever you have a question about your freelance business, a reply will be in your inbox within hours.",
     }}
    />
   </div>
   <LearnMoreHeader
    headingTexts={{
     heading: "  Designed for all kinds of creative professionals ☀️",
     subHeading:
      "Writers, designers, developers, marketers, coaches and many other have all enjoyed the program!",
    }}
    colorDetails={{ primary: baseColors.forFreelancers.primary }}
   />
   <div className='grid lg:grid-cols-3 grid-cols-1'>
    <TestimonialCard
     person={{
      testimonial:
       "Professional, fast and efficient at GA4 ecommerce tracking. He took the lead and solved our problem and I would definitely recommend working with him.",
      position: "GA4 ecommerce - bug fix - ecommerce tracking",
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
       "Fantastic job, did exactly what was asked and was very prompt with communication",
      position: "GA4 & Proper Conversion Tracking",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/001.jpg",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial: "Very happy working with Hassan! Does a great job!",
      position: "GDS Setup",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/JamieNorsa.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Well, this was not the first project we did with Hassan, but definitely not the last! It is always an absolute pleasure to work with him. Hassan is fast, precise and super patient with our queries. For anyone looking for a top notch tracking expert, Hassan is the man and we look forward to working with him in the future.",
      position: "FixSet Up Advanced GA4 Reports",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/008.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial:
       "Very thorough and professional. Identified a problem with our meta tracking and implemented a complete overhaul that has resolved the problem. Would recommend.",
      position: "Audit Google Tag and FB/Tiktok Pixels",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/007.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
    <TestimonialCard
     person={{
      testimonial: "Another good experience from a high quality professional",
      position: "FB, GA and Shopify set up",
      name: "Clarissa Jurumenha",
      image: {
       src: "/images/clients/MalikOsama.jfif",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       width: 1920,
       height: 1080,
      },
     }}
    />
   </div>
   <CallToActionSections
    colorDetails={{ primary: baseColors.forFreelancers.primary }}
   />
   <TestimonialCard
    className='!py-8'
    person={{
     testimonial:
      "Hassan was shining a light on questions I never even asked myself!",
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
   <WhyUs
    headingTexts={{
     heading: "Why Web Analytics? 📊",
    }}
    paragraphTexts={{
     primary: "Because digital understanding is like a map,",
     secondary:
      "the foundational tools like GA4, Tag Manager, and web tracking are the land and terrain—but how you navigate and understand them defines your journey's success!",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
    links={{
     primary: { src: "/#courses", text: "Explore Our Courses!" },
    }}
   />
  </React.Fragment>
 );
}
