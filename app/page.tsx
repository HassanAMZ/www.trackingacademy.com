import TestimonialCard from "@/components/testimonial/TestimonialCard";
import HeroComponent from "@/components/global/HeroComponent";
import baseColors from "@/data/base-colors";
import StartHereSection from "@/components/home/StartHereSection";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import Clients from "@/components/home/Clients";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CallToActionSections from "@/components/global/CallToActionSections";
import Image from "next/image";
import React from "react";
import LearnMore from "@/components/global/LearnMore";
import Link from "next/link";
import SingleGridContent from "@/components/global/SingleGridContent";
import AboutDetails from "@/components/about/AboutDetails";
import WhyUs from "@/components/global/WhyUs";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

const Page: React.FC = () => {
 const clientData = [
  {
   src: "/images/clients/logos/upwork.png",
   alt: "Client 1",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/roastycoffee.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/shepherd.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/cmrd.png",
   alt: "Client 1",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/enhanza.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
 ];

 return (
  <ContainerLayout className=''>
   <React.Fragment>
    <HeroComponent
     textGroup={{
      welcomeText: "Top Rated Web Analyst on Upwork ",
      heading: "Grow your business with Accurate data",
      subHeading: {
       one: "Hey, I'm Hassan, ",
       two: "and I help businesses setup and audit Tracking Effectively and Accurately.",
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
      background: {
       desktop: "/images/hero/hero-image-md.png",
       mobile: "/images/hero/hero-image-sm.png",
      },
     }}
     colorDetails={{
      primary: baseColors.home.primary,
      dark: { value: 80 },
      light: { value: 10 },
     }}
    />

    <div className='hidden md:grid grid-cols-5 gap-2 pt-6 grayscale items-center justify-center'>
     {clientData.map((client, index) => (
      <Clients
       key={index}
       image={{
        width: client.width,
        height: client.height,
        src: client.src,
        alt: client.alt,
       }}
      />
     ))}
    </div>

    <div>
     <LearnMoreHeader
      headingTexts={{
       heading: "Configuring & Optimizing Website Tracking Setups 🚀",
       subHeading:
        "The key to understanding user behavior lies in precise tracking. Let's get it right for you.",
      }}
      colorDetails={{
       primary: baseColors.home.primary,
      }}
     />
     <div className='divide-y'>
      <LearnMore
       detailsList={[
        {
         icon: "📚",
         header: "Keep it Accurate",
         details:
          "Digital businesses need clear data. I ensure your website tracking is spot-on.",
        },
        {
         icon: "🚅",
         header: "Fast and Efficient",
         details:
          "Your business moves fast. I set up your tracking quickly without compromising on quality.",
        },
        {
         icon: "🏁",
         header: "Clear Insights",
         details:
          "Simple tracking means clear insights. Understand every user click and action with ease.",
        },
        {
         icon: "🌎",
         header: "Stay Updated",
         details:
          "The digital world changes often. I keep your tracking updated, so you're always in the know.",
        },
        {
         icon: "🔧",
         header: "White-Label Services",
         details:
          "Want to offer tracking services under your brand? I can help with that too.",
        },
       ]}
      />
     </div>
    </div>
    <div className='flex'>
     <Link
      href='/contact'
      className='font-semibold rounded-md p-3 w-full text-center'
      style={{ backgroundColor: baseColors.home.primary }}>
      Schedule a Quick Demo
     </Link>
    </div>

    {/* <div className='pt-2'>
     <Image
      src='/images/social-sharing.png'
      alt='Imtiaz Ahmed'
      width={1920}
      height={1080}
      className='rounded-lg'
     />
    </div> */}
    <div>
     <LearnMoreHeader
      headingTexts={{
       heading: "Boost Your Web Analytics 🚀",
       subHeading:
        "From setting up tracking tools to personalized consultations, discover how I can elevate your business's web analytics capabilities.",
      }}
      colorDetails={{ primary: baseColors.home.primary }}
     />
    </div>

    <div className='grid md:grid-cols-2 gap-2'>
     <SingleGridContent
      imagesData={{
       src: "/images/hero/001.png",
       alt: "Description of image",
       width: 600,
       height: 400,
      }}
      headingTexts={{ heading: "Audit Current Tracking" }}
      paragraphTexts={{
       primary: "Audit Your Setup:",
       secondary:
        "I'll look at your current tracking tools for GA4, FB Pixel etc. and see where things can be improved. We'll make sure everything is set up right and catching all the data you need.",
      }}
     />

     <SingleGridContent
      imagesData={{
       src: "/images/hero/004.png",
       alt: "Description of image",
       width: 600,
       height: 400,
      }}
      headingTexts={{ heading: "Expert Consultation Sessions" }}
      paragraphTexts={{
       primary: "Get Expert Advice:",
       secondary:
        "Not sure where to start with web analytics or how to optimize your current setup? Let's chat. I offer personalized consultations to help you understand and make the most of your data tools.",
      }}
     />
     <SingleGridContent
      imagesData={{
       src: "/images/hero/002.png",
       alt: "Description of image",
       width: 600,
       height: 400,
      }}
      headingTexts={{ heading: "Client-Side Tracking Setup" }}
      paragraphTexts={{
       primary: "Set Up Client Side Tracking:",
       secondary:
        "I'll set up tools like GA4, UA, and FB Pixel for you. This will help us see what your visitors are doing on your website and how we can serve them better.",
      }}
     />
     <SingleGridContent
      imagesData={{
       src: "/images/hero/003.png",
       alt: "Description of image",
       width: 600,
       height: 400,
      }}
      headingTexts={{ heading: "Master Server-Side Tracking" }}
      paragraphTexts={{
       primary: "Server-Side Tracking:",
       secondary:
        "I'll set up server-side tracking for tools like Facebook's Conversion API. This means better data collection without slowing down your website.",
      }}
     />
    </div>

    <LearnMoreHeader
     headingTexts={{
      heading: "Why trust my expertise in website tracking? 🤨",
      subHeading: "Because I've mastered web analytics from every angle.",
     }}
     colorDetails={{ primary: baseColors.home.primary }}
    />
    <AboutDetails />
    <div className='flex px-2'>
     <Link
      href='/contact'
      className='font-semibold rounded-md p-3 w-full text-center'
      style={{ backgroundColor: baseColors.home.primary }}>
      Schedule a Quick Demo
     </Link>
    </div>
    <LearnMoreHeader
     headingTexts={{
      heading: "Here's what my Clients have to say about me ☀️",
      subHeading:
       "Writers, designers, developers, marketers and creative professional have all placed their trust in us.",
     }}
     colorDetails={{ primary: baseColors.home.primary }}
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
       position: "Gads Setup",
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
   </React.Fragment>

   <WhyUs
    headingTexts={{
     heading: "Let's chat.",
    }}
    paragraphTexts={{
     primary: "Setup a quick demo ",
     secondary:
      "Schedule a session and discover how tailored tracking configurations can elevate your website's performance.",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
    links={{
     primary: { src: "/contact", text: "Schedule a session" },
    }}
   />
  </ContainerLayout>
 );
};

export default Page;
