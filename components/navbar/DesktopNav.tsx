import NavLink from "@/components/navbar/NavLink";
import React from "react";
import NavigationLinks from "../navbar/NavigationLinks";
export default function DesktopNav() {
 return (
  <React.Fragment>
   <div className='flex flex-row items-center justify-center gap-1'>
    <NavLink href='/'>TrackingAcademy</NavLink>
   </div>
   <nav className='md:flex space-x-4 hidden'>
    <NavigationLinks />
   </nav>
  </React.Fragment>
 );
}
