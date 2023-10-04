import Image from "next/image";
import React from "react";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import lightenDarkenColor from "@/components/utils/lightenDarkenColor";
interface HeroProps {
 welcomeText: string;
 clientImageBoolean: boolean;
 linksBoolean: boolean;
 heading: string;
 subHeading1: string;
 subHeading2: string;
 primaryLink: string;
 secondaryLink: string;
 imagesData: { src: string; alt: string }[];
 backgroundImage: string;
 primaryColor: string;
}

const HeroComponent: React.FC<HeroProps> = ({
 welcomeText,
 clientImageBoolean,
 linksBoolean,
 heading,
 subHeading1,
 subHeading2,
 primaryLink,
 secondaryLink,
 primaryColor,

 imagesData,
 backgroundImage,
}) => {
 let color = lightenDarkenColor(primaryColor, 10, 90);
 console.log(color);
 return (
  <React.Fragment>
   <div className='relative rounded-md flex flex-col py-4 items-center justify-center'>
    <div
     className='rounded-md absolute top-0 bottom-0 left-0 opacity-50 right-0 bg-cover z-0 '
     style={{
      backgroundColor: color.darker,
      backgroundPosition: "58% 10%",
      backgroundImage: `url('${backgroundImage}')`,
     }}></div>

    <div className='relative text-white z-10 flex flex-col justify-center items-start  px-5 py-20 sm:p-14 '>
     <div className='space-y-4 pb-6'>
      {clientImageBoolean && (
       <div className='flex flex-wrap items-center justify-start opacity-80 '>
        {imagesData.map((image, index) => (
         <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          key={index}
          height={1080}
          className='rounded-full w-8 h-8 '
         />
        ))}
       </div>
      )}

      <h5 className='text-2xl font-semibold ' style={{ color: color.lighter }}>
       {welcomeText}
      </h5>
      <h2 className='text-6xl sm:text-7xl font-bold leading-none py-2 sm:max-w-md'>
       {heading}
      </h2>
      <div className='space-y-1 font-semibold text-2xl sm:w-[70%]'>
       <h3 className=''>
        {subHeading1}
        <span className='opacity-75'>{subHeading2}</span>
       </h3>
      </div>
     </div>
     {linksBoolean && (
      <div className='flex gap-2'>
       <Link
        className='font-semibold  rounded-md py-4 px-6'
        style={{ backgroundColor: color.lighter }}
        href={primaryLink}>
        Start Here
       </Link>
       <Link
        className='font-semibold border-4 hidden sm:block rounded-md py-4 px-6'
        style={{ borderColor: color.lighter }}
        href={secondaryLink}>
        Membership
       </Link>
      </div>
     )}
    </div>
   </div>
  </React.Fragment>
 );
};

export default HeroComponent;
