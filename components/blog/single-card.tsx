'use client';

import Text from '@/components/ui/text';
import { SingleBlogCardProps } from '@/types/index';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

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
              className="rounded-lg"
            />
            <Text as="h4" variant="headingLg" className="line-clamp-2 pt-2">
              {post.title}
            </Text>
            <Text as="p" variant="bodyMd" className="line-clamp-2">
              {post.description}
            </Text>
            <div className="flex flex-row items-center justify-between whitespace-nowrap pt-2 text-xs">
              <Text as="p" variant="bodyMd">
                {post.date}
              </Text>
            </div>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default BlogCard;
