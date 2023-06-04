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
     <h3>{detail.heading}</h3>
     <p>{detail.description}</p>
    </React.Fragment>
   );
  });

  return (
   <>
    <h1 className='text-4xl font-semibold'>{clientObject.title}</h1>
    <div className='grid grid-cols-1 md:grid-cols-[3fr,_2fr]'>
     <div className='gap-2 flex flex-col text-justify'>{clientSubDetails}</div>
     <div className='hidden md:block px-2'>
      <div className='flex flex-col border-2 border-gray-50 rounded-md p-2 gap-2'>
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
     </div>
    </div>
   </>
  );
 } else {
  return <ContainerLayout>Client not found</ContainerLayout>;
 }
};

export default Page;
