"use client";

import { useState } from "react";
import ContactForm from "../contact/ContactForm";

export default function BookACall() {
 const [isModalOpen, setModalOpen] = useState(false);

 const handleClose = (e: any) => {
  if (e.target.id === "modal-backdrop") {
   setModalOpen(false);
  }
 };

 return (
  <div>
   <button
    className='link-primary w-full flex items-center justify-center px-4 md:px-16 py-3'
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
  </div>
 );
}
