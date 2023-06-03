import servicesDetails from "@/data/services-details";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ServiceDetails = {
 pid: string;
 title: string;
 description: string;
 packages: {
  name: string;
  value: string[];
 }[];
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
};

type PageProps = {
 params: {
  service: string;
 };
};

const Page: React.FC<PageProps> = ({ params }) => {
 let serviceId = params.service;
 let serviceObject = servicesDetails.find(
  (serviceDetails: ServiceDetails) => serviceDetails.pid === serviceId
 );

 if (serviceObject) {
  let serviceSubDetails = serviceObject.packages.map((service, index) => {
   return (
    <React.Fragment key={index}>
     <p className='col-span-3'>{service.name}</p>
     <div className='col-span-2 grid grid-cols-1 gap-2'>
      {service.value.slice(0, 1).map((value, index) => {
       return <p key={index}>{value}</p>;
      })}
     </div>
    </React.Fragment>
   );
  });

  let buyButton = (
   <div className='px-4 pb-4 flex flex-col'>
    <Link
     href='#'
     className='rounded-md bg-gradient-to-tr from-my-purple to-my-pink px-3.5 py-2.5 text-center font-semibold shadow-sm hover:to-my-purple hover:from-my-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-purple'>
     Continue ( {serviceObject.packages[1].value[0]}$ )
    </Link>
   </div>
  );
  return (
   <>
    <h1 className='text-4xl font-semibold'>{serviceObject.title}</h1>
    <div className='grid grid-cols-1 md:grid-cols-[3fr,_2fr]'>
     <div className='gap-2 flex flex-col'>
      <div className='relative aspect-[4/3]'>
       <Image
        className='rounded-lg'
        fill
        src={serviceObject.featured_image_url}
        alt={serviceObject.title}
       />
      </div>

      <div className='flex flex-col md:hidden border-2 border-gray-50 rounded-md'>
       <div className='grid grid-cols-5 gap-2 p-4'>{serviceSubDetails}</div>
       {buyButton}
      </div>

      <div>
       <h3 className='text-2xl font-semibold py-2'> Project Details</h3>
       <p
        dangerouslySetInnerHTML={{
         __html: serviceObject.description.replace(/\n/g, "<br>"),
        }}
       />
      </div>
      <div className='grid grid-cols-5 gap-2 p-4 border-2 border-gray-50 rounded-md'>
       {serviceObject.packages.map((service, index) => {
        return (
         <React.Fragment key={index}>
          <p className='col-span-2'>{service.name}</p>
          <div className='col-span-3 grid grid-cols-3 gap-2'>
           {service.value.map((value, index) => {
            return <p key={index}>{value}</p>;
           })}
          </div>
         </React.Fragment>
        );
       })}
      </div>
     </div>
     <div className='hidden md:block px-2'>
      <div className='flex flex-col border-2 border-gray-50 rounded-md'>
       <div className='grid grid-cols-5 gap-2 p-4'>{serviceSubDetails}</div>
       {buyButton}
      </div>
     </div>
    </div>
   </>
  );
 } else {
  return <div>Service not found</div>;
 }
};

export default Page;
