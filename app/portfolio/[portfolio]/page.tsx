import ContainerLayout from "@/components/layouts/ContainerLayout";
import clientDetails from "@/data/clients-details";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Client } from "@/types/index"; // assuming the types folder is in your root directory
import type { DynamicPortfolioPageProps } from "@/types/index";

export async function generateStaticParams() {
 return clientDetails.map((client) => ({
  client: client.id,
 }));
}

const Page: React.FC<DynamicPortfolioPageProps> = ({ params }) => {
 let clientId = params.portfolio;
 let clientObject = clientDetails.find(
  (clientDetails: Client) => clientDetails.id === clientId
 );

 if (clientObject) {
  let clientSubDetails = clientObject.details.map((detail, index) => {
   return (
    <React.Fragment key={index}>
     <h3 className='text-2xl font-semibold py-2'>{detail.heading}</h3>
     <p>{detail.description}</p>
    </React.Fragment>
   );
  });

  return (
   <React.Fragment>
    <Image
     width={1920}
     height={1080}
     className='rounded-md aspect-video'
     src={clientObject.images[0].link}
     alt={clientObject.images[0].name}
    />
    {/* <h1 className='text-4xl font-semibold'>{clientObject.title}</h1> */}
    <div className='flex flex-col gap-2'>
     <h3 className='text-2xl font-semibold py-2'> Project Details</h3>
     {clientObject.project_details.map((project_detail, index) => {
      return (
       <React.Fragment key={index}>
        <div className='grid grid-cols-5 gap-2 items-center justify-center'>
         <p className='col-span-2'>{project_detail.heading}:</p>
         <Link
          className='col-span-3'
          href={project_detail.link}
          target='_blank'
          rel='noopener noreferrer'>
          <p>{project_detail.title}</p>
         </Link>
        </div>
       </React.Fragment>
      );
     })}
    </div>
    <div className='gap-2 flex flex-col text-justify'>{clientSubDetails}</div>
   </React.Fragment>
  );
 } else {
  return <div>Client not found</div>;
 }
};

export default Page;
