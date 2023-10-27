import HeroComponent from "@/components/global/HeroComponent";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import baseColors from "@/data/base-colors";
import Link from "next/link";
import React from "react";

export default function NotFound() {
 return (
  <React.Fragment>
   <HeroComponent
    textGroup={{
     welcomeText: "Lost? Let us help you.",
     heading: "404 - Page Not Found 😢",
     subHeading: {
      one: "Oops! ",
      two: "It seems the page you're looking for doesn't exist. You can return to our homepage or explore other offerings",
     },
    }}
    links={{
     primary: { src: "/", text: "Go to Homepage" },
     secondary: { src: "/courses", text: "Explore Courses" },
    }}
    images={{
     group: {
      list: [],
     },
     background: "/images/hero/hero-image.png",
    }}
    colorDetails={{
     primary: baseColors.notFound.primary,
     dark: { value: 80 },
     light: { value: 10 },
    }}
   />
  </React.Fragment>
 );
}
