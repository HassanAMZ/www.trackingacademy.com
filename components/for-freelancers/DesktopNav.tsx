import React from "react";
import NavLink from "../navbar/NavLink";

const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-2'>
   <NavLink href='/' className='font-semibold'>
    Tracking Academy
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
