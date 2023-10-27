"use client";
import { NavLinkProps } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
 let segment = useSelectedLayoutSegments();
 let active = href === `/${segment}`;

 return (
  <Link
   className={`text-lg md:text-base underline-offset-2 hover:dark:text-white hover:text-gray-800 hover:underline ${className}  ${
    active ? "underline font-bold" : "textOpacity80 font-semibold "
   }  `}
   href={href}>
   {children}
  </Link>
 );
};

export default NavLink;
