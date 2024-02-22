import Link from "next/link";
import React from "react";
import BookACall from "./BookACall";

export default function Hero() {
 return (
  <React.Fragment>
   <h1 className='title-primary md:py-5 container-secondary'>
    We configure tracking that{" "}
    <span className='bg-gradient-to-r from-primary via-secondary to-primary inline-block text-transparent bg-clip-text animate-gradient-move'>
     unlocks
    </span>{" "}
    more efficient advertising spend
   </h1>
   <p className='container-secondary paragraph-primary pb-4'>
    We handle auditing, analytics, trackings tag implementations and reporting.
    You drive traffic with a higher conversion rate.
   </p>
   <div className='flex gap-x-4 py-4 w-full items-center justify-center '>
    <BookACall />
    <Link href='/#why-us' className='link-secondary px-4 md:px-16 py-3'>
     Learn More
    </Link>
   </div>
  </React.Fragment>
 );
}
