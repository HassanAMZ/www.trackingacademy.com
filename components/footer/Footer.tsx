import React from "react";
import { Paragraphmd } from "@/components/typography/Heading";
import headerNavLinks from "@/data/header-nav-links";
import NavLink from "../navbar/NavLink";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import {
 FacebookIcon,
 MonitorIcon,
 YouTubeIcon,
 InstagramIcon,
} from "@/components/icons/SocialIcons";
import CustomLink from "../mdx/CustomLink";

const Footer: React.FC = () => {
 return (
  <div className='pb-1 pt-2'>
   <footer className='backgroundOverlay py-12 px-5 flex flex-col justify-center items-center shadow-lg'>
    <NavLink
     href='/'
     className='hover:text-primary transition-all duration-300'>
     ShahzadaAliHassan
    </NavLink>
    <Paragraphmd className='textOpacity80 py-2 animate__animated animate__fadeIn'>
     {" "}
     {/* added animation */}
     The ultimate educational journey for freelancers.
    </Paragraphmd>

    <nav className='flex flex-row gap-2 items-center justify-between pt-12'>
     {headerNavLinks.map(({ href, title }) => (
      <NavLink
       key={`nav-link-${title}`}
       href={href}
       className='hover:underline hover:text-primary transition-all duration-300'>
       {title}
      </NavLink>
     ))}
     <ThemeSwitcher />
    </nav>

    {/* Adding social media icons */}
    <div className='flex space-x-5 pt-5'>
     <CustomLink
      href='https://www.youtube.com/@shahzadaalihassan_'
      target='_blank'
      rel='noopener noreferrer'
      className='hover:text-primary transition-all duration-300'>
      <YouTubeIcon />
     </CustomLink>

     <CustomLink
      href='https://www.facebook.com/shahzadaalihassan/'
      target='_blank'
      rel='noopener noreferrer'
      className='hover:text-primary transition-all duration-300'>
      <FacebookIcon />
     </CustomLink>

     <CustomLink
      href='https://www.instagram.com/shahzadaalihassan_/'
      target='_blank'
      rel='noopener noreferrer'
      className='hover:text-primary transition-all duration-300'>
      <InstagramIcon />
     </CustomLink>
    </div>

    <Paragraphmd className='textOpacity80 pt-12'>
     © {new Date().getFullYear()} ShahzadaAliHassan, All rights reserved
    </Paragraphmd>
   </footer>
  </div>
 );
};

export default Footer;
