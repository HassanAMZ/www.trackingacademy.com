"use client";

import clsx from "clsx";
import Link from "next/link";

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
