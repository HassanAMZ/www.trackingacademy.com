import HeroComponent from "@/components/global/HeroComponent";
import React from "react";
import TwoGridContent from "@/components/global/TwoGridContent";
import SingleGridContent from "@/components/global/SingleGridContent";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import WhyUs from "@/components/global/WhyUs";
import CallToActionSections from "@/components/global/CallToActionSections";
import StartHereSection from "@/components/home/StartHereSection";

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
      heading: "Not sure where to start? 🌱",
      subHeading: "Take a look at these free resources on freelancing!",
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
     background: {
      desktop: "/images/hero/hero-image-md.png",
      mobile: "/images/hero/hero-image-sm.png",
     },
    }}
   />
   <StartHereSection />
   <LearnMoreHeader
    headingTexts={{
     heading: "What is Freelancing in 6 Weeks Program? 🚀",
     subHeading:
      "We don’t just hand you tools. We make sure you know how to use them.",
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
    order={-1}
   />

   <LearnMoreHeader
    headingTexts={{
     heading: "  Designed for all kinds of creative professionals ☀️",
     subHeading:
      "Writers, designers, developers, marketers, coaches and many other have all enjoyed the program!",
    }}
   />
   <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
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

   <CallToActionSections />

   <WhyUs
    headingTexts={{
     heading: "Why Web Analytics? 📊",
    }}
    paragraphTexts={{
     primary: "Because digital understanding is like a map,",
     secondary:
      "the foundational tools like GA4, Tag Manager, and web tracking are the land and terrain—but how you navigate and understand them defines your journey's success!",
    }}
    links={{
     primary: { src: "/courses", text: "Explore Our Courses!" },
    }}
   />
  </React.Fragment>
 );
}
