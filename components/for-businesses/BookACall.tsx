"use client";

import { useState } from "react";
import ContactForm from "../contact/ContactForm";
import React from "react";

interface BookACallProps {
 buttonText?: string;
}

const BookACall: React.FC<BookACallProps> = ({
 buttonText = "Book A Call",
}) => {
 const [isModalOpen, setModalOpen] = useState(false);

 const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if ((e.target as HTMLDivElement).id === "modal-backdrop") {
   setModalOpen(false);
  }
 };

 return (
  <React.Fragment>
   <button className='link-primary' onClick={() => setModalOpen(true)}>
    {buttonText}
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
 );
};

export default BookACall;
