import Link from "next/link";
import Image from "next/image";
import { ClientCardProps, Client } from "@/types/index";
const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <>
   <div className='flex flex-col gap-1 ring-2 rounded-md ring-gray-900'>
    <Link href={`/portfolio/${client.id}`}>
     <div className='relative  sm:h-auto max-w-full'>
      <div className='flex flex-col gap-1 text-center'>
       <Image
        className='rounded-md'
        width={1920}
        height={1080}
        src={client.images[0].link}
        alt={client.title}
       />
      </div>
     </div>
    </Link>
   </div>
  </>
 );
};

export default ClientCard;
