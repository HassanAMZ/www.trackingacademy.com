import Image from "next/image";
import { ClientCardProps, Client } from "@/types/index";
import Link from "next/link";
const TestimonialCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <div className='bg-gray-900 bg-opacity-5 shadow-md rounded-md  text-sm sm:text-md p-6'>
   <blockquote className='overflow-hidden h-full  flex flex-col'>
    <header className='flex flex-col flex-1'>
     <div className='flex'>
      <p className='font-medium text-left line-clamp-1 text-md'>
       {client.title}
      </p>
     </div>
     <p className='py-1 sm:py-2'>{client.testimonial_details[0].testimonial}</p>
     <p className=''>Huge time and cost saver!</p>
     <div className='pt-3'>
      <div className='w-12 h-px bg-gray-900 mb-1 '></div>
      <div className='w-10 h-px bg-gray-900 mb-1'></div>
     </div>
    </header>
    <footer className='flex items-center pt-2 space-x-4'>
     <Image
      className='w-10 h-10 rounded-full ring-2 ring-white'
      width={2000}
      height={2000}
      src={client.images[1].link}
      alt={client.title}
     />

     <div>
      <p className='font-bold'>{client.client_details[0].name}</p>
      <div className='flex gap-2'>
       <p className='text-sm'>{client.client_details[0].position} - </p>
       <Link href={client.business_details.link} className=''>
        {client.business_details.name}
       </Link>
      </div>
     </div>
    </footer>
   </blockquote>
  </div>
 );
};

export default TestimonialCard;
