import clientDetails from "@/data/clients-details";
import Image from "next/image";
import CustomLink from "@/components/mdx/CustomLink";
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
  let clientSubDetails = clientObject.project_description.map(
   (detail, index) => {
    return (
     <React.Fragment key={index}>
      <h3 className='text-2xl font-medium py-2'>{detail.heading}</h3>
      <p>{detail.description}</p>
     </React.Fragment>
    );
   }
  );
  const isEven = (id: string): boolean => {
   return parseInt(id, 10) % 2 === 0;
  };

  const bgColor = isEven(clientObject.id)
   ? "bg-gray-100 border-gray-900 dark:bg-gray-800 dark:border-gray-100"
   : "bg-gray-900 border-gray-1000 dark:bg-gray-100 dark:border-gray-600";

  return (
   <React.Fragment>
    <div className='backgroundOverlay !p-0'>
     <Image
      width={1920}
      height={540}
      className={`rounded-md ${bgColor} border-2 `}
      src={clientObject.images[0].link}
      alt={clientObject.images[0].name}
     />
     <div className='flex flex-col gap-2 p-2 sm:p-4'>
      <h3 className='text-2xl font-medium py-2'> Project Details</h3>
      {clientObject.project_details.map((project_detail, index) => {
       return (
        <React.Fragment key={index}>
         <div className='grid grid-cols-5 gap-2 items-center justify-center'>
          <p className='col-span-2'>{project_detail.heading}:</p>
          <CustomLink className='col-span-3' href={project_detail.link}>
           {project_detail.title}
          </CustomLink>
         </div>
        </React.Fragment>
       );
      })}
     </div>
    </div>
    <div className='gap-2 flex flex-col text-left  tracking-normal leading-normal'>
     {clientSubDetails}
    </div>
   </React.Fragment>
  );
 } else {
  return <div>Client not found</div>;
 }
};

export default Page;
