"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import {
 Heading2xl,
 Heading3xl,
 Headingxl,
 Paragraphmd,
 Paragraphsm,
 Paragraphxs,
} from "@/components/typography/Heading";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm2";

interface DetailSectionProps {
 title: string;
 description: string;
 className?: string; // Optional className prop
}

interface Client {
 id: number;
 name: string;
 industry: string;
 clientName: string;
 website: string;
 details: string;
 images: string[]; // Array of image URLs
 testimonial: string; // Array of testimonials
 services: string[]; // Array of services
 stack: string[]; // Array of technology stack items
}

const clients: Client[] = [
 {
  id: 1,
  name: "Client 1",
  industry: "Industry 1",
  website: "https://client1website.com",
  details:
   "Republic Note is the first revenue-sharing, community-driven digital asset that empowers holders to share in the success of Republic’s world-changing ventures. We worked with their team to design the brand, website, and collateral. Great news: The Republic Note went on to raise 560% of its goal.",
  images: [
   "/images/hero/001.png",
   "/images/hero/002.png",
   "/images/hero/003.png",
   "/images/hero/001.png",
   "/images/hero/002.png",
   "/images/hero/003.png",
  ],
  clientName: "Colin Forsyth, Creative Director",
  testimonial:
   "We challenged Tracking Academy to bring the sauce for an ambitious redesign of our digital security, Republic Note—including logos, motion, web, and beyond. They produced exceptional creative, working against a timeline that was, to put it mildly, insanely aggressive. Freight entirely delivered on the age-old agency cliché of becoming a true extension of our team. Their culture, communication, and energy propelled our work through lots of stakeholders with justifiably high expectations. For Republic Note’s successful relaunch, Freight undoubtedly met the challenge we issued—and more. They brought the sauce.",

  services: ["VISUAL IDENTITY", "WEB DESIGN", "ART DIRECTION", "COLLATERAL"],
  stack: ["FIGMA", "ADOBE", "BLENDER"],
 },
 {
  id: 2,
  name: "Client 2",
  industry: "Industry 2",
  website: "https://client2website.com",
  details: "Details of Client 2...",
  images: [
   "/images/hero/003.png",
   "/images/hero/002.png",
   "/images/hero/001.png",
   "/images/hero/003.png",
   "/images/hero/002.png",
   "/images/hero/001.png",
  ],
  clientName: "Colin Forsyth, Creative Director",
  testimonial:
   "We challenged Tracking Academy to bring the sauce for an ambitious redesign of our digital security, Republic Note—including logos, motion, web, and beyond. They produced exceptional creative, working against a timeline that was, to put it mildly, insanely aggressive. Freight entirely delivered on the age-old agency cliché of becoming a true extension of our team. Their culture, communication, and energy propelled our work through lots of stakeholders with justifiably high expectations. For Republic Note’s successful relaunch, Freight undoubtedly met the challenge we issued—and more. They brought the sauce.",

  services: ["VISUAL IDENTITY", "WEB DESIGN", "ART DIRECTION", "COLLATERAL"],
  stack: ["FIGMA", "ADOBE", "BLENDER"],
 },
];

interface DividerProps {
 className?: string;
}

