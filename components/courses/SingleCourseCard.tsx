import React from 'react';
import { SingleCourseCardProps } from '@/types/index';
import Text from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';

const SingleCourseCard: React.FC<SingleCourseCardProps> = ({
  course,
  type,
  isMain = false,
  className = '',
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
          <Text as="h2" variant="heading2xl">
            {course.title}
          </Text>
          <Text as="p" variant="bodyMd" className="line-clamp-3">
            {course.description}
          </Text>
          <div className="flex items-center justify-between py-5">
            <div className="flex py-2">
              <Text as="p" variant="bodyMd">
                {course.price}
              </Text>
              <Text as="p" variant="bodyMd">
                {course.currency.symbol}
              </Text>
            </div>
            <Text as="p" className="rounded-full border-2 px-3 py-1 font-semibold">
              Learn More
            </Text>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default SingleCourseCard;
