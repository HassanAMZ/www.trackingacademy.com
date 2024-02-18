import React from "react";
import Image from "next/image";
const clientImages = [
 "/images/clients/001.svg",
 "/images/clients/003.svg",
 "/images/clients/004.svg",
 "/images/clients/005.svg",
 "/images/clients/002.svg",
 "/images/clients/006.svg",
];

export default function WorkHistory() {
 return (
  <React.Fragment>
   {" "}
   <h2 className='title-secondary text-center'>
    Tracking Academy is trusted by
   </h2>
   <div className='grid grid-cols-2 md:grid-cols-3 gap-2 pt-6 items-center justify-center'>
    {clientImages.map((image, index) => (
     <div
      key={index}
      className='rounded-lg filter object-contain overflow-hidden brightness-200 contrast-200'>
      <Image
       src={image}
       alt={`Client ${index}`}
       width={1920}
       height={540}
       className='filter brightness-200 grayscale scale-125'
      />
     </div>
    ))}
   </div>
  </React.Fragment>
 );
}
