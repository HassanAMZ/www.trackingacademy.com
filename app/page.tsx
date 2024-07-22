import Hero from "@/components/for-freelancers/hero";
import Offer from "@/components/for-freelancers/offer";
import Navbar from "@/components/global/navbar";
import WorkHistory from "@/components/home/work-history";
import React from "react";

export default function ForFreelancers() {
  return (
    <main className="">
      <Navbar />
      
      <Hero />
      <WorkHistory />
      <Offer />
    </main>
  );
}
