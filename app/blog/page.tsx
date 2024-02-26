import React from "react";
import getBlogsData from "utils/getBlogsData";
import { GTMBlogListViewEvent } from "@/components/analytics/GTMEvents";
import Image from "next/image";
import Link from "next/link";
import BlogPagination from "@/components/blog/BlogPagination";

export default async function Page() {
 const data = await getBlogsData("app/blog");

 const sortedData = (await Promise.all(data))
  .filter((item) => item.draft === false)
  .sort((a, b) => b.blogId - a.blogId);

 const allTags = sortedData.slice(0, 5).flatMap((blog) => blog.tags);
 const uniqueTags = Array.from(new Set(allTags)).slice(0, 12);

 return (
  <div className='flex flex-col gap-2'>
   <GTMBlogListViewEvent blogList={sortedData} />
   <div className='grid lg:grid-cols-2 gap-2 pt-2'>
    <Link
     className='p-2 bg-dark-secondary rounded-md text-light-primary flex flex-col gap-4'
     id='main-blog'
     href={`blog/${sortedData[0].slug}`}>
     <Image
      src={sortedData[0].openGraph.images[0]}
      alt='Imtiaz Ahmed'
      width={1920}
      height={1080}
      className='rounded-lg'
     />
     <h3 className='title-tertiary line-clamp-2'>{sortedData[0].title}</h3>
     <p className='paragraph-primary line-clamp-2'>
      {sortedData[0].description}
     </p>
     <div className='flex justify-between items-center'>
      <span className='paragraph-secondary'>By ShahzadaAliHassan</span>
      <span className='paragraph-secondary border border-dashed rounded-full px-2'>
       {sortedData[0].date}
      </span>
     </div>
    </Link>
    <section className='grid grid-rows-3 gap-2'>
     {sortedData.slice(1, 4).map((blog, index) => (
      <Link
       href={`blog/${blog.slug}`}
       key={index}
       className='grid grid-cols-3 gap-2 p-2 bg-dark-secondary rounded-md text-light-primary '>
       <div className='col-span-2 flex flex-col gap-2'>
        <h3 className='paragraph-primary font-semibold line-clamp-2'>
         {sortedData[index + 1].title}
        </h3>
        <p className='paragraph-primary line-clamp-2'>
         {sortedData[index + 1].description}
        </p>
        <div className='flex justify-between items-center'>
         <span className='paragraph-secondary'>By ShahzadaAliHassan</span>
         <span className='paragraph-secondary border border-dashed rounded-full px-2'>
          {sortedData[0].date}
         </span>
        </div>
       </div>
       <Image
        src={sortedData[index + 1].openGraph.images[0]}
        alt={sortedData[index + 1].title}
        width={1920}
        height={1080}
        className='rounded-lg'
       />
      </Link>
     ))}
    </section>
   </div>
   <div className='grid lg:grid-cols-3 gap-2 py-2'>
    <div className='lg:col-span-2'>
     <BlogPagination sortedData={sortedData.slice(4)} />
    </div>
    <section className='p-2 w-full h-full'>
     <div id='popular-posts'>
      <h3 className='title-tertiary py-2'>Recommended Posts</h3>
      <div className='grid grid-rows-4 gap-2'>
       {sortedData
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .map((blog, index) => (
         <Link
          href={`blog/${blog.slug}`}
          key={index}
          className='grid grid-cols-3 gap-2 items-center justify-center bg-dark-secondary rounded-md text-light-primary p-2'>
          <Image
           src={sortedData[index].openGraph.images[0]}
           alt={sortedData[index].title}
           width={1920}
           height={1080}
           className='rounded-lg'
          />
          <h3 className='paragraph-secondary font-medium line-clamp-2 col-span-2'>
           {sortedData[index].title}
          </h3>
         </Link>
        ))}
      </div>
     </div>

     <div id='category-list' className='py-4'>
      <h3 className='title-tertiary line-clamp-2 py-4'>Categories</h3>
      <div className='flex flex-wrap gap-2'>
       {uniqueTags.map((tag, index) => (
        <Link
         key={index}
         href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
         className='button bg-secondary paragraph-secondary rounded-lg p-1'>
         {tag}
        </Link>
       ))}
      </div>
     </div>
    </section>
   </div>
  </div>
 );
}
