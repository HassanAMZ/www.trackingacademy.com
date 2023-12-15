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
      className='font-bold border-2 hidden md:block rounded-md py-4 px-6 dark:text-white text-gray-800'
      style={{ borderColor: baseColors.tools.primary }}>
      Read the Blog
     </Link>
    </div>
   </div>

   {/* <Paragraphxs className='text-gray-500 '>
     Got questions? Our step-by-step guide and UTM builder are here to help you
     sail smoothly through the seas of campaign tracking!
    </Paragraphxs> */}

   {/* <div className='w-full'>
     <YoutubeEmbed embedId='RmB2mSfkdEo' />
    </div> */}
  </div>
 );
}
