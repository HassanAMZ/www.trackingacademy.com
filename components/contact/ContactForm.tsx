"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/actions/contact-us";
import { useRouter } from "next/navigation";

const initialState = {
 message: null,
};

const SubmitButton = () => {
 const { pending } = useFormStatus();

 return (
  <motion.button
   type='submit'
   disabled={pending}
   className={`bg-accent hover:bg-complementary border border-dominant/10 py-4 px-4 rounded-lg mt-4 transition-all duration-300 ease-in-out text-complementary hover:text-accent ${
    pending ? "opacity-50 cursor-not-allowed" : ""
   }`}
   whileHover={{ scale: 1.01 }}
   whileTap={{ scale: 0.99 }}>
   {pending ? "Submitting..." : "Submit Contact Form"}
  </motion.button>
 );
};

const ContactForm = ({ thankYouUrl = "/contact/thank-you" }) => {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const router = useRouter();

 useEffect(() => {
  if (state?.message && !formSubmitted) {
   setFormSubmitted(true);
   router.push(thankYouUrl);
  }
 }, [state?.message, formSubmitted, router, thankYouUrl]);

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.3 }}
   className='w-full'>
   <section className='w-full'>
    <form action={formAction} className='flex flex-col space-y-3 '>
     <AnimatePresence>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5, delay: 0.1 }}>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <div className='flex flex-col'>
         <label htmlFor='userName'>
          <p className='text-left'> Name</p>
         </label>
         <input
          type='text'
          id='userName'
          name='userName'
          placeholder='John Doe'
          required
          className='p-2 border text-dominant  border-dominant/10 rounded-lg placeholder:text-xs'
         />
        </div>
        <div className='flex flex-col'>
         <label htmlFor='email'>
          <p className='text-left'> Email</p>
         </label>
         <input
          type='email'
          id='email'
          name='email'
          placeholder='example@email.com'
          required
          className='p-2 border text-dominant  border-dominant/10 rounded-lg placeholder:text-xs'
         />
        </div>
       </div>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5, delay: 0.2 }}>
       <div className='flex flex-col'>
        <label htmlFor='websiteLink'>
         <p className='text-left'> Website URL</p>
        </label>
        <input
         type='url'
         id='websiteLink'
         name='websiteLink'
         placeholder='https://www.example.com'
         required
         className='p-2 border text-dominant  border-dominant/10 rounded-lg placeholder:text-xs'
        />
       </div>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5, delay: 0.3 }}>
       <div className='flex flex-col'>
        <label htmlFor='integrationType'>
         <p className='text-left'> I want help with...</p>
        </label>
        <select
         id='integrationType'
         name='integrationType'
         required
         className='p-2 border text-dominant  border-dominant/10 rounded-lg placeholder:text-xs'>
         <option value='audit'>Audit my tracking setup</option>
         <option value='gtm'>GTM setup</option>
         <option value='ga4'>GA4 integration</option>
         <option value='fbPixel'>FB Pixel integration</option>
         <option value='ttPixel'>TT Pixel integration</option>
         <option value='s2s'>Server to Server Tracking</option>
         <option value='other'>Others</option>
        </select>
       </div>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5, delay: 0.4 }}>
       <div className='flex flex-col'>
        <label htmlFor='budget'>
         <p className='text-left'> Expected Budget (USD)</p>
        </label>
        <input
         type='number'
         id='budget'
         name='budget'
         required
         min='0'
         step='100'
         placeholder='Enter Your Budget in USD'
         className='p-2 border text-dominant  border-dominant/10 rounded-lg placeholder:text-xs'
        />
       </div>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5, delay: 0.5 }}>
       <div>
        <label htmlFor='projectDescription'>
         <p className='text-left'> Project Description</p>
        </label>
        <textarea
         id='projectDescription'
         name='projectDescription'
         required
         className='p-2 border text-dominant  border-dominant/10 rounded-lg h-32 w-full'></textarea>
       </div>
      </motion.div>
     </AnimatePresence>

     <SubmitButton />

     <p aria-live='polite' className='sr-only' role='status'>
      {state?.message}
     </p>
    </form>
   </section>
  </motion.div>
 );
};

export default ContactForm;
