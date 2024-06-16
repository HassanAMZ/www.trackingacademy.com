"use client";

import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import ForBusinessesNavbar from "@/components/for-businesses/Navbar";
import ForFreelancersNavbar from "@/components/for-freelancers/Navbar";

const GlobalNavbar: React.FC = () => {
 const segments: string[] = useSelectedLayoutSegments();

 // Define the mapping of segments to navbars
 const navbarMap: Record<string, JSX.Element | null | undefined> = {
  blog: null,
  newsletter: null,
  "for-businesses": null,
  "for-freelancers": null,
  "for-agencies": null,

  services:
   segments[1] === "web-analytics-and-tracking" ? (
    <ForFreelancersNavbar />
   ) : (
    <SiteNavbar />
   ),
 };

 // Determine the appropriate navbar to display
 const navbarToDisplay = navbarMap[segments[0]];

 // Render the navbar if it exists, otherwise render SiteNavbar or null
 return navbarToDisplay !== undefined ? (
  navbarToDisplay
 ) : segments[0] === undefined ? null : (
  <SiteNavbar />
 );
};

export default GlobalNavbar;
