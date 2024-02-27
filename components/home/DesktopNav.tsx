"use client";

import { useState } from "react";
import ContactForm from "../contact/ContactForm";
import Link from "next/link";
import React from "react";
import NavLink from "../navbar/NavLink";

const DesktopNav = () => {
 const [isModalOpen, setModalOpen] = useState(false);

 const handleClose = (e: any) => {
  if (e.target.id === "modal-backdrop") {
   setModalOpen(false);
  }
 };
 return (
  <nav className='flex items-center justify-between py-5'>
   <NavLink href='/' className='font-semibold'>
    Tracking Academy
   </NavLink>
   <div className='flex items-center gap-x-3'>
    <NavLink href='/#why-us' className='rounded hover:text-accent'>
     Why TA
    </NavLink>
    <NavLink href='/#about' className='rounded hover:text-accent'>
     About
    </NavLink>
    <NavLink href='/#case-studies' className='rounded hover:text-accent'>
     Case Studies
    </NavLink>

    <React.Fragment>
     <button
      className='link-secondary px-2 py-1 '
      onClick={() => setModalOpen(true)}>
      Book a Call
     </button>

     <div
      id='modal-backdrop'
      className={`bg-complementary z-20 fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${
       isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}>
      <div
       className='p-4 rounded transition-all duration-300 ease-in transform-gpu'
       style={{
        opacity: isModalOpen ? 1 : 0,
        transform: isModalOpen ? "scale(1)" : "scale(0.95)",
       }}
       onClick={(e) => e.stopPropagation()}>
       <ContactForm />
       <button className='mt-2' onClick={() => setModalOpen(false)}>
        Close
       </button>
      </div>
     </div>
    </React.Fragment>
    <NavLink
     href='/services/web-analytics-and-tracking'
     className='link-primary px-2 py-1'>
     Get started
    </NavLink>
   </div>
  </nav>
 );
};
export default DesktopNav;
