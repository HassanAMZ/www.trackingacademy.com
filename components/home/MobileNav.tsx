"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BookACall from "./BookACall";

interface NavItemProps {
 href: string;
 children: React.ReactNode;
 onClick: () => void;
}

interface NavButtonProps {
 onClick: () => void;
 label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => (
 <Link
  href={href}
  className='rounded hover:text-primary px-2 py-5 w-full border-b-2 border-dark-secondary'
  onClick={onClick}>
  {children}
 </Link>
);

const NavButton: React.FC<NavButtonProps> = ({ onClick, label }) => (
 <nav className='flex items-center justify-between w-full'>
  <Link href='/' className='font-semibold title-tertiary'>
   Tracking Academy
  </Link>
  <button
   onClick={onClick}
   className='p-2 lg:hidden title-tertiary'
   aria-label={label}>
   🍔
  </button>
 </nav>
);

const MobileNavbar: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => setIsOpen(!isOpen);

 useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "";

  return () => {
   document.body.style.overflow = "";
  };
 }, [isOpen]);

 return (
  <div className='lg:hidden block'>
   <div className='py-3 px-2 flex flex-row '>
    <NavButton onClick={toggleMenu} label='Toggle Navigation Menu' />
   </div>
   <div
    className={`absolute inset-0 z-10 title-tertiary ${
     isOpen ? "flex" : "hidden"
    } bg-dark-primary`}
    style={{ height: isOpen ? "100vh" : "0" }}>
    <div className='flex flex-col items-start justify-between py-3 px-5 gap-2 w-full'>
     <NavButton onClick={toggleMenu} label='Close Navigation Menu' />
     <div className='flex w-full flex-col'>
      <NavItem href='/#why-us' onClick={toggleMenu}>
       Why TA
      </NavItem>
      <NavItem href='/#about' onClick={toggleMenu}>
       About
      </NavItem>
      <NavItem href='/#case-studies' onClick={toggleMenu}>
       Case Studies
      </NavItem>
     </div>
     <div>
      <blockquote className='title-tertiary text-center'>
       Working with HOOX allowed us to quickly test new angles, copy, and
       positioning without changing our homepage. We saw a significant increase
       in CVR.
      </blockquote>
      <p className='paragraph-primary text-center py-4'>
       COURTNEY TOLL CEO of Nori
      </p>
     </div>
     <div className='flex w-full flex-col gap-2'>
      <BookACall />
      <Link
       href='/services/web-analytics-and-tracking'
       className='text-center link-primary '
       onClick={toggleMenu}>
       Get started
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default MobileNavbar;
