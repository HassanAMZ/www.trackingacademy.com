"use client";

import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import HomeNavbar from "@/components/home/Navbar";

const GlobalNavbar = () => {
 let segments = useSelectedLayoutSegments();

 if (segments[0] === undefined) {
  return <HomeNavbar />;
 } else if (segments[0] === "blog") {
  return null;
 } else {
  return <SiteNavbar />;
 }
};

export default GlobalNavbar;
