import ContactForm from "@/components/contact/ContactForm";
import CallToAction from "@/components/landing-pages/CallToAction";
import ClientTestimonial from "@/components/landing-pages/ClientTestimonial";
import Divider from "@/components/landing-pages/Divider";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import React from "react";

export default function page() {
 return (
  <div className='container-secondary '>
   <div className='pt-8'>
    <h1 className='text-center text-4xl md:text-5xl font-semibold py-6'>
     Congrats On Booking Your Call! Here's What Happens Next....
    </h1>
   </div>
   <div className='flex flex-col gap-x-4 text-2xl leading-normal pb-4'>
    <div>
     <span className='text-danger'>✅Step 1: </span>
     <span>
      You will receive an email with a meeting invite for your scheduled time.
      Make sure to accept the invite so it shows up in your calendar.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅Step 2: </span>
     <span>
      You will also receive a zoom link in the meeting invite as well, as that
      is where the meeting will be held.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅Step 3: </span>
     <span>
      Please be at your computer for the meeting as we may be sharing our screen
      with you on the call and reviewing your business.
     </span>
    </div>
    <div>
     <span className='text-danger'>✅Step 4: </span>
     <span>
      Please watch this video below which covers how to prepare for our call and
      what we will cover on our call together.
     </span>
    </div>
   </div>
   <YoutubeEmbed embedId={"9MGpL_AmEYM"} />
  </div>
 );
}
