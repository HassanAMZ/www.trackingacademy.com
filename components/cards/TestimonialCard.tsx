import Image from "next/image";
import { TestimonialCardProps, Testimonial } from "@/types/index";
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
 return (
  <section className='bg-gray-900 sm:p-4 p-2 bg-opacity-5 shadow-md rounded-md flex justify-center items-center'>
   <Image
    className='rounded-md w-20 h-20'
    width={4000}
    height={4000}
    src={testimonial.images[0].link}
    alt={testimonial.name}
   />
   <div className='p-2 flex flex-col text-sm sm:text-md'>
    <p className='font-semibold text-lefttext-sm line-clamp-1'>
     {testimonial.title}
    </p>
    <p className='text-lefttext-sm line-clamp-3'>
     {testimonial.testimonial_details}
    </p>
   </div>
  </section>
 );
};

export default TestimonialCard;
