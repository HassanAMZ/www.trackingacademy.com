"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import HomeNavbar from "@/components/home/Navbar";

const GlobalNavbar = () => {
 let segments = useSelectedLayoutSegments();

 console.log("segments", segments[0]);
 if (segments[0] === undefined) {
  return <HomeNavbar />;
 } else {
  return <SiteNavbar />;
 }
};

export default GlobalNavbar;
