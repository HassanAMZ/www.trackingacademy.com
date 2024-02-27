import baseColors from "@/data/base-colors";
import React from "react";
import { Heading4xl, Paragraphmd } from "@/components/typography/Heading";
import Link from "next/link";

export default function ToolsHeroSection() {
 return (
  <div className='py-12 backgroundOverlay flex flex-col text-center justify-center items-center space-y-6'>
   <div className='pt-12 pb-8 space-y-4'>
    <Heading4xl className=''>Master UTM Parameters in Minutes!</Heading4xl>
    <Paragraphmd className=' max-w-3xl px-2'>
     Wave goodbye to marketing mysteries! Discover the secrets of tracking your
     digital campaigns with precision. Let's decode UTM parameters together.
    </Paragraphmd>

    <div className='flex gap-x-4 justify-center'>
     <Link
      href='/tools/utm-builder#utm-builder'
      className='font-bold rounded-md py-4 px-6 text-white '
      style={{ backgroundColor: baseColors.tools.primary }}>
      Start Creating UTMs
     </Link>
     <Link
      href='/blog/ga4/understanding-utm-builder-tool'
      className='font-bold border-2 hidden lg:block rounded-md py-4 px-6 text-dominant '
      style={{ borderColor: baseColors.tools.primary }}>
      Read the Blog
     </Link>
    </div>
   </div>
  </div>
 );
}
