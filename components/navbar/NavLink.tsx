"use client";

import { NavLinkProps } from "@/types/index";
import clsx from "clsx";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link className={clsx(className, "hover:no-underline")} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
