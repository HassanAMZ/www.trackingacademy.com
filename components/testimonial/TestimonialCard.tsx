import Image from "next/image";
import { ClientCardProps, Client, TestimonialCardProps } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
import ContainerLayout from "../layouts/ContainerLayout";
import { Heading2xl, Paragraphmd } from "../typography/Heading";
const TestimonialCard: React.FC<TestimonialCardProps> = ({ person }) => {
 return (
  <ContainerLayout>
   <div className='text-center py-12'>
    <blockquote className='overflow-hidden h-full items-center justify-center flex flex-col p-6 gap-5 md:max-w-2xl mx-auto'>
     <Image
      className='w-32 rounded-full'
      width={person.image.width}
      height={person.image.height}
      src={person.image.src}
      alt={person.image.alt}
     />
     <Heading2xl>{person.testimonial}</Heading2xl>
     <Paragraphmd className='opacity-70'>
      {person.name}
      <br /> {person.position}
     </Paragraphmd>
    </blockquote>
   </div>
  </ContainerLayout>
 );
};

export default TestimonialCard;
