import React, { useState, useEffect } from "react";
import Hero from "@/components/holders/Hero";
import RecentClientSlider from "@/components/holders/RecentClientSlider";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import Link from "next/link";
import { ExpertInfoProps } from "@/types/index";
import AvatarCard from "@/components/cards/AvatarCard";
import avatarsDetails from "@/data/avatar-details";
import TestimonialCard from "@/components/cards/TestimonialCard";
import clientDetails from "@/data/clients-details";

const ExpertInfo: React.FC<ExpertInfoProps> = ({ title, description }) => {
 return (
  <React.Fragment>
   <h2 className='text-3xl font-bold py-2'>{title}</h2>
   <Divider />
   <Divider />
   <div className='text-left'>{description}</div>
  </React.Fragment>
 );
};

const Divider: React.FC = () => {
 return <div className='w-12 h-px bg-gray-900 mb-1'></div>;
};

const Page: React.FC = () => {
 return (
  <main className='flex flex-col sm:gap-2'>
   <Hero />
   <ContainerLayout className='sm:py-5'>
    <div className='p-2'>
     <h3 className='font-semibold py-2 sm:py-4'>
      Recent Web Analytics & Tracking Projects
     </h3>
     <RecentClientSlider />
    </div>
   </ContainerLayout>

   <ContainerLayout className=''>
    <div className='sm:pb-10 grid grid-cols-1 sm:grid-cols-2 gap-2 p-2'>
     <section className=''>
      <h3 className='flex w-fit justify-left rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
       Shahzada Ali Hassan, Tracking Expert
      </h3>
      <ExpertInfo
       title='Web analytics is a testament to precision'
       description={
        <>
         Shahzada provides a detailed explanation of his innovative use of
         technology and expertise in web analytics, ensuring clear data
         insights.
        </>
       }
      />
     </section>
     <section className='flex justify-center flex-col '>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
      <p className='hidden sm:flex pt-1 text-sm'>Listen up, this is crucial!</p>
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout className=''>
    <div className='py-5 grid grid-cols-1 sm:grid-cols-2 bg-gray-900 bg-opacity-5 shadow-md rounded-md gap-2 p-2'>
     <section className='flex justify-center flex-col order-2 sm:order-1 '>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
     </section>
     <section className='order-1 sm:order-2'>
      <ExpertInfo
       title='Partner with an expert who has effectively managed the tracking of over 250+ clients.'
       description={
        <>
         With my four years of experience in web analytics, I offer insightful
         advice and strategies to both new and established businesses.
        </>
       }
      />

      <ul className='list-disc list-inside pl-4 py-2'>
       <li>Help with auditing website's tracking</li>
       <li>Easy-to-read reports</li>
       <li>Help with Google tools and analytics</li>
       <li>Web and Server tracking</li>
       <li>Expert in tools like GA4, UA, FB Pixel, and more</li>
      </ul>

      <div className='flex pt-2 items-center justify-left gap-x-4'>
       <Link
        href='/portfolio'
        className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border'>
        Browse our portfolio <span aria-hidden='true'>&rarr;</span>
       </Link>
      </div>
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout className=''>
    <div className='py-5 grid grid-cols-1 sm:grid-cols-2 rounded-md gap-2 p-2'>
     <section className=''>
      <h3 className='flex w-fit justify-left rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
       James Hammond, CEO of Equifund Mortgage
      </h3>
      <ExpertInfo
       title='What it’s like working with the Hassan'
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
      />
     </section>
     <section className='flex justify-center flex-col'>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
      <p className='hidden sm:flex py-1 text-justify text-sm'>
       "Amazing speedy and expert knowledge to fix tracking issues - James"
      </p>
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout>
    <section className='py-5 flex flex-col sm:items-center gap-2 sm:text-center bg-gray-900 bg-opacity-5 shadow-md rounded-md sm:py-4 p-2'>
     <h3 className='text-3xl font-bold pb-2 '>
      Meet Shahzada Ali Hassan, Your Web Analytics and Tracking Expert
     </h3>
     <div>
      <Divider />
      <Divider />
     </div>
     <p className='font-semibold max-w-2xl'>
      I'm not a team, but an individual freelancer with a passion for web
      analytics and a dedication to providing exceptional services.
     </p>
     <p className='max-w-2xl'>
      Focused on web analytics and optimization, my aim is simple: to ensure
      your website doesn't just look good but performs exceptionally well in
      generating results and{" "}
      <span className='font-semibold'> zain helps me with YouTube.</span>
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

   <ContainerLayout className=''>
    <div className='pt-5 sm:pb-10 grid grid-cols-1 sm:grid-cols-2 gap-2 p-2'>
     <section className=''>
      {/* <h3 className='flex w-fit justify-left rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'></h3> */}
      <ExpertInfo
       title='Optimize your website with advanced analytics'
       description={
        <React.Fragment>
         <p className='font-semibold'>
          Our web analytics and tracking strategy fine-tunes your site for
          better user understanding and engagement.
         </p>
         <br />
         Boost your online presence with data-driven insights. If you can't
         measure it, you can't manage it. Ensure visitors not only find what
         they seek, but also what you want them to see. An analytics-driven
         strategy includes:
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
      />
     </section>
     <section className='flex justify-center flex-col '>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
      <p className='hidden sm:flex pt-1 text-sm'>Listen up, this is crucial!</p>
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout className=''>
    <div className='sm:pb-10 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-900 bg-opacity-5 shadow-md rounded-md p-2'>
     <section className='flex justify-center flex-col order-2 sm:order-1'>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
     </section>
     <section className='order-1 sm:order-2'>
      <ExpertInfo
       title='Harness the Power of Data-Driven Storytelling'
       description={
        <>
         Is your tracking strategy evolving? Your website is your digital
         footprint, reflecting your current brand image. Analytics and content
         shape your online narrative. Using the insights I've gathered, I design
         strategies that echo your message, voice, and tone. Together, we’ll
         shape a digital strategy that resonates with your audience.
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
      />
     </section>
    </div>
   </ContainerLayout>
   <ContainerLayout>
    <TestimonialCard client={clientDetails[3]} />
   </ContainerLayout>
   <ContainerLayout className=''>
    <div className='pt-5 sm:pb-10 grid grid-cols-1 sm:grid-cols-2 gap-2 p-2'>
     <section className=''>
      <ExpertInfo
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
          Web analytics isn’t just about numbers; it’s about stories. I
          translate data into insights, crafting strategies that convey your
          brand's story and produce measurable business outcomes.
         </p>
        </React.Fragment>
       }
      />
     </section>

     <section className='flex justify-center flex-col '>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
      <p className='hidden sm:flex pt-1 text-sm'>Listen up, this is crucial!</p>
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout className=''>
    <div className='py-5 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-900 bg-opacity-5 shadow-md rounded-md p-2'>
     <section className='flex justify-center flex-col order-2 sm:order-1'>
      <YoutubeEmbed embedId='W0ZgVnIGNW4' />
     </section>
     <section className='order-1 sm:order-2'>
      <ExpertInfo
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
      />
     </section>
    </div>
   </ContainerLayout>

   <ContainerLayout>
    <TestimonialCard client={clientDetails[3]} />
   </ContainerLayout>
  </main>
 );
};

export default Page;
