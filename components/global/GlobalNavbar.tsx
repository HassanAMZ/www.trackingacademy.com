"use client";

import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import SiteNavbar from "@/components/navbar/Navbar";
import ForBusinessesNavbar from "@/components/for-businesses/Navbar";
import ForFreelancersNavbar from "@/components/for-freelancers/Navbar";

const GlobalNavbar: React.FC = () => {
 const segments: string[] = useSelectedLayoutSegments();

 // Array mapping segment substrings to navbar components
 const navbarMap = [
  { substring: "blog", component: null },
  { substring: "newsletter", component: null },
  { substring: "for-businesses", component: <ForBusinessesNavbar /> },
  { substring: "for-freelancers", component: <ForFreelancersNavbar /> },
  { substring: "for-agencies", component: null },
  { substring: "landing-pages", component: null },
  {
   substring: "services",
   component:
    segments[1] === "web-analytics-and-tracking" ? (
     <ForFreelancersNavbar />
    ) : (
     <SiteNavbar />
    ),
  },
 ];

 // Determine the appropriate navbar to display
 const navbarToDisplay = navbarMap.find((mapping) =>
  segments.some((segment) => segment.includes(mapping.substring))
 )?.component;

 // Render the navbar if it exists, otherwise render SiteNavbar or null
 return segments[0] === undefined ? null : navbarToDisplay !== undefined ? (
  navbarToDisplay
 ) : (
  <SiteNavbar />
 );
};

export default GlobalNavbar;
