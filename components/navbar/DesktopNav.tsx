import NavLink from "@/components/navbar/NavLink";
import React from "react";
import Image from "next/image";
import NavigationLinks from "../navbar/NavigationLinks";
export default function DesktopNav() {
 return (
  <React.Fragment>
   <div className='flex flex-row items-center justify-center gap-1'>
    <NavLink href='/'>
     <Image
      src='/logo.svg'
      alt='TrackingAcademy'
      width={500}
      height={145}
      className='w-32'
     />
    </NavLink>
   </div>
   <nav className='lg:flex space-x-4 hidden'>
    <NavigationLinks />
   </nav>
  </React.Fragment>
 );
}
