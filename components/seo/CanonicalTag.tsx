"use client";

import { useRouter, usePathname } from "next/navigation";

const CanonicalTag: React.FC = () => {
 const pathname = usePathname();
 const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

 return <link rel='canonical' href={canonicalUrl} />;
};

export default CanonicalTag;
