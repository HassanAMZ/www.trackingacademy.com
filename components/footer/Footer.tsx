// LearnMoreHeader.tsx

import React from "react";
import {
 Heading2xl,
 Heading4xl,
 Headingxl,
 Paragraphmd,
} from "@/components/typography/Heading";
import { LearnMoreHeaderProps, WhyUsProps } from "@/types/index"; // make sure to use the actual path
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import headerNavLinks from "@/data/header-nav-links";
import NavLink from "../navbar/NavLink";

const Footer: React.FC = () => {
 return (
  <ContainerLayout className='pt-2 pb-10'>
   <footer className='backgroundOverlay md:px-20 md:py-16 py-12 px-5 flex  md:gap-5 gap-2  justify-between'>
    <div className='flex justify-between flex-col'>
     <div>
      <NavLink href='/'>ShahzadaAliHassan</NavLink>
      <Paragraphmd className='opacity-70 py-2'>
       The ultimate educational journey for freelancers.
      </Paragraphmd>
     </div>
     <Paragraphmd className='opacity-70'>
      © {new Date().getFullYear()} freelance.pizza, All rights reserved
     </Paragraphmd>
    </div>
    <nav className='flex flex-col space-y-3 min-w-fit opacity-70'>
     {headerNavLinks.map(({ href, title }) => (
      <NavLink key={`nav-link-${title}`} href={href}>
       {title}
      </NavLink>
     ))}
    </nav>
   </footer>
  </ContainerLayout>
 );
};

export default Footer;
