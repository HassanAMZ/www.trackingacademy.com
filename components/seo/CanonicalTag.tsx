"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CanonicalTag = () => {
  const pathname = usePathname();
  const [canonicalUrl, setCanonicalUrl] = useState(
    `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`,
  );

  useEffect(() => {
    setCanonicalUrl(`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`);
  }, [pathname]);

  return <link rel="canonical" href={canonicalUrl} />;
};

export default CanonicalTag;
