import React from "react";
import NavLink from "../navbar/NavLink";
import BookACall from "./BookACall";

const DesktopNav = () => {
 return (
  <nav className='flex items-center justify-between py-2'>
   <NavLink href='/for-businesses' className='font-semibold'>
    Tracking Academy
   </NavLink>
   <div className='flex items-center gap-x-3'>
    <BookACall />
   </div>
  </nav>
 );
};
export default DesktopNav;
