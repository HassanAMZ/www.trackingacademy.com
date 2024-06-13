import Link from "next/link";
import Image from "next/image";
export default function Home() {
 return (
  <div className='flex flex-col items-center justify-center'>
   <div className='container-primary py-3'>
    <div className='shadow-lg border rounded-md p-8 grid place-content-center transition duration-300 ease-in-out w-full bg-accent'>
     <h2 className='title-secondary text-complementary '>
      TrackingAcademy.com
     </h2>
    </div>
   </div>
   <div className='py-6 text-center'>
    <h1 className='font-bold title-secondary'>
     DO YOU WANT TO FIX YOUR TRACKING?
    </h1>
    <p>Click one of the two boxes below</p>
   </div>
   <div className='container-primary'>
    <div className='p-12 text-center shadow-lg rounded-md border'>
     <h3 className='pb-6'>What best describes you?</h3>
     <div className='flex gap-5 sm:flex-row flex-col items-center justify-center'>
      <Link
       className='shadow-lg border rounded-md p-8 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
       href='/for-businesses'>
       <Image
        src='/static/icons/business-owner.png'
        width={1080}
        height={1080}
        className='w-32'
        alt='business-owner.png'
       />
       I am a Business Owner
      </Link>
      <Link
       className='shadow-lg border rounded-md p-8 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
       href='/for-agencies'>
       <Image
        src='/static/icons/agency-owner.png'
        width={1080}
        height={1080}
        className='w-32'
        alt='agency-owner.png'
       />
       I am a Agency Owner
      </Link>
      <Link
       className='shadow-lg border rounded-md p-8 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-accent hover:text-complementary hover:shadow-xl w-full'
       href='/for-freelancers'>
       <Image
        src='/static/icons/freelancer.png'
        width={1080}
        height={1080}
        className='w-32'
        alt='freelancer.png'
       />
       I am a Freelancer
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
