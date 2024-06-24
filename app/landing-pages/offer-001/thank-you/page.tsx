import ContactForm from "@/components/contact/ContactForm";
import CallToAction from "@/components/landing-pages/CallToAction";
import ClientTestimonial from "@/components/landing-pages/ClientTestimonial";
import Divider from "@/components/landing-pages/Divider";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import React from "react";

export default function page() {
 return (
  <main className='container-secondary'>
   <section className='pt-6 pb-2 space-y-2'>
    <h1 className='text-center text-3xl md:text-4xl font-semibold '>
     Congrats On Booking Your Call! Here's What Happens Next....
    </h1>
   </section>
   <div className='flex flex-col gap-y-4 text-xl leading-normal pb-4'>
    <div>
     <span className='text-danger'>✅ Step 1:</span>
     <span>
      You will receive an email with a meeting invite for your scheduled time.
      Make sure to accept the invite so it shows up in your calendar.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅ Step 2:</span>
     <span>
      You will also receive a Zoom link in the meeting invite, which is where
      the meeting will be held.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅ Step 3:</span>
     <span>
      Please be at your computer for the meeting, as we may share our screen
      with you to review your business.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅ Step 4:</span>
     <span>
      Watch the video below to prepare for our call and learn what we will cover
      during our session.
     </span>
    </div>
   </div>
   <YoutubeEmbed embedId={"9MGpL_AmEYM"} />
  </main>
 );
}
