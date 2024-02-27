import MobileNav from "@/components/navbar/MobileNav";
import DesktopNav from "@/components/blog/DesktopNav";
import BlogSearch from "./BlogSearch";
import getBlogsData from "@/utils/getBlogsData";
import { useState } from "react";

export default async function BlogNavbar() {
 const data = await getBlogsData("app/blog");

 const sortedData = (await Promise.all(data))
  .filter((item) => item.draft === false)
  .sort((a, b) => {
   const dateA = new Date(a.date);
   const dateB = new Date(b.date);
   return dateB.getTime() - dateA.getTime();
  });
 return (
  <header className='flex items-center justify-between w-full py-4'>
   <DesktopNav data={sortedData} />
  </header>
 );
}
