'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import generateBrightColor from 'utils/generateBrightColor';
import formatDate from '@/components/seo/formatDate';
import { SingleBlogCardProps } from '@/types/index';
import TypographyP from '../ui/typography-p';
import TypographyH2 from '../ui/typography-h2';
import TypographyH4 from '../ui/typography-h4';

const BlogCard: React.FC<SingleBlogCardProps> = ({
  post,
  type,
  isMain = false,
  className = '',
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLinkClick = () => {
    setIsClicked(true);
  };
  return (
    <React.Fragment>
      {post && (
        <div className={className || ''}>
          <Link href={`/${type}/${post.slug}`} onClick={handleLinkClick}>
            <Image
              src={post.openGraph.images[0]}
              alt={post.title}
              width={1920}
              height={1080}
              className='rounded-lg'
            />
            <TypographyH4 className='line-clamp-2 pt-2'>
              {post.title}
            </TypographyH4>
            <TypographyP className='line-clamp-2'>
              {post.description}
            </TypographyP>
            <div className='pt-2 whitespace-nowrap flex justify-between items-center text-xs flex-row'>
              <TypographyP applyMargin={false}>{post.date}</TypographyP>
            </div>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default BlogCard;
