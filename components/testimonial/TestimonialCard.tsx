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
  <ContainerLayout className={`text-center  ${className ?? ""}`}>
   <div className='text-center py-3 '>
    <blockquote className='overflow-hidden h-full items-center justify-center flex flex-col p-6 gap-5'>
     <Paragraphmd>★★★★★</Paragraphmd>
     <Image
      className='w-32 rounded-full'
      width={person.image.width}
      height={person.image.height}
      src={person.image.src}
      alt={person.image.alt}
     />
     <Heading2xl className='line-clamp-2'>{person.testimonial}</Heading2xl>
     <Paragraphsm className='textOpacity80'>
      {/* {person.name}
      <br /> */}
      {person.position}
     </Paragraphsm>
    </blockquote>
   </div>
  </ContainerLayout>
 );
};

export default TestimonialCard;
