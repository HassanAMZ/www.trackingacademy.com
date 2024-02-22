"use client";

import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
 const [isVisible, setIsVisible] = useState(true);
 const [prevScrollPos, setPrevScrollPos] = useState(0);

 const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  setPrevScrollPos(currentScrollPos);
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [prevScrollPos]);

 return (
  <header
   className={`fixed top-0 left-0 w-full transition-transform duration-300 z-10 ${
    !isVisible ? "-translate-y-full" : ""
   }`}>
   <div className='container-primary'>
    <div className='hidden lg:block'>
     <DesktopNav />
    </div>
    <MobileNav />
   </div>
  </header>
 );
};

export default Header;
