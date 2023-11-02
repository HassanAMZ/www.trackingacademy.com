"use client";
import React, { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/actions/contact-us";
import ThankYou from "@/components/contact/ThankYou";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import { GTMContactFormSubmission } from "../analytics/GTMEvents";
import { Heading2xl } from "../typography/Heading";

const initialState = {
 message: null,
};

function SubmitButton() {
 const { pending } = useFormStatus();

 return (
  <button
   type='submit'
   disabled={pending}
   className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 ${
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
  <ContainerLayout className='pb-2'>
   {/* <Heading2xl>Submit a Contact Form</Heading2xl> */}
   <section className='w-full flex flex-col items-center justify-center'>
    <Image
     height={500}
     width={500}
     src={"/images/contact/contact-phone.png"}
     alt={"image"}
    />
    <form action={formAction} className='flex flex-col space-y-2 w-full'>
     <div className='flex md:flex-row flex-col w-full gap-2'>
      <div className='flex flex-col w-full'>
       <label htmlFor='userName' className='text-sm font-medium'>
        First Name
       </label>
       <input
        type='text'
        id='userName'
        name='userName'
        required
        className='p-2 border rounded'
       />
      </div>
      <div className='flex flex-col w-full'>
       <label htmlFor='email' className='text-sm font-medium'>
        Email
       </label>
       <input
        type='email'
        id='email'
        name='email'
        required
        className='p-2 border rounded'
       />
      </div>
     </div>

     <div className='flex flex-col w-full'>
      <label htmlFor='websiteLink' className='text-sm font-medium'>
       Website Link
      </label>
      <input
       type='url'
       id='websiteLink'
       name='websiteLink'
       required
       className='p-2 border rounded'
      />
     </div>

     <div className='flex flex-col w-full'>
      <label htmlFor='integrationType' className='text-sm font-medium'>
       Choose Integration
      </label>
      <select
       id='integrationType'
       name='integrationType'
       required
       className='p-2 border rounded'>
       <option value=''>Select...</option>
       <option value='gtm'>GTM setup</option>
       <option value='ga4'>GA4 integration</option>
       <option value='fbPixel'>FB Pixel integration</option>
       <option value='ttPixel'>TT Pixel integration</option>
       <option value='s2s'>Server to Server Tracking</option>
      </select>
     </div>

     <label htmlFor='projectDescription' className='text-sm font-medium'>
      Project Description
     </label>
     <textarea
      id='projectDescription'
      name='projectDescription'
      required
      className='p-2 border rounded h-24'></textarea>

     <SubmitButton />

     <p aria-live='polite' className='sr-only' role='status'>
      {state?.message}
     </p>
    </form>
   </section>
  </ContainerLayout>
 );
}
