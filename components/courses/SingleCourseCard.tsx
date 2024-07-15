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
    <Link href={`/${type}/${course.slug}`}>
      <section className="rounded-lg border-2">
        <Image
          alt={course.title}
          src={course.openGraph.images[0]}
          height={1920}
          width={1080}
          className="w-fit rounded-lg"
        />
        <div className="p-4">
          <Heading2xl>{course.title}</Heading2xl>
          <Paragraphsm className="line-clamp-3">
            {course.description}
          </Paragraphsm>
          <div className="flex items-center justify-between py-5">
            <div className="flex py-2">
              <Paragraphsm>{course.price}</Paragraphsm>
              <Paragraphsm>{course.currency.symbol}</Paragraphsm>
            </div>
            <Paragraphsm className="rounded-full border-2 px-3 py-1 font-semibold">
              Learn More
            </Paragraphsm>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default SingleCourseCard;
