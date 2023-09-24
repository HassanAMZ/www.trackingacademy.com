import CustomLink from "@/components/mdx/CustomLink";
import Image from "next/image";
import { ClientCardProps, Client } from "@/types/index";
const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <>
   <div className='flex flex-col gap-1 shadow-md ring-1 rounded-md ring-gray-900 dark:ring-gray-100 ring-opacity-50 dark:ring-opacity-50'>
    <CustomLink href={`/portfolio/${client.id}`}>
     <div className='relative  sm:h-auto max-w-full'>
      <div className='flex flex-col gap-1 text-center '>
       <Image
        className='rounded-md'
        width={1920}
        height={540}
        src={client.images[0].link}
        alt={client.title}
       />
      </div>
     </div>
    </CustomLink>
   </div>
  </>
 );
};

export default ClientCard;
