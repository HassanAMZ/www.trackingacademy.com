"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../contact/ContactForm";
import React from "react";

interface BookACallProps {
 buttonText?: string;
}

const BookACall: React.FC<BookACallProps> = ({
 buttonText = "Book A Call",
}) => {
 const [isModalOpen, setModalOpen] = useState(false);

 const handleClose = () => {
  setModalOpen(false);
 };

 return (
  <React.Fragment>
   <button className='link-primary' onClick={() => setModalOpen(true)}>
    {buttonText}
   </button>

   <AnimatePresence>
    {isModalOpen && (
     <motion.div
      id='modal-backdrop'
      className='bg-dominant/90 z-20 fixed inset-0 flex justify-center items-center p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}>
      <motion.div
       className='p-4 rounded-lg bg-complementary shadow-lg lg:max-w-lg w-full'
       initial={{ scale: 0.95, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ scale: 0.95, opacity: 0 }}
       transition={{ duration: 0.3 }}
       onClick={(e) => e.stopPropagation()}>
       <button
        className='mt-2 text-right w-full text-xs '
        onClick={handleClose}>
        Close (X)
       </button>
       <ContactForm />
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </React.Fragment>
 );
};

export default BookACall;
