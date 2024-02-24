"use client";

import { useState } from "react";
import ContactForm from "../contact/ContactForm";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
 const [isModalOpen, setModalOpen] = useState(false);

 const handleClose = (e: any) => {
  if (e.target.id === "modal-backdrop") {
   setModalOpen(false);
  }
 };
 return (
  <nav className='flex items-center justify-between py-5'>
   <Link href='/' className='font-semibold'>
    Tracking Academy
   </Link>
   <div className='flex items-center gap-x-6'>
    <Link href='/#why-us' className='rounded hover:text-primary'>
     Why TA
    </Link>
    <Link href='/#about' className='rounded hover:text-primary'>
     About
    </Link>
    <Link href='/#case-studies' className='rounded hover:text-primary'>
     Case Studies
    </Link>

    <React.Fragment>
     <button
      className='link-primary !px-2 !py-1 !border-primary'
      onClick={() => setModalOpen(true)}>
      Book a Call
     </button>

     <div
      id='modal-backdrop'
      className={`bg-dark-primary z-20 fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${
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
    <Link
     href='/services/web-analytics-and-tracking'
     className='link-secondary !px-2 !py-1'>
     Get started
    </Link>
   </div>
  </nav>
 );
};
export default DesktopNav;
