import Link from "next/link";
import Image from "next/image";
import { TestimonialCardProps, Testimonial } from "@/types/index";
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
 return (
  <section className='sm:bg-gray-900 p-4 sm:bg-opacity-5 sm:shadow-md rounded-md flex '>
   <Image
    className='rounded-md w-20 h-auto'
    width={4000}
    height={4000}
    src={testimonial.images[0].link}
    alt={testimonial.name}
   />
   <div className='p-2'>
    <p className='font-semibold text-left pt-2 pb-1'>{testimonial.title}</p>
    <p className='text-left pb-1'>{testimonial.testimonial_details}</p>
   </div>
  </section>
 );
};

export default TestimonialCard;
