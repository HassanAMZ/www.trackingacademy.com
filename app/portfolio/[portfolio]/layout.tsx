import RecentClientSlider from "@/components/holders/RecentClientSlider";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";
import React, { useState } from "react";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
 return (
  <React.Fragment>
   <main>{children}</main>
   <div className=''>
    <h3 className='text-2xl font-medium py-4'>
     Recent Web Analytics & Tracking Projects
    </h3>
    <RecentClientSlider />
   </div>
  </React.Fragment>
 );
}
