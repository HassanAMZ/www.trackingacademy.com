import servicesDetails from "@/data/services-details";
import Image from "next/image";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";
import type { ServiceDetails, DynamicServicesPageProps } from "@/types/index";
import PayPal from "@/components/paypal/PayPal";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
 return servicesDetails.map((service) => ({
  service: service.id,
 }));
}

export async function generateMetadata({ params }: any) {
 let serviceId = params.service;
 let serviceObject = servicesDetails.find(
  (serviceDetails: ServiceDetails) => serviceDetails.id === serviceId
 );

 return {
  title: serviceObject?.title,
  images: ["/images/social-sharing.png"],
 };
}

const PaypalRender = ({ product }: any) => {
 return (
  <div className='py-2 grid justify-left items-center '>
   <div className='md:max-w-lg'>
    <PayPal product={product} />
   </div>
  </div>
 );
};

const Page: React.FC<DynamicServicesPageProps> = ({ params }) => {
 let serviceId = params.service;
 let serviceObject = servicesDetails.find(
  (serviceDetails: ServiceDetails) => serviceDetails.id === serviceId
 );
 const getPricingFromPackages = (
  packages: { name: string; value: string }[]
 ): string => {
  const pricePackage = packages.find((pkg) => pkg.name === "Price");
  return pricePackage?.value || "Not found";
 };

 if (serviceObject) {
  let product = {
   name: serviceObject.title,
   id: serviceObject.id,
   amount: parseFloat(getPricingFromPackages(serviceObject.packages)),
  };
  return (
   <section>
    <h3 className='text-2xl py-2 leading-none font-semibold tracking-tighter'>
     {serviceObject.title}
    </h3>
    <div className='gap-2 grid grid-cols-1 md:grid-cols-5'>
     <div className='relative aspect-[4/3] col-span-1 md:col-span-3'>
      <Image
       className='rounded-md'
       fill
       src={serviceObject.featured_image_url}
       alt={serviceObject.title}
      />
     </div>
     <div className='col-span-1 md:col-span-2'>
      <div className=' grid grid-cols-3 gap-2 p-4 backgroundOverlay'>
       {serviceObject.packages.map((service, index) => {
        return (
         <React.Fragment key={index}>
          <p className='col-span-2 font-medium'>{service.name}</p>
          <div className='col-span-1 '>{service.value}</div>
         </React.Fragment>
        );
       })}
      </div>
      <div className='md:block hidden'>
       <PaypalRender product={product} />
      </div>
     </div>
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
    <div className='block md:hidden'>
     <PaypalRender product={product} />
    </div>
   </section>
  );
 } else {
  return <ContainerLayout>Service not found</ContainerLayout>;
 }
};

export default Page;
