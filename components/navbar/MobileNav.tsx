"use client";

import React, { useState } from "react";
import headerNavLinks from "@/data/header-nav-links";
import NavLink from "@/components/navbar/NavLink";

const MobileNav = () => {
 const [navOpen, setNavOpen] = useState(false);

 const toggleNav = () => {
  setNavOpen(!navOpen);
 };
 const NavButton = () => {
  return (
   <div onClick={toggleNav} className='focus:outline-none '>
    {navOpen ? (
     <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'>
      <path
       strokeLinecap='round'
       strokeLinejoin='round'
       d='M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12'
      />
     </svg>
    ) : (
     <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'>
      <path
       strokeLinecap='round'
       strokeLinejoin='round'
       d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25'
      />
     </svg>
    )}
   </div>
  );
 };

 return (
  <div className='sm:hidden '>
   <NavButton />
   {navOpen && (
    <section
     className={`z-20 fixed top-0 right-0 left-0 bottom-0 transform duration-300 ease-in-out w-full h-full `}>
     <div
      className={`bg-gray-100 dark:bg-gray-800 h-screen fixed top-0 right-0 left-0 bottom-0 shadow-lg p-2 pt-5 flex flex-row items-start justify-between gap-4`}
      onClick={toggleNav}>
      <nav className='flex flex-col w-full'>
       <NavLink className='pb-5 ' href='/'>
        Shahzada Ali Hassan
       </NavLink>
       {headerNavLinks.map(({ href, title }) => (
        <NavLink className='pb-5' key={`nav-link-${title}`} href={href}>
         {title}
        </NavLink>
       ))}
      </nav>
      <NavButton />
     </div>
    </section>
   )}
  </div>
 );
};

export default MobileNav;
