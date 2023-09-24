import Image from "next/image";
import { ClientCardProps, Client } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
const TestimonialCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <div className='backgroundOverlay  text-base sm:text-base p-6'>
   <blockquote className='overflow-hidden h-full  flex flex-col'>
    <header className='flex flex-col flex-1'>
     <div className='flex'>
      <p className='font-medium text-left line-clamp-1 text-base'>
       {client.title}
      </p>
     </div>
     <p className='py-1 sm:py-2'>{client.testimonial_details[0].testimonial}</p>
     <p className=''>Huge time and cost saver!</p>
     <div className='pt-3'>
      <div className='w-12 h-px bg-gray-900 dark:bg-gray-100 mb-1 '></div>
      <div className='w-10 h-px bg-gray-900 dark:bg-gray-100 mb-1'></div>
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
      <p className='font-semibold'>{client.client_details[0].name}</p>
      <div className='flex gap-2'>
       <p className='text-base'>{client.client_details[0].position} - </p>
       <CustomLink href={client.business_details.link} className=''>
        {client.business_details.name}
       </CustomLink>
      </div>
     </div>
    </footer>
   </blockquote>
  </div>
 );
};

export default TestimonialCard;
