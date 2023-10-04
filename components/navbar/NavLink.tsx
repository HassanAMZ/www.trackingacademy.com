"use client";
import { NavLinkProps } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
 let segment = useSelectedLayoutSegments();
 let active = href === `/${segment}`;

 return (
  <Link
   className={`text-xl  ${
    active ? "underline opacity-100 font-bold" : "opacity-80 font-semibold "
   } hover:opacity-100`}
   href={href}>
   {children}
  </Link>
 );
};

export default NavLink;
