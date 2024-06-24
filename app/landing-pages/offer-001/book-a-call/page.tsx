import ContactForm from "@/components/contact/ContactForm";
import CallToAction from "@/components/landing-pages/CallToAction";
import ClientTestimonial from "@/components/landing-pages/ClientTestimonial";
import Divider from "@/components/landing-pages/Divider";
import React from "react";

export default function page() {
 return (
  <main className='container-secondary'>
   <section className='pt-6 pb-2 space-y-2'>
    <h1 className='text-center text-3xl md:text-4xl font-semibold '>
     <span className='text-danger'>Get 95% Accurate Tracking</span> in 7 Days –
     Guaranteed! <span className='text-danger'>Book a Call Below </span>to Get
     Started...
    </h1>
   </section>
   <div className='flex items-center justify-center w-full'>
    <div className=' md:min-h-[70vh] md:min-w-[60vw] min-w-[95vw] min-h-[60vh] bg-complementary/10  p-4 rounded-md'>
     <ContactForm thankYouUrl='/landing-pages/offer-001/thank-you' />
    </div>
   </div>
   <Divider />
   <ClientTestimonial />
   <CallToAction />
  </main>
 );
}
