import TestimonialCard from "@/components/testimonial/TestimonialCard";
import HeroComponent from "@/components/global/HeroComponent";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import Clients from "@/components/for-businesses/Clients";
import React from "react";
import LearnMore from "@/components/global/LearnMore";
import Link from "next/link";
import SingleGridContent from "@/components/global/SingleGridContent";
import AboutDetails from "@/components/about/AboutDetails";
import WhyUs from "@/components/global/WhyUs";

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
  <section>
   <React.Fragment>
    <HeroComponent
     textGroup={{
      welcomeText: "Trusted by 25+ Agencies for Analytics Excellence!",
      heading: "Expand your agency services with web analytics.",
      subHeading: {
       one: "Offering comprehensive, white-label solutions in web analytics, ",
       two: " empowering you to deliver deeper insights and enhanced reporting to your clients. ",
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

    <div className='hidden lg:grid grid-cols-5 gap-2 pt-6  items-center justify-center'>
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
       heading: "Data-Driven Insights for Digital Agencies🚀",
       subHeading:
        "I use advanced tools and strategies to give your agency the analytics capabilities it needs for smart decision-making and client success.",
      }}
     />
     <div className='divide-y'>
      <LearnMore
       detailsList={[
        {
         icon: "🔗",
         header: "Comprehensive Integration",
         details:
          "From Google Analytics 4 to complex server side tracking setups, I offer a full spectrum of integration services.",
        },
        {
         icon: "👥",
         header: "Customized Solutions",
         details:
          "Tailor-made tracking solutions to fit your agency's and your clients' unique needs.",
        },
        {
         icon: "🤝",
         header: "Seamless Collaboration",
         details:
          "Working closely with your team for seamless integration of tracking implementation, training, and documentation.",
        },
        {
         icon: "⚙️",
         header: "Advanced Configuration",
         details:
          "Specializing in advanced configuration for detailed and accurate user data collection for CMS such as Shopify, WordPress, or custom-built sites on ReactJs, NextJs, etc.",
        },
        {
         icon: "🛠️",
         header: "Reliable Support",
         details:
          "Providing ongoing support to ensure your tracking configurations remain effective and updating them is easy.",
        },
        {
         icon: "🚀",
         header: "Easy Client Onboarding",
         details:
          "Facilitate smooth onboarding of new clients for your agency, adding a valuable analytics service to your portfolio.",
        },
       ]}
      />
     </div>
    </div>

    <div className='flex'>
     <Link
      href='/contact'
      className='font-semibold rounded-lg p-3 w-full text-center'>
      Schedule a Quick Demo
     </Link>
    </div>

    <React.Fragment>
     <LearnMoreHeader
      headingTexts={{
       heading: "Here's what my Clients have to say about me ☀️",
       subHeading:
        "Marketing and web design agencies, along with developers, marketers, and creative professionals, consistently chooses me as their trusted partner.",
      }}
     />
     <div className='grid lg:grid-cols-2 grid-cols-1'>
      <TestimonialCard
       person={{
        testimonial:
         "Professional, fast and efficient at GA4 ecommerce tracking. He took the lead and solved my problem and I would definitely recommend working with him.",
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
         "Well, this was not the first project I did with Hassan, but definitely not the last! It is always an absolute pleasure to work with him. Hassan is fast, precise and super patient with my queries. For anyone looking for a top notch tracking expert, Hassan is the man and I look forward to working with him in the future.",
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
         "Very thorough and professional. Identified a problem with my meta tracking and implemented a complete overhaul that has resolved the problem. Would recommend.",
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

    <div>
     <LearnMoreHeader
      headingTexts={{
       heading: "Analytics Services for Agencies.",
       subHeading:
        "From setting up tracking tools to personalized consultations, discover how I can elevate your business's web analytics capabilities.",
      }}
     />
    </div>
    <div className='grid lg:grid-cols-2 gap-2'>
     <SingleGridContent
      headingTexts={{ heading: "🛠️ Google Tag Manager Configuration" }}
      paragraphTexts={{
       primary: "Set up and configure GTM",
       secondary:
        "with a comprehensive data layer for accurate tracking across your website.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "🔵 Facebook Pixel & Conversion API" }}
      paragraphTexts={{
       primary: "Integrate Facebook Pixel",
       secondary:
        "and set up the Conversion API for robust tracking of user interactions on your site.",
      }}
     />
     <SingleGridContent
      headingTexts={{ heading: "🔍 Web Analytics Auditing" }}
      paragraphTexts={{
       primary: "Comprehensive Analytics Audit",
       secondary:
        "and thoroughly examine your current analytics setup across all platforms to identify gaps and suggest improvements for more accurate data capture.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "🌐 GA4 Implementation & Migration" }}
      paragraphTexts={{
       primary: "Migrate to Google Analytics 4",
       secondary:
        "for newer analytics, setting up advanced tracking features to leverage the full potential of the latest Google Analytics 4 platform.",
      }}
     />
     <SingleGridContent
      headingTexts={{ heading: "🔗 Server-Side Tracking with Stape.io" }}
      paragraphTexts={{
       primary: "Implement Server-Side Tracking",
       secondary:
        "with stap.io for advanced server-side tracking solutions ensuring comprehensive data collection and privacy compliance.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "🎶 TikTok Pixel & Event API" }}
      paragraphTexts={{
       primary: "Set Up TikTok Pixel",
       secondary:
        "and Event API for detailed tracking of user engagement and conversions on TikTok ads.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "👻 Snapchat Tracking & Conversion API" }}
      paragraphTexts={{
       primary: "Snapchat Tracking and Conversion API ",
       secondary: "for enhanced insight into user interactions on Snapchat.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "📈 Google & Bing Ads Tracking" }}
      paragraphTexts={{
       primary: "Optimize Ad Tracking",
       secondary:
        "and setup remarketing tags for Google Ads and Bing Ads, ensuring accurate campaign performance data.",
      }}
     />

     <SingleGridContent
      headingTexts={{
       heading: "🛍️ Data Layer Setup for webistes",
      }}
      paragraphTexts={{
       primary:
        "Shopify, WordPress and Custom Built Sites Data Layer Configuration",
       secondary:
        "for precise tracking of ecommerce metrics and user behavior.",
      }}
     />

     <SingleGridContent
      headingTexts={{ heading: "🔄 Cross-Domain Troubleshooting" }}
      paragraphTexts={{
       primary: "Solve Cross-Domain Issues:",
       secondary:
        "Identify and fix cross-domain tracking issues for accurate and consistent data collection across multiple domains.",
      }}
     />
    </div>

    <div className='flex'>
     <Link
      href='/contact'
      className='font-semibold rounded-lg p-3 w-full text-center'>
      Schedule a Quick Demo
     </Link>
    </div>
    <LearnMoreHeader
     headingTexts={{
      heading: "Why trust my expertise in website tracking? 🤨",
      subHeading:
       "Because I've mastered web analytics from every angle and helped more than 250 Clients over last 4 years.",
     }}
    />
    <AboutDetails />
   </React.Fragment>

   <WhyUs
    headingTexts={{
     heading: "Let's chat.",
    }}
    paragraphTexts={{
     primary: "Setup a quick demo: ",
     secondary:
      "Schedule a session and discover how tailored tracking configurations can elevate your clients website's performance and help your agency.",
    }}
    links={{
     primary: { src: "/contact", text: "Schedule a session" },
    }}
   />
  </section>
 );
};

export default Page;
