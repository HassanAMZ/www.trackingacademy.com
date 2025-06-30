"use client";

import Link from "next/link";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link className={clsx(className, "hover:no-underline")} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
