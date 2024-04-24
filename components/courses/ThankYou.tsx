import HeroComponent from "../global/HeroComponent";

export default function ThankYou() {
 return (
  <HeroComponent
   textGroup={{
    welcomeText: "Thank You",
    heading: "For Submitting the Waitlist Form",
   }}
   links={{
    primary: {
     src: "/", // You can adjust the redirect link if needed
     text: "Back to Home",
    },
   }}
   images={{
    background: {
     desktop: "/images/hero/hero-image-md.png",
     mobile: "/images/hero/hero-image-sm.png",
    },
   }}
  />
 );
}
