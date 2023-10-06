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
     primary: baseColors.service.primary,
     dark: { value: 80 },
     light: { value: 10 },
    }}
   />
   <TwoGridContent
    imagesData={{
     alt: "temp",
     src: "/images/hero/temp_img.png",
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
    colorDetails={{ primary: baseColors.service.primary }}
    order={1} // Grid order
   />
   <TwoGridContent
    imagesData={{
     alt: "temp",
     src: "/images/hero/temp_img_2.png",
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
       "Gain an overview of your progress with the structured Freelancing Pizza Canvas.",
     },
    ]}
    primaryLink={{ src: "#", text: "Enroll Here" }}
    colorDetails={{ primary: baseColors.service.primary }}
    order={-1}
   />
   <div className='flex md:flex-row flex-col'>
    <SingleGridContent
     imagesData={{
      src: "/images/hero/temp_img_2.png",
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
      src: "/images/hero/temp_img_2.png",
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
    colorDetails={{ primary: baseColors.service.primary }}
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
   <LearnMoreHeader
    headingTexts={{
     heading: "Transform your carreer",
     subHeading:
      "Our programs were designed to guide you though launching or improving your freelance business.",
    }}
    colorDetails={{ primary: baseColors.service.primary }}
   />
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
   <TestimonialCard
    className='!py-8'
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
   />{" "}
   <WhyUs
    headingTexts={{
     heading: "Why pizza? 🍕",
    }}
    paragraphTexts={{
     primary: "Because freelancing is like pizza, ",
     secondary:
      "the dough, as in the business fundamentals are the same—but everybody gets to pick their own toppings!",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
    links={{
     primary: { src: "/#start-here", text: "Get Started with Freelancing!" },
    }}
   />
  </React.Fragment>
 );
}
