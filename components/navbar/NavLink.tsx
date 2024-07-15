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
      className={` ${className || ""} ${
        active ? "font-bold text-accent" : ""
      } hover:text-accent hover:no-underline`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
