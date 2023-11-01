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
   <Heading2xl>Submit a Contact Form</Heading2xl>
   <section className='w-full grid grid-cols-1 md:grid-cols-2'>
    <form action={formAction} className='flex flex-col space-y-2 '>
     <label htmlFor='firstName' className='text-sm font-medium'>
      First Name
     </label>
     <input
      type='text'
      id='firstName'
      name='firstName'
      required
      className='p-2 border rounded'
     />

     <label htmlFor='lastName' className='text-sm font-medium'>
      Last Name
     </label>
     <input
      type='text'
      id='lastName'
      name='lastName'
      required
      className='p-2 border rounded'
     />

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

     <label htmlFor='phone' className='text-sm font-medium'>
      Phone
     </label>
     <input
      type='tel'
      id='phone'
      name='phone'
      required
      className='p-2 border rounded'
     />

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
    <Image
     className='hidden md:block'
     height={500}
     width={500}
     src={"/images/contact/contact-phone.png"}
     alt={"image"}
    />
   </section>
  </ContainerLayout>
 );
}
