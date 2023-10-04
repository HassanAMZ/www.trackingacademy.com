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
     className='backgroundOverlay w-full font-medium !py-3 border'>
     View Details&nbsp;
     <span aria-hidden='true'>&nbsp; &rarr; </span>
    </Link>
   </div>
  </>
 );
};

export default ServiceCard;
