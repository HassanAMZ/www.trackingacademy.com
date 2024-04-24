"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/actions/contact-us";
import ThankYou from "@/components/contact/ThankYou";
import { GTMContactFormSubmission } from "../analytics/GTMEvents";

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
   {pending ? "Joining..." : "Join Waitlist"}
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
   <h2 className='title-secondary text-left py-4'>Join Our Waitlist</h2>
   <p className='pb-6'>
    Join our waiting list to get notified as soon as the courses are available.
   </p>
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
        placeholder='John Doe'
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
        placeholder='JohnDoe@mail.com'
        id='email'
        name='email'
        required
        className='p-2 border-2 border-dominant rounded-lg'
       />
      </div>
     </div>

     <SubmitButton />

     <p aria-live='polite' className='sr-only' role='status'>
      {state?.message}
     </p>
    </form>
   </section>
  </React.Fragment>
 );
}
