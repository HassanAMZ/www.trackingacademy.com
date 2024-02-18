import Link from "next/link";
import React from "react";

const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-5'>
   <Link href='/' className='font-semibold'>
    Tracking Academy
   </Link>
   <div className='flex items-center gap-x-7'>
    <Link href='/#why-us' className='rounded hover:text-primary'>
     Why TA
    </Link>
    <Link href='/#about' className='rounded hover:text-primary'>
     About
    </Link>
    <Link href='/#case-studies' className='rounded hover:text-primary'>
     Case Studies
    </Link>
    <Link href='/contact' className='link-secondary px-6 py-3'>
     Book a Call
    </Link>
    <Link
     href='/services/web-analytics-and-tracking'
     className='link-primary px-6 py-3'>
     Get started
    </Link>
   </div>
  </nav>
 );
};
export default DesktopNav;
