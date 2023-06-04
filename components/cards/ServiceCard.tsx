import Link from "next/link";
import Image from "next/image";

type ServiceType = {
 id: string;
 title: string;
 description: string;
 packages: Array<{
  name: string;
  value: string[];
 }>;
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
};

type ServiceCardProps = {
 service: ServiceType;
};

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
   <div className='flex flex-col gap-1 text-center items-center justify-center'>
    <h3 className='font-semibold sm:text-lg line-clamp-1'>{service.title}</h3>
    {/* <div className='flex gap-2 opacity-80'>
     <p className='py-1 text-sm'>{service.packages[2].value[2]} &nbsp;</p>
    </div> */}
    <Link
     href={`/services/${service.id}`}
     className='px-2 text-sm py-1 border-[1.5px] w-full border-gray-50  rounded-full font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
     <p className='bg-gray-900 bg-opacity-50 rounded-md p-1 text-sm'>
      View Details&nbsp;(from ${service.packages[1].value[0]} )
      {/* <span aria-hidden='true'>&nbsp; &rarr; </span> */}
     </p>
    </Link>
   </div>
  </>
 );
};

export default ServiceCard;