const Page: FC = () => {
 const [selectedClient, setSelectedClient] = useState<Client | null>(
  clients[0]
 );
 const [showDetails, setShowDetails] = useState(false); // New state for toggling views
 const [isFormOpen, setIsFormOpen] = useState(false);

 const toggleForm = () => {
  setIsFormOpen(!isFormOpen);
 };

 const DetailSection: FC<DetailSectionProps> = ({
  title,
  description,
  className,
 }) => {
  return (
   <div className={`py-3 ${className}`}>
    <Heading3xl className='uppercase pb-6 '>{title}</Heading3xl>
    <Paragraphmd className=''>{description}</Paragraphmd>
   </div>
  );
 };

 const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
   <div
    className={`flex items-center justify-between max-h-[2vh] ${
     className || ""
    }`}>
    <span className={`font-thin text-gray-400 ${className || ""}`}>+</span>
    <div
     className={`border-t border-gray-400 w-full mx-2 ${
      className || ""
     }`}></div>
    <span className={`font-thin text-gray-400 ${className || ""}`}>+</span>
   </div>
  );
 };

 return (
  <div className='bg-white relative dark:bg-black w-screen h-screen overflow-hidden py-4 px-6 flex flex-col justify-between'>
   <header className=''>
    <div className='flex flex-row justify-between max-h-[5vh] '>
     <div className='flex gap-2 '>
      <h1> icon 01 </h1>
      <h1> icon 02 </h1>
      <h1> icon 03 </h1>
     </div>
     <button className='z-20' onClick={toggleForm}>
      {isFormOpen ? "CLOSE" : "CONTACT"}
     </button>
    </div>
    <Divider className='z-20' />
    <div className='w-full text-center relative h-[8vh]'>
     <Image src='/images/logo_2.png' alt='Image' fill={true} />
    </div>

    <Divider />
   </header>
   <ContactForm isOpen={isFormOpen} closeForm={toggleForm} />
   <main className='grid grid-cols-4 divide-x-2 divide-gray-400 gap-2'>
    <div className='col-span-1 overflow-auto hide-scrollbar max-h-[75vh] pr-6'>
     <DetailSection
      title='About'
      description='Tracking Academy is an independent creative studio built on principle.'
     />
     <DetailSection
      title='INDEPENDENT'
      description='We rise to the level of the limits we accept. At the heart of Tracking Academy is independent thinking, we are owned by ourselves and collaborate with those willing to choose and create the realities they want to live in. There are no rules, only consequences.'
     />
     <DetailSection
      title='CREATIVE STUDIO'
      description='Tracking Academy is a creative business, practice, and project. We build
      brands and experiences. We incubate products and experiments. We invest in
      companies and people. Our pursuits vary widely, but the approach remains —
      a great creative practice is the known path to great unknowns.'
     />
     <DetailSection
      title='BUILT ON PRINCIPLE'
      description='If we don’t decide how we build, others will. For our team and clients,
      our principles lead us to choose the right partners, avoid the traps of
      soft thinking, shake the malaise of hard moments, filter great
      opportunities from great temptations, honor both performance and artistry,
      and make work we’re all damn proud of.'
     />
    </div>
    <div className='col-span-1 p-4 flex flex-col divide-y'>
     <Heading3xl className='uppercase pb-6'>Projects</Heading3xl>

     {clients.map((client) => (
      <div
       className={`py-2 relative flex items-center  hover:cursor-pointer ${
        selectedClient && selectedClient.id === client.id
         ? "selectedClient text-[#00ff6a] font-bold"
         : ""
       }`}
       key={client.id}
       onClick={() => setSelectedClient(client)}>
       <Paragraphmd className='clientName'>{client.name}</Paragraphmd>
      </div>
     ))}
    </div>
    <div className='col-span-2 p-4 overflow-auto hide-scrollbar max-h-[75vh]'>
     {selectedClient ? (
      <div>
       <div className='flex flex-row justify-between items-center pb-6'>
        <Heading3xl className='uppercase '>Project Details</Heading3xl>
        <div className='flex flex-row gap-4'>
         <button onClick={() => setShowDetails(!showDetails)}>
          <Paragraphxs className='text-[#00ff6a]'>
           {showDetails ? "CLOSE" : "INFO"}
          </Paragraphxs>
         </button>
         <Link
          href={selectedClient.website}
          target='_blank'
          rel='noopener noreferrer'>
          <Paragraphxs className='text-[#00ff6a]'>SITE</Paragraphxs>
         </Link>
        </div>
       </div>
       <div>
        {showDetails ? (
         <aside>
          <Paragraphmd className='ClientInfo'>
           {selectedClient.details}
          </Paragraphmd>
          <Heading3xl className='uppercase py-6'>TESTIMONIAL</Heading3xl>
          <Paragraphmd className='italic'>
           "{selectedClient.testimonial}" -- {selectedClient.clientName}
          </Paragraphmd>
          <div className='grid grid-cols-2 '>
           <div>
            <Heading3xl className='uppercase py-6'>SERVICES</Heading3xl>
            <div className='flex gap-2 flex-wrap'>
             {selectedClient.services.map((service, index) => (
              <Paragraphmd key={index}>
               {service}
               {index < selectedClient.services.length - 1 ? ", " : "."}
              </Paragraphmd>
             ))}
            </div>
           </div>
           <div>
            <Heading3xl className='uppercase py-6'>STACK</Heading3xl>
            <div className='flex gap-2 flex-wrap'>
             {selectedClient.stack.map((stackItem, index) => (
              <Paragraphmd key={index}>
               {stackItem}
               {index < selectedClient.stack.length - 1 ? ", " : "."}
              </Paragraphmd>
             ))}
            </div>
           </div>
          </div>
         </aside>
        ) : (
         <div className='grid grid-cols-2 gap-2'>
          {" "}
          {selectedClient.images.map((image, index) => (
           <div
            key={index}
            className={`${
             index % 3 === 0 ? "col-span-2" : "col-span-1"
            } row-span-1`}>
            <Image
             src={image}
             alt={`Image of ${selectedClient.name}`}
             width={1920}
             height={1080}
             className='rounded-md bg-white'
            />
           </div>
          ))}
         </div>
        )}
       </div>
      </div>
     ) : (
      <p>Select a client to see the details</p>
     )}
    </div>
   </main>
   <Divider />
   <footer className=''>bottom section</footer>
  </div>
 );
};

export default Page;
