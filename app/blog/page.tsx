import React, { useEffect } from "react";
import BlogContainer from "@/components/blog/BlogContainer";
import getBlogsData from "@/components/utils/getBlogsData";
import { GTMBlogListViewEvent } from "@/components/analytics/GTMEvents";

export default async function Page() {
 const data = await getBlogsData();

 // Filter out draft entries, then sort the remaining entries by date
 const sortedData = (await Promise.all(data))
  .filter((item) => item.draft === false)
  .sort((a, b) => {
   const dateA = new Date(a.date);
   const dateB = new Date(b.date);
   return dateB.getTime() - dateA.getTime();
  });

 return (
  <div className='flex flex-col gap-2'>
   <GTMBlogListViewEvent blogList={sortedData} />
   <BlogContainer rawData={data} data={sortedData} type='blog' />
  </div>
 );
}
