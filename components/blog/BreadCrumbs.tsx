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
  <nav aria-label='breadcrumbs' className='py-2 text-dominant'>
   <ol className='flex flex-wrap lg:flex-nowrap space-x-2'>
    <li>
     <CustomLink href='/' className='text-dominant'>
      Home
     </CustomLink>
    </li>
    {pathSegments.map((segment, index) => {
     const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
     const isLast = index === pathSegments.length - 1;
     return (
      <li key={path} className='flex items-center gap-4 text-sm'>
       {!isLast && <span className='text-dominant'>/</span>}
       {isLast ? (
        <React.Fragment>
         <span className='text-dominant'>/</span>
         <span className='text-dominant'>{formatSegment(segment)}</span>
        </React.Fragment>
       ) : (
        <CustomLink href={path} className='text-dominant'>
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
