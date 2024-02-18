import Link from "next/link";
import React from "react";

export default function CallToAction() {
 return (
  <React.Fragment>
   {" "}
   <div className='container-primary bg-primary rounded-lg py-10 flex items-center flex-col'>
    <h2 className='title-tertiary text-dark-primary text-center py-5 container-secondary'>
     Ready to get your analytics & tracking fixed that increases AOV, ROAS, and
     makes you happy?
    </h2>

    <div className='flex gap-x-2 md:gap-x-4 py-4'>
     <Link href='/contact' className='link-primary  px-4 md:px-16 py-3'>
      Book a Call
     </Link>
     <Link
      href='/services/web-analytics-and-tracking'
      className='link-secondary px-4 md:px-16 py-3'>
      Setup my Analytics
     </Link>
    </div>
   </div>
  </React.Fragment>
 );
}
