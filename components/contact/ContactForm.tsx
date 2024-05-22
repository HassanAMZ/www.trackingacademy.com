"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/actions/contact-us";
import ThankYou from "@/components/contact/ThankYou";
import { GTMContactFormSubmission } from "../analytics/GTMEvents";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState = {
 message: null,
};

function SubmitButton() {
 const { pending } = useFormStatus();

 return (
  <button
   type='submit'
   disabled={pending}
   className={`bg-accent hover:bg-complementary border-2 border-dominant title-tertiary py-4 px-4 rounded-lg mt-4 transition-all duration-300 ease-in-out text-complementary hover:text-accent ${
    pending ? "opacity-50 cursor-not-allowed" : ""
   }`}>
   {pending ? "Submitting..." : "Submit Contact Form"}
  </button>
 );
}

export default function ContactForm() {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const router = useRouter();

 useEffect(() => {
  if (state?.message && !formSubmitted) {
   setFormSubmitted(true);
   router.push("/contact/thank-you");
  }
 }, [state?.message, formSubmitted, router]);

 return (
  <React.Fragment>
   <h2 className='title-secondary text-center py-4'>Submit a Contact Form</h2>
   <section className='w-full rounded-lg'>
    <form action={formAction} className='flex flex-col space-y-3'>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col'>
       <label htmlFor='userName'>
        <p className='text-left'> Name</p>
       </label>
       <input
        type='text'
        id='userName'
        name='userName'
        required
        className='p-2 border-2 border-dominant rounded-lg'
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
        required
        className='p-2 border-2 border-dominant rounded-lg'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <label htmlFor='websiteLink'>
       <p className='text-left'> Website URL</p>
      </label>
      <input
       type='url'
       id='websiteLink'
       name='websiteLink'
       required
       className='p-2 border-2 border-dominant rounded-lg'
      />
     </div>

     <div className='flex flex-col'>
      <label htmlFor='integrationType'>
       <p className='text-left'> Project Type</p>
      </label>
      <select
       id='integrationType'
       name='integrationType'
       required
       className='p-2 border-2 border-dominant rounded-lg'>
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
       <p className='text-left'> Budget (USD)</p>
      </label>
      <input
       type='number'
       id='budget'
       name='budget'
       required
       min='0'
       step='100'
       placeholder='Enter Your Budget in USD'
       className='p-2 border-2 border-dominant rounded-lg'
      />
     </div>

     <label htmlFor='projectDescription'>
      <p className='text-left'> Project Description</p>
     </label>
     <textarea
      id='projectDescription'
      name='projectDescription'
      required
      className='p-2 border-2 border-dominant rounded-lg h-32'></textarea>

     <SubmitButton />

     <p aria-live='polite' className='sr-only' role='status'>
      {state?.message}
     </p>
    </form>
   </section>
  </React.Fragment>
 );
}
