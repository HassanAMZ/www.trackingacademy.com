// components/Breadcrumbs.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomLink from "../mdx/CustomLink";

const BreadCrumbs: React.FC = () => {
 const pathname = usePathname();
 if (pathname === null) {
  return null; // Return null or a default component
 }

 const formatSegment = (segment: string) => {
  return segment
   .replace(/-/g, " ") // Replace hyphens with spaces
   .split(" ")
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" "); // Capitalize the first letter of each word
 };

 const pathSegments = pathname.split("/").filter((path) => path.length > 0);

 return (
  <nav
   aria-label='breadcrumbs'
   className='py-2 text-gray-600 dark:text-gray-300'>
   <ol className='flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4'>
    <li>
     <CustomLink href='/' className='dark:text-gray-300'>
      Home
     </CustomLink>
    </li>
    {pathSegments.map((segment, index) => {
     const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
     const isLast = index === pathSegments.length - 1;
     return (
      <li key={path} className='flex items-center'>
       {!isLast && (
        <span className='mx-2 text-gray-500 dark:text-gray-400'>/</span>
       )}
       {isLast ? (
        <React.Fragment>
         <span className='mx-2 text-gray-500 dark:text-gray-400'>/</span>
         <span className='text-gray-500 dark:text-gray-400'>
          {formatSegment(segment)}
         </span>
        </React.Fragment>
       ) : (
        <CustomLink href={path} className='dark:text-gray-300'>
         {formatSegment(segment)}
        </CustomLink>
       )}
      </li>
     );
    })}
   </ol>
  </nav>
 );
};

export default BreadCrumbs;
