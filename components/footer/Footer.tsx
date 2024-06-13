import React from "react";
import { Paragraphmd } from "@/components/typography/Heading";
import NavLink from "../navbar/NavLink";
import { FacebookIcon, YouTubeIcon } from "@/components/icons/SocialIcons";
import CustomLink from "@/components/mdx/CustomLink";
import NavigationLinks from "../navbar/NavigationLinks";

const Footer: React.FC = () => {
 return (
  <div className='container-primary py-3'>
   <div className='shadow-lg border rounded-md p-8 grid place-content-center transition duration-300 ease-in-out w-full'>
    <footer className=' py-12 px-5 flex flex-col justify-center items-center shadow-md'>
     <NavLink href='/' className=' transition-all duration-300'>
      TrackingAcademy
     </NavLink>

     <nav className='flex flex-col sm:flex-row gap-2 items-center justify-between pt-12'>
      <NavigationLinks />
     </nav>

     <div className='flex space-x-5 pt-5'>
      <CustomLink
       href='https://www.youtube.com/@trackingacademy_'
       target='_blank'
       rel='noopener noreferrer'
       className=' transition-all duration-300'>
       <YouTubeIcon />
      </CustomLink>
     </div>

     <Paragraphmd className='pt-12'>
      © {new Date().getFullYear()} TrackingAcademy, All rights reserved
     </Paragraphmd>
    </footer>
   </div>
  </div>
 );
};

export default Footer;
