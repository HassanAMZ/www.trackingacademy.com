import React from 'react';
import getBlogsData from 'utils/getBlogsData';
import { GTMBlogListViewEvent } from '@/components/analytics/GTMEvents';
import BlogContainer from '@/components/blog/container';
import Container from '@/components/ui/container';

export default async function Page() {
  const data = await getBlogsData('app/blog');

  const sortedData = (await Promise.all(data))
    .filter((item) => item.draft === false)
    .sort((a, b) => b.blogId - a.blogId);

  const allTags = sortedData.slice(0, 5).flatMap((blog) => blog.tags);
  const uniqueTags = Array.from(new Set(allTags)).slice(0, 12);

  return (
    <Container className='w-full'>
      <GTMBlogListViewEvent blogList={sortedData} />
      <BlogContainer data={sortedData} type={'blog'} />
    </Container>
  );
}
