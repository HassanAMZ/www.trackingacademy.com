import React, { useState, useEffect } from "react";
import getTools from "utils/getTools";
import Link from "next/link";
import CustomLink from "@/components/mdx/CustomLink";
import baseColors from "@/data/base-colors";
import ToolsHeroSection from "@/components/tools/ToolsHeroSection";

export default async function Page() {
 const toolNames = await getTools();

 return (
  <div className='flex flex-col gap-2'>
   <ToolsHeroSection />
   {/* {toolNames.map((tool, index) => (
    <Link
     href={`/tools/${tool}`}
     className='font-bold rounded-md py-4 px-6 text-white '
     style={{ backgroundColor: baseColors.tools.primary }}>
     {tool}
    </Link>
   ))} */}
  </div>
 );
}
