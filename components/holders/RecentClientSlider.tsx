"use client";
import ClientCard from "@/components/cards/ClientCard";
import clientDetails from "@/data/clients-details";
import { Client } from "@/types/index";
import React, { useState, useEffect } from "react";
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
  const mobileViewCount = 3;
  const desktopViewCount = 5;
  const [startIndex, setStartIndex] = useState<number>(0);
  const [viewCount, setViewCount] = useState<number>(3); // Default to mobileViewCount

  useEffect(() => {
   setViewCount(window.innerWidth <= 640 ? 3 : 5);
  }, []);
  const nextSlide = () => {
   if (startIndex < images.length - viewCount) {
    setStartIndex((prevIndex) => prevIndex + 1);
   }
  };

  const prevSlide = () => {
   if (startIndex > 0) {
    setStartIndex((prevIndex) => prevIndex - 1);
   }
  };

  return (
   <div className='relative '>
    {startIndex > 0 && (
     <button
      onClick={prevSlide}
      className='absolute left-0 top-1/2 transform -translate-y-1/2 rounded-md text-xs bg-gray-50 sm:text-sm p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 font-semibold ml-1'>
      <span aria-hidden='true'>&larr;</span> Prev
     </button>
    )}

    {/* Render based on viewport */}
    <div className='flex overflow-hidden gap-1'>
     {/* Mobile View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + mobileViewCount)}
      widthClass='w-1/3 sm:hidden'
     />
     {/* Desktop View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + desktopViewCount)}
      widthClass='hidden sm:w-1/4 sm:block border-2 rounded-lg border-gray-900'
     />
    </div>

    {startIndex < images.length - viewCount && (
     <button
      onClick={nextSlide}
      className='absolute right-0 top-1/2 transform -translate-y-1/2 rounded-md text-xs sm:text-sm bg-gray-50 p-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 gap-1 font-semibold mr-1'>
      Next <span aria-hidden='true'>&rarr;</span>
     </button>
    )}
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
