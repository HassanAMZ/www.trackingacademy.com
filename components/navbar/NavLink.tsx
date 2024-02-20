"use client";

import { NavLinkProps } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
 let segments = useSelectedLayoutSegments();

 let active = href === `/${segments}`;
 return (
  <Link
   className={`paragraph-primary hover:underline hover:underline-offset-2 hover:text-primary  ${
    className || ""
   }  ${active ? " font-bold text-primary" : "textOpacity80 font-semibold "}  `}
   href={href}>
   {children}
  </Link>
 );
};

export default NavLink;
