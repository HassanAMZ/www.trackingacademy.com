import Image from "next/image";
import { TestimonialCardProps } from "@/types/index";
import ContainerLayout from "@/layouts/ContainerLayout";
import {
 Heading2xl,
 Headingxl,
 Paragraphmd,
 Paragraphsm,
} from "@/components/typography/Heading";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
 person,
 className,
}) => {
 return (
  <section className={`text-center  ${(className || "") ?? ""}`}>
   <div className='text-center py-3 '>
    <blockquote className='overflow-hidden h-full items-center justify-center flex flex-col p-2 gap-5'>
     <span>★★★★★</span>
     <Image
      className='w-20 md:w-32 rounded-full'
      width={person.image.width}
      height={person.image.height}
      src={person.image.src}
      alt={person.image.alt}
     />
     <h6 className='line-clamp-3 paragraph-primary font-semibold text-center'>
      {person.testimonial}
     </h6>
     <p className='paragraph-secondary'>{person.position}</p>
    </blockquote>
   </div>
  </section>
 );
};

export default TestimonialCard;
