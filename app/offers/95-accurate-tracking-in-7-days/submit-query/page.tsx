import ContactForm from "@/components/contact/ContactForm";
import CallToAction from "@/components/offers/CallToAction";
import ClientTestimonial from "@/components/offers/ClientTestimonial";
import Divider from "@/components/offers/Divider";
import React from "react";

export default function page() {
 return (
  <main className='container-secondary'>
   <section className='pt-6 pb-2 space-y-2'>
    <h1 className='text-center text-3xl md:text-4xl font-semibold '>
     <span className='text-danger'>Get 95% Accurate Tracking</span> in 7 Days –
     Guaranteed! <span className='text-danger'>Submit your query </span>to Get
     Started...
    </h1>
   </section>
   <div className='flex items-center justify-center w-full'>
    <div className=' md:min-h-[70vh] md:min-w-[60vw] min-w-[95vw] min-h-[60vh] bg-complementary/10  p-4 rounded-md'>
     <ContactForm thankYouUrl='/offers/95-accurate-tracking-in-7-days/submit-query/book-a-call' />
    </div>
   </div>
   <Divider />
   <ClientTestimonial />
   <CallToAction />
  </main>
 );
}
