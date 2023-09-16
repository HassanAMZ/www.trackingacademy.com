"use client";
import ClientCard from "@/components/cards/ClientCard";
import clientDetails from "@/data/clients-details";
import { Client } from "@/types/index";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageProps, ImageSliderProps, ImageType } from "@/types/index";

const RecentClientSlider: React.FC = () => {
 const ImageSet: React.FC<{ images: ImageType[]; widthClass: string }> = ({
  images,
  widthClass,
 }) => {
  return (
   <>
    {images.map((img, index) => (
     <div key={index} className={widthClass}>
      <Link href={`/portfolio/${img.clientId}`}>
       <Image
        width={1920}
        height={1080}
        className='rounded-md'
        src={img.link}
        alt={img.name}
       />
      </Link>
     </div>
    ))}
   </>
  );
 };

 const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const mobileViewCount = 3;
  const desktopViewCount = 5;

  const nextSlide = (viewCount: number) => {
   if (startIndex < images.length - viewCount) {
    setStartIndex((prevIndex) => prevIndex + 1);
   }
  };

  return (
   <div className='relative'>
    {/* Render based on viewport */}
    <div className='flex overflow-hidden'>
     {/* Mobile View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + mobileViewCount)}
      widthClass='w-1/3 sm:hidden'
     />
     {/* Desktop View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + desktopViewCount)}
      widthClass='hidden sm:w-1/5 sm:block'
     />
    </div>

    <button
     onClick={() =>
      nextSlide(window.innerWidth <= 640 ? mobileViewCount : desktopViewCount)
     }
     className='absolute right-0 top-1/2 transform -translate-y-1/2 rounded-md text-xs sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 font-semibold'>
     Next <span aria-hidden='true'>&rarr;</span>
    </button>
   </div>
  );
 };
 // clientDetails is your provided JSON structure

 const extractImages = (data: typeof clientDetails): ImageType[] => {
  return data
   .map((client) => {
    const clientId = client.id;
    return client.images.map((image) => ({
     clientId: clientId, // using client.id from the outer map
     link: image.link,
     name: image.name,
    }));
   })
   .flat();
 };

 const clientObject = {
  images: extractImages(clientDetails),
 };

 return (
  <div className=' rounded-md'>
   <div className='py-3 flex flex-col gap-2'>
    <ImageSlider images={clientObject.images} />
   </div>
  </div>
 );
};

export default RecentClientSlider;
