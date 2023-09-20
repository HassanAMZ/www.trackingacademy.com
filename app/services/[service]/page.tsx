import servicesDetails from "@/data/services-details";
import Image from "next/image";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Link from "next/link";
import React from "react";
import type { ServiceDetails, DynamicServicesPageProps } from "@/types/index";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
 return servicesDetails.map((service) => ({
  service: service.id,
 }));
}

const Page: React.FC<DynamicServicesPageProps> = ({ params }) => {
 let serviceId = params.service;
 let serviceObject = servicesDetails.find(
  (serviceDetails: ServiceDetails) => serviceDetails.id === serviceId
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
     href='/contact'
     className='rounded-md px-3.5 py-2.5 text-sm font-medium shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple text-center'>
     Continue ( {serviceObject.packages[1].value[0]}$ )
    </Link>
   </div>
  );
  return (
   <section>
    <h1 className='text-6xl font-medium pb-2'>{serviceObject.title}</h1>
    <div className='grid grid-cols-1'>
     <div className='gap-2 flex flex-col'>
      <div className='relative aspect-[4/3] '>
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
       <h3 className='text-2xl font-medium py-2'> Project Details</h3>
       <p
        className='text-justify'
        dangerouslySetInnerHTML={{
         __html: serviceObject.description.replace(/\n/g, "<br>"),
        }}
       />
      </div>
      <div className='grid grid-cols-5 gap-2 p-4 border-2 border-gray-50 rounded-md sm:bg-gray-900 sm:bg-opacity-5 sm:shadow-md  divide-y-2  divide-x-2'>
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
    </div>
   </section>
  );
 } else {
  return <ContainerLayout>Service not found</ContainerLayout>;
 }
};

export default Page;
