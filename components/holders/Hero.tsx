import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CustomLink from "@/components/mdx/CustomLink";

export default function Hero() {
 return (
  <ContainerLayout className=' backgroundOverlay'>
   <div className='p-4 sm:py-12 text-left'>
    <div className='flex justify-left  pt-5 pb-3'>
     <div className='relative flex flex-row rounded-md text-xs font-normal p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 hover:dark:ring-gray-100/20 shadow-md '>
      <span>Check Learning Resourses&nbsp;</span>
      <CustomLink
       href='https://trackingacademy.com/'
       className='!no-underline dark:text-gray-100 text-gray-800 font-semibold'>
       <span className='absolute inset-0 ' aria-hidden='true'></span>
       Explore Courses <span aria-hidden='true'>&rarr;</span>
      </CustomLink>
     </div>
    </div>

    <div className='flex sm:gap-4 gap-2 flex-col'>
     <div className='text-5xl leading-none font-semibold tracking-tighter'>
      Grow your business with{" "}
      <span className='animate-text  capitalize '>Accurate data</span>
     </div>
     <p className='leading-normal font-medium'>
      Improving Marketing Strategies for Small Businesses through Advanced
      Tracking Implementation.
     </p>
     <div className='flex pt-2 items-center justify-left gap-x-4'>
      <Link href='/portfolio' className='primaryButton'>
       Show me the Portfolio
       <span aria-hidden='true'> &nbsp;→ </span>
      </Link>
      {/* <Link
       href='/contact'
       className='rounded-md px-3.5 py-2.5 text-base font-medium '>
       Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
      </Link> */}
     </div>
    </div>
   </div>
  </ContainerLayout>
 );
}
