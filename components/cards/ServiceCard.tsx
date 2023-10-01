import CustomLink from "@/components/mdx/CustomLink";
import Image from "next/image";

import type { ServiceCardProps } from "@/types/index";
import Link from "next/link";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
 let formattedDescription = service.description.replace(/\n/g, "<br>");
 return (
  <>
   <div className='relative aspect-[4/3] sm:h-auto max-w-full'>
    <Image
     className='rounded-md'
     width={1000}
     height={750}
     src={service.featured_image_url}
     alt={service.title}
    />
   </div>
   <div className='flex flex-col gap-1 text-left items-center justify-center'>
    <h3 className='font-medium py-1 line-clamp-2'>{service.title}</h3>
    <Link
     href={`/services/${service.id}`}
     className='rounded-md px-3 py-2 text-base font-medium shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 border-2 dark:border-gray-100 border-gray-800 w-full'>
     <p className='rounded-md p-1 text-base '>
      View Details&nbsp;
      {/* (from ${service.packages[1].value[0]} ) */}
      <span aria-hidden='true'>&nbsp; &rarr; </span>
     </p>
    </Link>
   </div>
  </>
 );
};

export default ServiceCard;
