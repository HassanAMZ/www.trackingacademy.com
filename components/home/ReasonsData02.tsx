import React from "react";
import Image from "next/image";
export default function ReasonsData02() {
 return (
  <React.Fragment>
   {" "}
   <p className='text-primary text-center'>
    Configuring & Optimizing Website Tracking Setups 🚀
   </p>
   <h2 className='title-primary text-center py-4 max-w-2xl'>
    Here's why you should trust our{" "}
    <div className='relative inline-block'>
     <span>expertise</span>
     <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary rounded-full'></span>
    </div>{" "}
    in website tracking?
   </h2>
   <p className='text-center container-secondary paragraph-primary py-8'>
    For 240+ clients and 25+ agencies, from startups to multi-million-dollar
    websites, we have made setting up and fixing tracking systems simple, fast,
    efficient and successful.
   </p>
   <div className='py-5'>
    <Image
     src={"/images/social-sharing.png"}
     alt={`Client `}
     width={1920} // Original width
     height={1080} // Original height
     layout='responsive'
     className='rounded-lg'
    />
   </div>
  </React.Fragment>
 );
}
