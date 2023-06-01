"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ href, children }) {
    let segment = useSelectedLayoutSegments();
    let active = href === `/${segment}`;
    return (
        <Link
            className={`${active ? "underline text-gray-100" : "text-gray-300"
                } hover:text-gray-100 text-md`}
            href={href}>
            {children}
        </Link>
    );
}
