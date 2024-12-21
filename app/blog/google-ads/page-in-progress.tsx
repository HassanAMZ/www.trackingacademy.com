import React from 'react';
import BlogContainer from '@/components/blog/container';
import getBlogsData from 'utils/getBlogsData';

export default async function Page() {
  const data = await getBlogsData('app/blog/google-ads');

  const sortedData = (await Promise.all(data))
    .filter((item) => item.draft === false)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="flex flex-col gap-2">
      <BlogContainer rawData={data} data={sortedData} type="blog" />
    </div>
  );
}
