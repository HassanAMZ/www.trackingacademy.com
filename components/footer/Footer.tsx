import React from "react";
import { Paragraphmd } from "@/components/typography/Heading";
import NavLink from "../navbar/NavLink";
import { FacebookIcon, YouTubeIcon } from "@/components/icons/SocialIcons";
import CustomLink from "@/components/mdx/CustomLink";
import NavigationLinks from "../navbar/NavigationLinks";

const Footer: React.FC = () => {
 return (
  <div className='pb-1 pt-2 text-complementary'>
   <footer className='bg-accent py-12 px-5 flex flex-col justify-center items-center shadow-md'>
    <NavLink
     href='/'
     className='hover:text-complementary transition-all duration-300'>
     TrackingAcademy
    </NavLink>
    <p className='paragraph-primary text-center sm:text-left py-2 animate__animated animate__fadeIn'>
     The ultimate educational journey for freelancers.
    </p>

    <nav className='flex flex-col sm:flex-row gap-2 items-center justify-between pt-12'>
     <NavigationLinks />
    </nav>

    <div className='flex space-x-5 pt-5'>
     <CustomLink
      href='https://www.youtube.com/@trackingacademy_'
      target='_blank'
      rel='noopener noreferrer'
      className='hover:text-complementary transition-all duration-300'>
      <YouTubeIcon />
     </CustomLink>

     <CustomLink
      href='https://www.facebook.com/shahzadaalihassan/'
      target='_blank'
      rel='noopener noreferrer'
      className='hover:text-complementary transition-all duration-300'>
      <FacebookIcon />
     </CustomLink>
    </div>

    <Paragraphmd className='textOpacity80 pt-12'>
     © {new Date().getFullYear()} TrackingAcademy, All rights reserved
    </Paragraphmd>
   </footer>
  </div>
 );
};

export default Footer;
