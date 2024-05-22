"use client";

import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import ForBusinessesNavbar from "@/components/for-businesses/Navbar";
import ForFreelancersNavbar from "@/components/for-freelancers/Navbar";

const GlobalNavbar: React.FC = () => {
 const segments: string[] = useSelectedLayoutSegments();

 if (segments[0] === "blog" || segments[0] === "newsletter") {
  return null;
 }

 const navbarMap: Record<string, JSX.Element | undefined> = {
  "for-businesses": <ForBusinessesNavbar />,
  "for-freelancers": <ForFreelancersNavbar />,
  services:
   segments[1] === "web-analytics-and-tracking" ? (
    <ForFreelancersNavbar />
   ) : (
    <SiteNavbar />
   ),
 };

 return (
  navbarMap[segments[0]] ||
  (segments[0] === undefined ? <ForFreelancersNavbar /> : <SiteNavbar />)
 );
};

export default GlobalNavbar;
