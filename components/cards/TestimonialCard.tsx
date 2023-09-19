import Image from "next/image";
import { ClientCardProps, Client } from "@/types/index";
const TestimonialCard: React.FC<ClientCardProps> = ({ client }) => {
 return (
  <section className='bg-gray-900 sm:p-4 p-2 bg-opacity-5 shadow-md rounded-md flex justify-center items-center'>
   <Image
    className='rounded-md w-20 h-20'
    width={2000}
    height={2000}
    src={client.images[0].link}
    alt={client.title}
   />
   <div className='p-2 flex flex-col'>
    <p className='font-semibold text-left line-clamp-1'>{client.title}</p>
    <p className='text-left line-clamp-3'>
     {client.testimonial_details[0].testimonial}
    </p>
   </div>
  </section>
 );
};

export default TestimonialCard;
