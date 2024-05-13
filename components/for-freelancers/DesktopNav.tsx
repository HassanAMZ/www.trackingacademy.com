import React from "react";
import NavLink from "../navbar/NavLink";
import Image from "next/image";
const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-2'>
   <NavLink href='/' className='font-semibold'>
    <Image
     src='logo.svg'
     alt='TrackingAcademy'
     width={500}
     height={145}
     className='w-32'
    />
   </NavLink>
   <div className='flex items-center gap-x-3'>
    <NavLink href='/courses' className='link-primary'>
     Enroll Here
    </NavLink>
   </div>
  </nav>
 );
};
export default DesktopNav;
