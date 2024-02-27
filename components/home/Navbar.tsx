import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
 return (
  <header className='w-full'>
   <div className='container-primary'>
    <div className='hidden lg:block'>
     <DesktopNav />
    </div>
    <MobileNav />
   </div>
  </header>
 );
}
