"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/components/contact/actions";
import React, { useState } from "react";
import ThankYou from "@/components/contact/ThankYou";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";

const initialState = {
 message: null,
};

function SubmitButton() {
 const { pending } = useFormStatus();

 return (
  <button
   type='submit'
   aria-disabled={pending}
   className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4'>
   Submit Contact Form
  </button>
 );
}
export default function ContactForm() {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);

 // When the form is submitted, check if there's a message from the server.
 // If the message indicates success (or based on any other criteria you want), set formSubmitted to true.
 if (state?.message && !formSubmitted) {
  // For simplicity, we'll assume any message means the form was submitted successfully.
  // You can adjust this condition as per your requirements.
  setFormSubmitted(true);
 }

 // If the form has been submitted, render the Thank You message
 if (formSubmitted) {
  return <ThankYou />;
 }
 return (
  <ContainerLayout className='pb-2'>
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
