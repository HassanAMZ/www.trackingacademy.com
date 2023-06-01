"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface NavLinkProps {
 href: string;
 children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
 let segment = useSelectedLayoutSegments();
 let active = href === `/${segment}`;

 return (
  <Link
   className={`${
    active ? "underline opacity-100" : "opacity-80"
   } hover:opacity-100 text-md`}
   href={href}>
   {children}
  </Link>
 );
};

export default NavLink;
