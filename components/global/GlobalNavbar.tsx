"use client";

import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import HomeNavbar from "@/components/home/Navbar";

const GlobalNavbar = () => {
 let segments = useSelectedLayoutSegments();
 if (
  segments[0] === undefined ||
  (segments.length === 2 &&
   segments[0] === "services" &&
   segments[1] === "web-analytics-and-tracking")
 ) {
  return <HomeNavbar />;
 } else if (segments[0] === "blog") {
  return null;
 } else {
  return <SiteNavbar />;
 }
};

export default GlobalNavbar;
