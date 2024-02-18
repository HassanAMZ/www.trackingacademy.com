import Link from "next/link";
import React from "react";

export default function Hero() {
 return (
  <React.Fragment>
   <h1 className='title-primary pt-5 container-secondary'>
    We configure tracking that{" "}
    <span className='bg-gradient-to-r from-primary via-secondary to-primary inline-block text-transparent bg-clip-text animate-gradient-move'>
     unlocks
    </span>{" "}
    more efficient advertising spend
   </h1>
   <p className='container-secondary paragraph-primary'>
    We handle auditing, analytics, trackings tag implementations and reporting.
    You drive traffic with a higher conversion rate.
   </p>
   <div className='flex gap-x-4 py-4 w-full items-center justify-center '>
    <Link
     href='/contact'
     className='link-primary flex w-full md:w-auto md:px-10 items-center justify-center py-4'>
     Book a Call
    </Link>
    <Link
     href='/#why-us'
     className='link-secondary flex w-full md:w-auto md:px-10 items-center justify-center py-4'>
     Learn More
    </Link>
   </div>
  </React.Fragment>
 );
}
