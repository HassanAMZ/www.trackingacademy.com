import React, { useState } from 'react';
import SingleBlogCard from '@/components/blog/single-card';
import { BlogContentProps } from '@/types/index';
import { Button } from '../ui/button';

const BlogContent: React.FC<BlogContentProps> = ({ data, type, rawData }) => {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const remainingPosts = data.slice(0, visiblePosts);

  const loadMoreHandler = () => {
    setVisiblePosts((prevValue) => prevValue + 10);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {remainingPosts.map((post, index) => (
          <SingleBlogCard post={post} type={type} key={index} />
        ))}
      </div>
      {visiblePosts < data.length && (
        <Button variant="outline" className="w-full" onClick={loadMoreHandler}>
          View More Blogs
        </Button>
      )}
    </React.Fragment>
  );
};

export default BlogContent;
