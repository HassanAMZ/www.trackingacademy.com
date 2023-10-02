"use client";
import clientDetails from "@/data/clients-details";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomLink from "@/components/mdx/CustomLink";
import { ImageSliderProps, ImageType } from "@/types/index";

const RecentClientSlider: React.FC = () => {
 const ImageSet: React.FC<{ images: ImageType[]; widthClass: string }> = ({
  images,
  widthClass,
 }) => {
  return (
   <>
    {images.map((img) => (
     <div key={img.clientId} className={`${widthClass} `}>
      <CustomLink href={`/portfolio/${img.clientId}`} className=''>
       <Image
        width={1920}
        height={540}
        className='rounded-md'
        src={img.link}
        alt={img.name}
       />
      </CustomLink>
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
      className='absolute left-0 top-1/2 transform -translate-y-1/2  text-xs backgroundOverlay !p-2 bg-opacity-80 dark:bg-opacity-80 ml-2'>
      <span aria-hidden='true'>&larr;</span>{" "}
      <p className='hidden sm:block'> Prev </p>
     </button>
    )}

    {/* Render based on viewport */}
    <div className='flex overflow-hidden sm:gap-4 gap-2'>
     {/* Mobile View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + mobileViewCount)}
      widthClass='w-1/2 sm:hidden backgroundOverlay !p-1'
     />
     {/* Desktop View */}
     <ImageSet
      images={images.slice(startIndex, startIndex + desktopViewCount)}
      widthClass='hidden sm:w-1/4 sm:block backgroundOverlay !p-2'
     />
    </div>

    {startIndex < images.length - viewCount && (
     <button
      onClick={nextSlide}
      className='flex flex-row absolute right-0 top-1/2 transform -translate-y-1/2 text-xs backgroundOverlay !p-2 bg-opacity-80 dark:bg-opacity-80 mr-2'>
      <p className='hidden sm:block'> Next </p>
      <span aria-hidden='true'>&rarr;</span>
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
    const image = client.images[0]; // Only get the first image
    return {
     clientId: clientId,
     link: image.link,
     name: image.name,
    };
   })
   .filter((image) => image !== null); // Filter out any null entries from the result
 };

 const clientObject = {
  images: extractImages(clientDetails),
 };

 return (
  <div className=' rounded-md'>
   <div className='flex flex-col gap-2 '>
    <ImageSlider images={clientObject.images} />
   </div>
  </div>
 );
};

export default RecentClientSlider;
