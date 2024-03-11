import React from "react";
import { Heading4xl, Paragraphmd } from "@/components/typography/Heading";
import Link from "next/link";

export default function ToolsHeroSection() {
 return (
  <div className='py-24 bg-accent shadow-md text-complementary flex flex-col text-center justify-center items-center space-y-6 rounded-lg'>
   <div className='space-y-6'>
    <h2 className='title-secondary'>UTM Builder Tools</h2>
    <p className='px-6'>
     Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom,
     all at one place
    </p>

    <div className='flex gap-x-4 justify-center'>
     <Link
      href='/tools/utm-builder#utm-builder'
      className='font-bold py-4 px-6 link-secondary'>
      Start Creating UTMs
     </Link>
     <Link
      href='/blog/ga4/understanding-utm-builder-tool'
      className='font-bold border-2 hidden lg:block rounded-md py-4 px-6 link-primary'>
      Read the Blog
     </Link>
    </div>
   </div>
  </div>
 );
}
