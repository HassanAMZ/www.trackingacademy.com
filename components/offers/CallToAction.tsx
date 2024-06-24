import Link from "next/link";
import React from "react";
import FAQ from "../for-businesses/FAQ";

export default function CallToAction() {
 return (
  <section className='space-y-4'>
   <h2 className='text-4xl font-semibold text-center'>
    Believe Us Now? Book A Call Below To Discuss Partnering Up To Scale Your
    Business.
   </h2>
   <div className='text-center'>
    <Link
     href='/offers/95-accurate-tracking-in-7-days/submit-query'
     className='link-primary-danger text-2xl !px-12'>
     Book A Call
    </Link>
   </div>
   <div className='py-4'>
    <FAQ />
   </div>
   <div className='text-center py-4'>
    <Link
     href='/offers/95-accurate-tracking-in-7-days/submit-query'
     className='link-primary-danger text-2xl !px-12'>
     Book A Call
    </Link>
   </div>
  </section>
 );
}
