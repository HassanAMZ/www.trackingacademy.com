import Image from "next/image";
import React from "react";
import { SubHeader, TitleHeader } from "@/components/typography/Heading";
import Link from "next/link";
import lightenDarkenColor from "@/components/utils/lightenDarkenColor";

interface HeroProps {
 welcomeText?: string;
 clientImageBoolean?: boolean;
 linksBoolean?: boolean;
 heading?: string;
 subHeading1?: string;
 subHeading2?: string;
 primaryLink: { src: string; text: string };
 secondaryLink?: { src: string; text: string };
 imagesData?: { src: string; alt: string }[];
 backgroundImage?: string;
 primaryColor: string;
 colorPercentage: {
  light: { value: number; opacity?: number };
  dark: { value: number; opacity?: number };
 };
}

const HeroComponent: React.FC<HeroProps> = ({
 welcomeText,
 clientImageBoolean,
 linksBoolean,
 heading,
 colorPercentage,
 subHeading1,
 subHeading2,
 primaryLink,
 secondaryLink,
 imagesData,
 backgroundImage,
 primaryColor,
}) => {
 // Validations
 if (
  !primaryLink?.src ||
  !primaryLink?.text ||
  !primaryColor ||
  !backgroundImage
 ) {
  console.error("Missing mandatory props.");
  // Optionally, you could render an error message or a fallback UI here instead of `null`
  return null;
 }

 if (clientImageBoolean && (!imagesData || imagesData.length === 0)) {
  console.warn(
   "Image data is empty or not provided while clientImageBoolean is true."
  );
  // Handle accordingly: maybe render a placeholder, or fallback UI, or set clientImageBoolean to false
 }

 let color = lightenDarkenColor(
  primaryColor,
  colorPercentage?.light.value || 10,
  colorPercentage?.dark.value || 90,
  colorPercentage?.light.opacity || 1,
  colorPercentage?.dark.opacity || 0.5
 );

 return (
  <section className='relative rounded-md flex flex-col py-4 items-center justify-center'>
   <div
    className='rounded-md absolute top-0 bottom-0 left-0 opacity-70 right-0 bg-cover z-0'
    style={{
     backgroundColor: color.darker,
     backgroundPosition: "65% 10%",
     backgroundImage: `url('${backgroundImage}')`,
    }}></div>

   <div className='relative text-white z-10 flex flex-col justify-center items-start px-5 py-20 md:p-14'>
    <aside className='space-y-4 pb-6'>
     {clientImageBoolean && imagesData && (
      <div className='flex flex-wrap items-center justify-start opacity-80'>
       {imagesData.map((image, index) => (
        <Image
         src={image.src}
         alt={image.alt}
         width={1920}
         key={index} // Consider using another key
         height={1080}
         className='rounded-full w-8 h-8'
        />
       ))}
      </div>
     )}

     <SubHeader
      className='text-xl font-semibold hidden md:block max-w-md lg:max-w-lg'
      style={{ color: color.lighter }}>
      {welcomeText}
     </SubHeader>

     <TitleHeader className='py-2 md:max-w-lg'>{heading}</TitleHeader>

     <div className='space-y-1 font-semibold text-2xl md:w-[70%]'>
      <h3>
       {subHeading1}
       <span className='opacity-75'>{subHeading2}</span>
      </h3>
     </div>
    </aside>

    {linksBoolean && (
     <div className='flex gap-2'>
      <Link
       href={primaryLink.src}
       className='font-semibold rounded-md py-4 px-6'
       style={{ backgroundColor: color.lighter }}>
       {primaryLink.text}
      </Link>

      {secondaryLink && (
       <Link
        href={secondaryLink.src}
        className='font-medium border-2 hidden md:block rounded-md py-4 px-6'
        style={{ borderColor: color.lighter }}>
        {secondaryLink.text}
       </Link>
      )}
     </div>
    )}
   </div>
  </section>
 );
};

export default HeroComponent;
