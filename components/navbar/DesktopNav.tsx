import headerNavLinks from "@/data/header-nav-links";
import MobileNav from "@/components/navbar/MobileNav";
import NavLink from "@/components/navbar/NavLink";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";
import NavigationLinks from "./NavigationLinks";

export default function DesktopNav() {
 return (
  <React.Fragment>
   <div className='flex flex-row items-center justify-center gap-1'>
    <NavLink href='/'>TrackingAcademy</NavLink>
   </div>
   <nav className='sm:flex space-x-4 hidden'>
    <NavigationLinks />
   </nav>
  </React.Fragment>
 );
}
