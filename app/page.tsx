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
  <main className=''>
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
      background: "/images/hero/hero-image.png",
     }}
     colorDetails={{
      primary: baseColors.home.primary,
      dark: { value: 80 },
      light: { value: 10 },
     }}
    />

    <ContainerLayout className='hidden md:grid grid-cols-5 gap-2 pt-6 grayscale items-center justify-center'>
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
    </ContainerLayout>

    <ContainerLayout>
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
    </ContainerLayout>
    <ContainerLayout className='flex'>
     <Link
      href='/contact'
      className='font-semibold rounded-md p-3 w-full text-center'
      style={{ backgroundColor: baseColors.home.primary }}>
      Schedule a Quick Demo
     </Link>
    </ContainerLayout>

    {/* <ContainerLayout className='pt-2'>
     <Image
      src='/images/social-sharing.png'
      alt='Imtiaz Ahmed'
      width={1920}
      height={1080}
      className='rounded-lg'
     />
    </ContainerLayout> */}

    <LearnMoreHeader
     headingTexts={{
      heading: "Boost Your Web Analytics 🚀",
      subHeading:
       "From setting up tracking tools to personalized consultations, discover how I can elevate your business's web analytics capabilities.",
     }}
     colorDetails={{ primary: baseColors.home.primary }}
    />

    <div className='grid md:grid-cols-2'>
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
   </React.Fragment>

   <CallToActionSections
    colorDetails={{
     primary: baseColors.home.primary,
    }}
   />
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
   {/* <div>
    <ContainerLayout className='pb-4'>
     <CustomHeader text='Recent Web Analytics & Tracking Projects' />
     <RecentClientSlider />
    </ContainerLayout>

    <InfoSection
     title='Web analytics is a testament to precision'
     description={
      <>
       Shahzada provides a detailed explanation of his innovative use of
       technology and expertise in web analytics, ensuring clear data insights.
      </>
     }
     embedId='EzSy4XULN5A'
     testimonial='Listen up, this is crucial!'
     flexDirection=''
    />

    <InfoSection
     title='Partner with an expert who has effectively managed the tracking of over 250+ clients.'
     description={
      <>
       With my four years of experience in web analytics, I offer insightful
       advice and strategies to both new and established businesses.
       <ul className='list-disc list-inside pl-4 py-2'>
        <li>Help with auditing website's tracking</li>
        <li>Easy-to-read reports</li>
        <li>Help with Google tools and analytics</li>
        <li>Web and Server tracking</li>
        <li>Expert in tools like GA4, UA, FB Pixel, and more</li>
       </ul>
       <div className='flex pt-2 items-center justify-left gap-x-4'>
        <Link href='/portfolio' className='primaryButton'>
         Browse our portfolio <span aria-hidden='true'>&rarr;</span>
        </Link>
       </div>
      </>
     }
     embedId='W0ZgVnIGNW4'
     flexDirection='sm:flex-row-reverse'
     backgroundOverlay={true}
    />
    <InfoSection
     title='James Hammond, CEO of Equifund Mortgage'
     description={
      <>
       James, a satisfied client, shares:
       <br />
       <br />
       'Our business required meticulous tracking. Hassan's expertise was a
       game-changer. Not only did he want to understand our audience and their
       needs, but he also had the technical prowess to implement tracking
       solutions that have been transformative for us.'
      </>
     }
     embedId='EzSy4XULN5A'
     testimonial='Amazing speedy and expert knowledge to fix tracking issues - James'
    />

    <ContainerLayout>
     <section className='py-5 sm:py-10 flex flex-col sm:items-center gap-2 sm:text-center backgroundOverlay  p-2'>
      <h3 className='text-2xl font-medium pb-2 '>
       Meet Shahzada Ali Hassan, Your Web Analytics and Tracking Expert
      </h3>
      <div>
       <Divider />
       <Divider />
      </div>
      <p className='font-medium max-w-2xl'>
       I'm not a team, but an individual freelancer with a passion for web
       analytics and a dedication to providing exceptional services.
      </p>
      <p className='max-w-2xl'>
       Focused on web analytics and optimization, my aim is simple: to ensure
       your website doesn't just look good but performs exceptionally well in
       generating results and{" "}
       <span className='font-medium'> zain helps me with YouTube.</span>
      </p>
      <div className='w-full sm:w-2/3 md:w-3/4 pt-5'>
       <div className='flex flex-row gap-2'>
        {avatarsDetails.map((avatar, key) => {
         return <AvatarCard avatar={avatar} key={key} />;
        })}
       </div>
      </div>
     </section>
    </ContainerLayout>

    <ContainerLayout>
     <section>
      <TestimonialCard client={clientDetails[3]} />
     </section>
    </ContainerLayout>

    <InfoSection
     title='Optimize your website with advanced analytics'
     description={
      <React.Fragment>
       <p className='font-medium'>
        Our web analytics and tracking strategy fine-tunes your site for better
        user understanding and engagement.
       </p>
       <br />
       Boost your online presence with data-driven insights. If you can't
       measure it, you can't manage it. Ensure visitors not only find what they
       seek, but also what you want them to see. An analytics-driven strategy
       includes:
       <ul className='list-disc list-inside pl-4 py-2'>
        <li> Advanced tracking setup & navigation</li>
        <li> Data-rich dashboards & reports</li>
        <li> User behavior analysis </li>
        <li>Conversion tracking optimization</li>
       </ul>
       When your website is backed by accurate analytics, it's easier to align
       with user preferences and business objectives.
      </React.Fragment>
     }
     embedId='EzSy4XULN5A'
     testimonial='Listen up, this is crucial!'
    />
    <InfoSection
     title='Harness the Power of Data-Driven Storytelling'
     description={
      <>
       Is your tracking strategy evolving? Your website is your digital
       footprint, reflecting your current brand image. Analytics and content
       shape your online narrative. Using the insights I've gathered, I design
       strategies that echo your message, voice, and tone. Together, we’ll shape
       a digital strategy that resonates with your audience.
       <br />
       <ul className='list-disc list-inside pl-4 py-2'>
        <li>Develop insightful conversion strategies</li>
        <li>Conceptualize analytics messaging & data strategies</li>
        <li>Gather and streamline tracking tools and standards</li>
        <li>Collaborate to forge an online strategy you believe in</li>
       </ul>
       <br />
       By marrying vision to data, your online strategy appeals to visitors,
       compelling meaningful actions.
      </>
     }
     embedId='W0ZgVnIGNW4'
     testimonial='Listen up, this is crucial!'
     flexDirection='sm:flex-row-reverse'
     backgroundOverlay={true}
    />

    <ContainerLayout>
     <TestimonialCard client={clientDetails[3]} />
    </ContainerLayout>

    <InfoSection
     title='Web Analytics: A Symphony of Decisions'
     description={
      <React.Fragment>
       <p>The start is merely the beginning.</p>
       <p>
        Every decision affects outcomes. Every outcome can be analyzed. Every
        analysis offers improvement avenues.
       </p>
       <ul className='list-disc list-inside pl-4 py-2'>
        <li>Setup meticulous tracking with filters, goals, and funnels</li>
        <li>Employ advanced tools like Google Tag Manager</li>
        <li>Regularly review reports and dashboards</li>
        <li>React to data, refining for better results</li>
        <li>Continuously optimize for sustained success</li>
       </ul>
       <p>
        Web analytics isn’t just about numbers; it’s about stories. I translate
        data into insights, crafting strategies that convey your brand's story
        and produce measurable business outcomes.
       </p>
      </React.Fragment>
     }
     embedId='EzSy4XULN5A'
     testimonial='Listen up, this is crucial!'
    />

    <InfoSection
     title='Not Sure What You Need?'
     description={
      <React.Fragment>
       <p>That’s okay. Priorities evolve.</p>
       <p>
        Needs change, and I understand that. Drawing from extensive experience
        with diverse clients, I recognize the shifts in focus that can happen.
        I’m here to adapt and guide.
       </p>
       <ul className='list-disc list-inside pl-4 py-2'>
        <li>Visual aesthetics and branding</li>
        <li>Data insights, results, and ROI</li>
        <li>Collaboration, responsiveness, and care</li>
       </ul>
       <p>
        The roadmap might shift, but the destination remains: A refined online
        strategy you'll cherish.
       </p>
      </React.Fragment>
     }
     embedId='W0ZgVnIGNW4'
     flexDirection='sm:flex-row-reverse'
     backgroundOverlay={true}
    />

    <ContainerLayout>
     <TestimonialCard client={clientDetails[3]} />
    </ContainerLayout>
   </div> */}
  </main>
 );
};

export default Page;
