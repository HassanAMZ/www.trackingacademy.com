import Link from "next/link";
import React from "react";
import BookACall from "./BookACall";

const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-5'>
   <Link href='/' className='font-semibold'>
    Tracking Academy
   </Link>
   <div className='flex items-center gap-x-6'>
    <Link href='/#why-us' className='rounded hover:text-primary'>
     Why TA
    </Link>
    <Link href='/#about' className='rounded hover:text-primary'>
     About
    </Link>
    <Link href='/#case-studies' className='rounded hover:text-primary'>
     Case Studies
    </Link>
    <Link
     href='/services/web-analytics-and-tracking'
     className='link-secondary '>
     Get started
    </Link>
    <BookACall />
   </div>
  </nav>
 );
};
export default DesktopNav;
