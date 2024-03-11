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
   <div className='grid grid-cols-1 lg:grid-cols-10 gap-2 pt-2'>
    <section className='lg:col-span-7 flex flex-col w-full h-full'>
     <Link
      className='p-2 shadow-md rounded-lg text-dominant flex flex-col gap-4'
      id='main-blog'
      href={`/blog/${sortedData[0].slug}`}>
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
       <span className='paragraph-secondary border border-dashed border-accent rounded-full px-2'>
        {sortedData[0].date}
       </span>
      </div>
     </Link>
     <div className='grid sm:grid-cols-3 gap-2 lg:col-span-3 w-full h-full'>
      {sortedData.slice(1, 4).map((blog, index) => (
       <Link
        href={`/blog/${blog.slug}`}
        key={index}
        className='p-2 shadow-md rounded-lg text-dominant w-full flex flex-col gap-2 items-start justify-center'>
        <Image
         src={sortedData[index + 1].openGraph.images[0]}
         alt={sortedData[index + 1].title}
         width={1920}
         height={1080}
         className='rounded-lg'
        />
        <h3 className='paragraph-primary font-semibold line-clamp-2'>
         {sortedData[index + 1].title}
        </h3>
        <p className='paragraph-primary line-clamp-2 hidden'>
         {sortedData[index + 1].description}
        </p>
        <div className='flex flex-col justify-between items-start'>
         <span className='paragraph-secondary pb-2'>By ShahzadaAliHassan</span>
         <span className='paragraph-secondary border border-dashed border-accent rounded-full px-2'>
          {sortedData[index + 1].date}
         </span>
        </div>
       </Link>
      ))}
     </div>
    </section>
    <section className='grid sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-2 lg:col-span-3'>
     {sortedData.slice(4, 7).map((blog, index) => (
      <Link
       href={`/blog/${blog.slug}`}
       key={index}
       className='p-2 shadow-md rounded-lg text-dominant flex flex-col gap-2'>
       <Image
        src={sortedData[index + 4].openGraph.images[0]}
        alt={sortedData[index + 4].title}
        width={1920}
        height={1080}
        className='rounded-lg'
       />
       <h3 className='title-tertiary font-semibold line-clamp-2'>
        {sortedData[index + 4].title}
       </h3>
       <p className='paragraph-primary line-clamp-2 hidden'>
        {sortedData[index + 4].description}
       </p>
       <div className='flex justify-between items-start'>
        <span className='paragraph-secondary hidden'>By ShahzadaAliHassan</span>
        <span className='paragraph-secondary border border-dashed border-accent rounded-full px-2'>
         {sortedData[index + 4].date}
        </span>
       </div>
      </Link>
     ))}
    </section>
   </div>
   <div className='grid lg:grid-cols-3 gap-2 py-2'>
    <div className='lg:col-span-2'>
     <BlogPagination sortedData={sortedData.slice(7)} />
    </div>
    <section className='p-2 w-full h-full'>
     <div id='popular-posts'>
      <h3 className='title-tertiary py-2'>Recommended Posts</h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-2'>
       {sortedData
        .sort(() => 0.5 - Math.random())
        .slice(0, 10)
        .map((blog, index) => (
         <Link
          href={`/blog/${blog.slug}`}
          key={index}
          className='grid grid-cols-3 gap-2 items-center justify-center shadow-md rounded-lg text-dominant p-2'>
          <Image
           src={sortedData[index].openGraph.images[0]}
           alt={sortedData[index].title}
           width={1920}
           height={1080}
           className='rounded-lg'
          />
          <h3 className='paragraph-primary font-medium line-clamp-2 col-span-2'>
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
         className='button bg-accent text-complementary paragraph-secondary rounded-lg p-1'>
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
