"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/actions/contact-us";
import ThankYou from "@/components/contact/ThankYou";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import { GTMContactFormSubmission } from "../analytics/GTMEvents";
import { Heading2xl, Paragraphmd } from "@/components/typography/Heading";

const initialState = {
 message: null,
};

function SubmitButton() {
 const { pending } = useFormStatus();

 return (
  <button
   type='submit'
   disabled={pending}
   className={`bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-lg mt-4 transition-all duration-300 ease-in-out ${
    pending ? "opacity-50 cursor-not-allowed" : ""
   }`}>
   {pending ? "Submitting..." : "Submit Contact Form"}
  </button>
 );
}

export default function ContactForm() {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);

 if (state?.message && !formSubmitted) {
  setFormSubmitted(true);
 }

 if (formSubmitted) {
  return (
   <>
    <ThankYou />
    <GTMContactFormSubmission />
   </>
  );
 }

 return (
  <React.Fragment>
   <Heading2xl className='text-center'>Submit a Contact Form</Heading2xl>
   <section className='w-full shadow-lg rounded-lg'>
    <form action={formAction} className='flex flex-col space-y-4'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col'>
       <label htmlFor='userName'>
        <Paragraphmd> Name</Paragraphmd>
       </label>
       <input
        type='text'
        id='userName'
        name='userName'
        required
        className='p-3 border-2 border-gray-300 rounded-lg'
       />
      </div>
      <div className='flex flex-col'>
       <label htmlFor='email'>
        <Paragraphmd> Email</Paragraphmd>
       </label>
       <input
        type='email'
        id='email'
        name='email'
        required
        className='p-3 border-2 border-gray-300 rounded-lg'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <label htmlFor='websiteLink'>
       <Paragraphmd> Website URL</Paragraphmd>
      </label>
      <input
       type='url'
       id='websiteLink'
       name='websiteLink'
       required
       className='p-3 border-2 border-gray-300 rounded-lg'
      />
     </div>

     <div className='flex flex-col'>
      <label htmlFor='integrationType'>
       <Paragraphmd> Project Type</Paragraphmd>
      </label>
      <select
       id='integrationType'
       name='integrationType'
       required
       className='p-3 border-2 border-gray-300 rounded-lg'>
       <option value=''>Project Type...</option>
       <option value='gtm'>GTM setup</option>
       <option value='ga4'>GA4 integration</option>
       <option value='fbPixel'>FB Pixel integration</option>
       <option value='ttPixel'>TT Pixel integration</option>
       <option value='s2s'>Server to Server Tracking</option>
       <option value='other'>Others</option>
      </select>
     </div>

     <div className='flex flex-col'>
      <label htmlFor='budget'>
       <Paragraphmd> Budget</Paragraphmd>
      </label>
      <select
       id='budget'
       name='budget'
       required
       className='p-3 border-2 border-gray-300 rounded-lg'>
       <option value=''>Choose Your Budget...</option>
       <option value='100'>100$ - 500$</option>
       <option value='500'>500$ - 1000$</option>
       <option value='1000'>1000$ - 2000$</option>
       <option value='2000'>2000$-5000$</option>
       <option value='5000'>5000$+</option>
      </select>
     </div>

     <label htmlFor='projectDescription'>
      <Paragraphmd> Project Description</Paragraphmd>
     </label>
     <textarea
      id='projectDescription'
      name='projectDescription'
      required
      className='p-3 border-2 border-gray-300 rounded-lg h-32'></textarea>

     <SubmitButton />

     <p aria-live='polite' className='sr-only' role='status'>
      {state?.message}
     </p>
    </form>
   </section>
  </React.Fragment>
 );
}
