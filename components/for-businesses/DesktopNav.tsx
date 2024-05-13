import React from "react";
import NavLink from "../navbar/NavLink";
import BookACall from "./BookACall";
import Image from "next/image";
const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-2'>
   <NavLink href='/for-businesses' className='font-semibold'>
    <Image
     src='logo.svg'
     alt='TrackingAcademy'
     width={500}
     height={145}
     className='w-32'
    />
   </NavLink>
   <div className='flex items-center gap-x-3'>
    <BookACall />
   </div>
  </nav>
 );
};
export default DesktopNav;
