import React from "react";
import { SingleCourseCardProps } from "@/types/index";
import { Heading2xl, Paragraphsm } from "@/components/typography/Heading";
import Image from "next/image";
import Link from "next/link";

const SingleCourseCard: React.FC<SingleCourseCardProps> = ({
 course,
 type,
 isMain = false,
 className = "",
}) => {
 return (
  <Link href={`/${type}/${course.slug}`} className=''>
   <section className='border-2 rounded-md'>
    <Image
     alt={course.title}
     src={course.openGraph.images[0]}
     height={1920}
     width={1080}
     className='w-fit rounded-md'
    />
    <div className='p-4'>
     <Heading2xl>{course.title}</Heading2xl>
     <Paragraphsm className='line-clamp-3'>{course.description}</Paragraphsm>
     <div className='flex py-5 items-center justify-between'>
      <div className='flex py-2'>
       <Paragraphsm>{course.price}</Paragraphsm>
       <Paragraphsm>{course.currency.symbol}</Paragraphsm>
      </div>
      <Paragraphsm className='border-2 rounded-full py-1 px-3 font-semibold'>
       Learn More
      </Paragraphsm>
     </div>
    </div>
   </section>
  </Link>
 );
};

export default SingleCourseCard;
