import React from "react";
import Hero from "@/components/holders/Hero";
import RecentClientSlider from "@/components/holders/RecentClientSlider";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import Link from "next/link";
import { ExpertInfoProps } from "@/types/index";

const ExpertInfo: React.FC<ExpertInfoProps> = ({ title, description }) => {
 return (
  <React.Fragment>
   <h2 className='text-3xl font-bold py-2'>{title}</h2>
   <Divider />
   <Divider />
   <p className='text-left'>{description}</p>
  </React.Fragment>
 );
};

const Divider: React.FC = () => {
 return <div className='w-12 h-px bg-black mb-2'></div>;
};

const Page: React.FC = () => {
 return (
  <main className='flex flex-col sm:gap-2'>
   <Hero />
   <ContainerLayout className='py-5'>
    <h3 className='font-semibold'>Recent Web Analytics & Tracking Projects</h3>
    <RecentClientSlider />
   </ContainerLayout>

   <ContainerLayout className='pt-5 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-2'>
    <section className=''>
     <h3 className='flex w-fit justify-left rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
      Shahzada Ali Hassan, Tracking Expert
     </h3>
     <ExpertInfo
      title='Web analytics is a testament to precision'
      description={
       <>
        description='Shahzada provides a detailed explanation of his innovative
        use of technology and expertise in web analytics, ensuring clear data
        insights.' '
       </>
      }
     />
    </section>
    <section className='flex justify-center flex-col'>
     <YoutubeEmbed embedId='W0ZgVnIGNW4' />
     <p className='hidden sm:flex pt-1 text-sm'>Listen up, this is crucial!</p>
    </section>
   </ContainerLayout>

   <ContainerLayout className='pb-5 grid grid-cols-1 sm:grid-cols-2  gap-2 sm:bg-gray-900 sm:bg-opacity-5 shadow-md rounded-md'>
    <section className='flex justify-center flex-col order-2 md:order-1'>
     <YoutubeEmbed embedId='W0ZgVnIGNW4' />
    </section>
    <section className='order-1 md:order-2'>
     <ExpertInfo
      title='Partner with an expert in analytics who has effectively managed the tracking of over 250+ distinct clients.'
      description={
       <>
        'With my four years of experience in web analytics, I offer insightful
        advice and strategies to both new and established businesses.'
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
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border'>
       Browse our portfolio <span aria-hidden='true'>&rarr;</span>
      </Link>
     </div>
    </section>
   </ContainerLayout>

   <ContainerLayout className='pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2'>
    <section className=''>
     <h3 className='flex w-fit justify-left rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
      What it’s like working with Me
     </h3>
     <ExpertInfo
      title='What it’s like working with the Hassan'
      description={
       <>
        Chris, a satisfied client, shares:
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
      "Amazing speedy and expert knowledge to fix tracking issues - Chris"
     </p>
    </section>
   </ContainerLayout>
  </main>
 );
};

export default Page;
