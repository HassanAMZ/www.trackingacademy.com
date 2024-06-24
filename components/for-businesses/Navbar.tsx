import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import NavLink from "../navbar/NavLink";
import BookACall from "./BookACall";
export default function Navbar() {
 return (
  <div className='m-3 sticky container-primary top-2 z-10 '>
   <nav className='bg-complementary border rounded-lg p-1 lg:p-2 justify-between items-center flex transition duration-300 ease-in-out w-full'>
    <NavLink href={"/for-businesses"} className='px-2'>
     <Image
      src='/logo.svg'
      alt='TrackingAcademy'
      width={500}
      height={145}
      className='w-32'
     />
    </NavLink>
    <div className='flex gap-x-4 w-full items-center justify-end'>
     <BookACall />
    </div>
   </nav>
  </div>
 );
}
