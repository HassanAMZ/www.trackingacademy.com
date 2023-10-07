import clientsDetails from "@/data/clients-details";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
    {clientsDetails.map((client, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <div className='flex flex-col gap-1 backgroundOverlay !p-0'>
        <Link href={`/portfolio/${client.id}`}>
         <React.Fragment>
          <div className='relative '>
           <div className='flex flex-col gap-1 max-w-xl text-center items-center justify-center'>
            <Image
             className='rounded-md bg-gray-100 aspect-square'
             width={1920}
             height={540}
             src={client.images[0].link}
             alt={client.title}
            />
           </div>
          </div>
          <p className='font-medium p-3 text-left'>{client.title}</p>
         </React.Fragment>
        </Link>
       </div>
      </div>
     );
    })}
   </div>
  </section>
 );
}
