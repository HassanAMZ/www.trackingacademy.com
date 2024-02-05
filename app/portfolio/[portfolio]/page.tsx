import clientDetails from "@/data/clients-details";
import Image from "next/image";
import CustomLink from "@/components/mdx/CustomLink";
import React from "react";
import { Client } from "@/types/index"; // assuming the types folder is in your root directory
import type { DynamicPortfolioPageProps } from "@/types/index";
import { Heading3xl, Paragraphmd } from "@/components/typography/Heading";

export async function generateStaticParams() {
 return clientDetails.map((client) => ({
  client: client.id,
 }));
}

const Page: React.FC<DynamicPortfolioPageProps> = ({ params }) => {
 let clientId = params.portfolio;
 let clientObject = clientDetails.find(
  (client) => client.id === parseInt(clientId)
 );

 if (clientObject) {
  let clientSubDetails = clientObject.project_description.map(
   (detail, index) => {
    return (
     <React.Fragment key={index}>
      <Heading3xl className=''>{detail.heading}</Heading3xl>
      <Paragraphmd>{detail.description}</Paragraphmd>
     </React.Fragment>
    );
   }
  );
  const isEven = (id: number): boolean => {
   return id % 2 === 0;
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
      <Heading3xl className=''> Project Details</Heading3xl>
      {clientObject.project_details.map((project_detail, index) => {
       return (
        <React.Fragment key={index}>
         <div className='grid grid-cols-5 gap-2 items-center justify-center'>
          <Paragraphmd className='col-span-2'>
           {project_detail.heading}:
          </Paragraphmd>
          <CustomLink className='col-span-3' href={project_detail.link}>
           {project_detail.title}
          </CustomLink>
         </div>
        </React.Fragment>
       );
      })}
     </div>
    </div>
    <div className='gap-2 flex flex-col text-left  '>{clientSubDetails}</div>
   </React.Fragment>
  );
 } else {
  return <div>Client not found</div>;
 }
};

export default Page;
