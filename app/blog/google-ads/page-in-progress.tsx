import React, { useEffect } from "react";
import BlogContainer from "@/components/blog/BlogContainer";
import getBlogsData from "utils/getBlogsData";
import { GTMBlogListViewEvent } from "@/components/analytics/GTMEvents";
import {
 Heading5xl,
 Heading6xl,
 Headingxl,
} from "@/components/typography/Heading";

export default async function Page() {
 const data = await getBlogsData("app/blog/google-ads");

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