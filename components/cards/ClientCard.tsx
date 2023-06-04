import Link from "next/link";
import Image from "next/image";

// Define types
type ClientDetails = {
 id: string;
 title: string;
 tags: string[];
 details: { heading: string; description: string }[];
 images: { name: string; link: string }[];
 project_details: { heading: string; title: string; link: string }[];
};

type ClientCardProps = {
 client: ClientDetails;
};

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <>
   <div className='flex flex-col gap-1'>
    <div className='relative aspect-[4/3] sm:h-auto max-w-full'>
     <Image
      className='rounded-md'
      width={1000}
      height={750}
      src={client.images[0].link}
      alt={client.title}
     />
    </div>
    <div className='flex flex-col gap-1 text-center'>
     {/* <h3 className='font-semibold sm:text-lg line-clamp-1'>{client.title}</h3> */}

     <Link
      href={`/portfolio/${client.id}`}
      className='px-2 text-sm py-1 border-[1.5px] w-full border-gray-50  rounded-full font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
      View Details&nbsp;<span aria-hidden='true'>&rarr; </span>
     </Link>
    </div>
   </div>
  </>
 );
};

export default ClientCard;
