import Link from "next/link";
import Image from "next/image";

type ServiceType = {
 pid: string;
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
   <div className='flex flex-col gap-1'>
    <h3 className='font-semibold sm:text-lg line-clamp-1'>{service.title}</h3>
    <div className='flex gap-2 opacity-80'>
     <p className='bg-gray-900 bg-opacity-50 rounded-md max-w-fit p-1 text-sm'>
      from ${service.packages[1].value[0]}
     </p>
     <p className='py-1 text-sm'>{service.packages[2].value[2]} &nbsp;</p>
    </div>
    <Link
     href={`/services/${service.pid}`}
     className='px-2 text-sm py-1 border-[1.5px]  border-gray-50 w-fit rounded-full font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-purple'>
     View Details &nbsp;
     {/* <span aria-hidden='true'>&nbsp; → </span> */}
    </Link>
   </div>{" "}
  </>
 );
};

export default ServiceCard;
