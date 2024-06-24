import React from "react";
import BookACall from "./BookACall";
import Image from "next/image";

export default function Hero() {
 const images = {
  group: {
   list: [
    {
     src: "/images/clients/001_1.jfif",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
    { src: "/images/clients/007.jfif", alt: "Client" },
    {
     src: "/images/clients/008.jfif",
     alt: "Pjipipp Herglotz - Kiss Agency",
    },
    {
     src: "/images/clients/001.jpg",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
    {
     src: "/images/clients/001.jpg",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
   ],
  },
  background: {
   desktop: "/images/hero/hero-image-md.png",
   mobile: "/images/hero/hero-image-sm.png",
  },
 };

 return (
  <section className='py-4 container-primary flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 justify-center items-start '>
   <div className='flex flex-col gap-2'>
    <h2 className='text-3xl font-bold '>
     Achieve 95% Conversion Tracking Accuracy in Just 7 Days – Guaranteed!
    </h2>
    <p>
     Our proven system ensures you have the most accurate conversion data, with
     minimal effort and no disruption to your current setup.
    </p>
    <div
     className='relative bg-dominant/10 border p-4 lg:p-6 rounded-lg w-full max-w-lg'
     id='testimonial'>
     <div className='absolute -top-7 right-0 flex space-x-1 p-4'>
      ⭐⭐⭐⭐⭐
     </div>
     <p className='italic font-semibold pt-2'>
      “I don't understand how you can still be profitable without this Cloud
      Tracking Solution.”
     </p>
     <p className=' pt-2 text-xs '>
      Greg Fisher, <strong>CMO at Atlantic Studio </strong>
     </p>
     <div className='absolute -bottom-6 right-0 flex space-x-4 mb-2 mr-2'>
      <div className='bg-green-500 text-complementary font-semibold py-1 px-2 rounded-lg transform rotate-3'>
       12.7 ROAS
      </div>
      <div className='bg-green-500 text-complementary font-semibold py-1 px-2 rounded-lg transform -rotate-3'>
       +64% Conversions
      </div>
     </div>
    </div>
    <div className='py-4 flex flex-col gap-2 text-sm'>
     <p>✔ Get your tracking system set up and optimized within 7 days.</p>
     <p>✔ Achieve 95% accuracy, improving your decision-making and ROI.</p>
     <p>✔ User-friendly interface requiring minimal technical knowledge.</p>
    </div>
    <div className='flex gap-x-4 w-full items-center justify-start'>
     <BookACall buttonText='Schedule A Meeting' />
    </div>
    <div className='flex items-center gap-2 pt-2'>
     <div className='relative h-6 w-6'>
      {images.group.list.map((image, index) => (
       <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        key={index}
        className={`rounded-full absolute opacity-90
          ${index === 0 ? "left-0 top-0 z-1" : ""} 
          ${index === 1 ? "left-4 top-0 z-2" : ""} 
          ${index === 2 ? "left-8 top-0 z-3" : ""}
        `}
       />
      ))}
     </div>
     <p className='pl-8 text-sm'>
      1034 websites configured wtih 95% accurate tracking
     </p>
    </div>
   </div>

   <div className='bg-complementary border rounded-lg overflow-hidden w-full max-w-3xl'>
    <div className='grid grid-cols-3 bg-dominant/10 text-dominant font-semibold lg:  text-sm'>
     <div className='px-4 py-3 flex items-center'>
      <p>Amount Spent</p>
      <div className='pl-2 hidden lg:block'>
       <Image
        src={"/static/icons/angle-down.svg"}
        width={20}
        height={20}
        className='w-3'
        alt='arrow'
       />
      </div>
     </div>
     <div className='px-4 py-3 flex items-center'>
      <p>ROAS Before</p>
      <div className='pl-2 hidden lg:block'>
       <Image
        src={"/static/icons/angle-down.svg"}
        width={20}
        height={20}
        className='w-3'
        alt='arrow'
       />
      </div>
     </div>
     <div className='px-4 py-3 flex items-center'>
      <p>ROAS After</p>
      <div className='pl-2 hidden lg:block'>
       <Image
        src={"/static/icons/angle-down.svg"}
        width={20}
        height={20}
        className='w-3'
        alt='arrow'
       />
      </div>
     </div>
    </div>

    <div className='divide-y divide-gray-200'>
     <div className='hidden lg:grid lg:grid-cols-3'>
      <div className='px-4 py-3'>$40,802</div>
      <div className='px-4 py-3'>1.59</div>
      <div className='px-4 py-3'>4.5</div>
     </div>
     <div className='grid grid-cols-3'>
      <div className='px-4 py-3'>$31,668</div>
      <div className='px-4 py-3'>1.75</div>
      <div className='px-4 py-3'>3.7</div>
     </div>
     <div className='hidden lg:grid lg:grid-cols-3'>
      <div className='px-4 py-3'>$27,277</div>
      <div className='px-4 py-3'>1.98</div>
      <div className='px-4 py-3'>3.2</div>
     </div>
     <div className='hidden lg:grid lg:grid-cols-3'>
      <div className='px-4 py-3'>$28,751</div>
      <div className='px-4 py-3'>1.84</div>
      <div className='px-4 py-3'>2.7</div>
     </div>
     <div className='hidden lg:grid lg:grid-cols-3'>
      <div className='px-4 py-3'>$31,756</div>
      <div className='px-4 py-3'>1.93</div>
      <div className='px-4 py-3'>2.7</div>
     </div>
     <div className='grid grid-cols-3'>
      <div className='px-4 py-3'>$30,636</div>
      <div className='px-4 py-3'>2.12</div>
      <div className='px-4 py-3'>3.1</div>
     </div>
    </div>
    <div className='grid grid-cols-3'>
     <div className='px-4 py-4 bg-blue-50 text-blue-600 font-bold '>
      $318,375
     </div>
     <div className='px-4 py-4 bg-red-50 text-red-600 font-bold '>1.87</div>
     <div className='px-4 py-4 bg-green-50 text-green-600 font-bold '>5.0</div>
    </div>
   </div>
  </section>
 );
}
