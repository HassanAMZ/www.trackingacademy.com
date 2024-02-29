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
  <div className='lg:grid-cols-10 grid '>
   <div className='lg:col-span-7'>{children}</div>

   <section className='px-2 lg:col-span-3 hidden lg:block '>
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
         className='grid grid-cols-3 gap-2 items-center justify-center shadow-md border rounded-lg'>
         <div className='col-span-2 px-2'>
          <h3 className='paragraph-secondary line-clamp-2 col-span-2 font-semibold text-left'>
           {sortedData[index].title}
          </h3>
         </div>
         <Image
          src={sortedData[index].openGraph.images[0]}
          alt={sortedData[index].title}
          width={1920}
          height={1080}
          className='rounded-lg'
         />
        </Link>
       ))}
     </div>
    </div>
   </section>
  </div>
 );
}
