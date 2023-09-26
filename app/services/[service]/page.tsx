import servicesDetails from "@/data/services-details";
import Image from "next/image";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CustomLink from "@/components/mdx/CustomLink";
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

  return (
   <section>
    <h1 className='text-5xl leading-none  font-semibold tracking-tighter'>
     {serviceObject.title}
    </h1>
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

      <div>
       <h3 className='text-2xl font-medium py-2'> Project Details</h3>
       <div
        className='text-left text-gray-700 dark:text-gray-300'
        dangerouslySetInnerHTML={{
         __html: serviceObject.description.replace(/\n/g, "<br>"),
        }}
       />
      </div>
      <div className='grid grid-cols-5 gap-2 p-4  rounded-md dark:bg-gray-100 bg-gray-900 bg-opacity-10 dark:bg-opacity-10 shadow-md '>
       {serviceObject.packages.map((service, index) => {
        return (
         <React.Fragment key={index}>
          <p className='col-span-2 font-medium'>{service.name}</p>
          <div className='col-span-3 grid grid-cols-3 gap-2'>
           {service.value.map((value, index) => {
            return (
             <p key={index} className=''>
              {value}
             </p>
            );
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
