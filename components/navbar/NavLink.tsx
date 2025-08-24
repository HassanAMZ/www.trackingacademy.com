"use client";

import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, prefetch = true }) => {
  return (
    <Link className={clsx(className, "hover:no-underline")} href={href} prefetch={prefetch}>
      {children}
    </Link>
  );
};

export default NavLink;
