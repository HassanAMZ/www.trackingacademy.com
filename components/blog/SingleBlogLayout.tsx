import React, { ReactNode } from "react";
import getBlogsData from "utils/getBlogsData";
import Image from "next/image";
import Link from "next/link";

export default async function SingleBlogLayout({
 children,
}: {
 children: ReactNode;
}) {
 const data = await getBlogsData("app/blog");

 const sortedData = (await Promise.all(data))
  .filter((item) => item.draft === false)
  .sort((a, b) => b.blogId - a.blogId);

 return (
  <div className='flex lg:flex-row flex-col gap-6'>
   <div className=''>{children}</div>

   <section className='px-2 w-full lg:min-w-[400px] paragraph-tertiary '>
    <div id='popular-posts'>
     <h3 className='title-tertiary py-4'>Recommeded Read</h3>
     <div className='grid grid-rows-4 gap-2'>
      {sortedData
       .sort(() => 0.5 - Math.random())
       .slice(0, 10)
       .map((blog, index) => (
        <Link
         href={`/blog/${blog.slug}`}
         key={index}
         className='shadow-md rounded-lg bg-dominant bg-opacity-5 p-6 space-y-1'>
         <span className='line-clamp-1 text-dominant/50'>
          {/* #{sortedData[index].tags[0]}  */}
          {sortedData[index].date}
         </span>
         <h3 className='line-clamp-2 font-bold paragraph-primary'>
          {sortedData[index].title}
         </h3>
         <p className='line-clamp-2 text-dominant text-opacity-50'>
          {sortedData[index].description}
         </p>
        </Link>
       ))}
     </div>
    </div>
   </section>
  </div>
 );
}
