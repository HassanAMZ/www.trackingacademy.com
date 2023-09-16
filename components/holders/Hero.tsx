import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Hero() {
 return (
  <div className='rounded-md text-left '>
   <ContainerLayout>
    <div className='py-5 sm:py-10'>
     <div className='flex justify-left py-2'>
      <div className='relative rounded-md text-sm sm:text-md p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1'>
       Welcome to Hassan's Web Analytics Expertise!&nbsp;
       <Link href='/about-us' className='font-semibold text-purple'>
        <span className='absolute inset-0' aria-hidden='true'></span>
        Learn More <span aria-hidden='true'>&rarr;</span>
       </Link>
      </div>
     </div>
     <div className='flex gap-4 flex-col'>
      <h2 className='text-5xl font-bold'>
       Elevate your business with accurate data.
      </h2>
      <p className='text-xl font-semibold'>
       <span className='opacity-80'>
        Improving Marketing Strategies for Small Businesses through Advanced
        Tracking Implementation.
       </span>
      </p>
      <div className='flex pt-2 items-center justify-left gap-x-4'>
       <Link
        href='/portfolio'
        className='rounded-md px-3.5 py-2.5 text-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple  bg-purple-50 border-2'>
        Show me the portfolio
       </Link>
       <Link
        href='/contact'
        className='rounded-md px-3.5 py-2.5 text-md font-semibold '>
        Get In Touch <span aria-hidden='true'> &nbsp;→ </span>
       </Link>
      </div>
     </div>
    </div>
   </ContainerLayout>
  </div>
 );
}
