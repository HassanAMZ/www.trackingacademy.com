"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import BlogLayout from "@/components/layouts/BlogLayout";

function GiscusComments() {
 const pathname = usePathname();

 useEffect(() => {
  const script = document.createElement("script");
  script.src = process.env.NEXT_PUBLIC_GISCUS_SRC || "";
  script.setAttribute("data-repo", process.env.NEXT_PUBLIC_GISCUS_REPO || "");
  script.setAttribute(
   "data-repo-id",
   process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""
  );
  script.setAttribute(
   "data-category",
   process.env.NEXT_PUBLIC_GISCUS_CATEGORY || ""
  );
  script.setAttribute(
   "data-category-id",
   process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""
  );
  script.setAttribute("data-mapping", pathname);
  script.setAttribute(
   "data-strict",
   process.env.NEXT_PUBLIC_GISCUS_STRICT || ""
  );
  script.setAttribute(
   "data-reactions-enabled",
   process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED || ""
  );
  script.setAttribute(
   "data-emit-metadata",
   process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA || ""
  );
  script.setAttribute(
   "data-input-position",
   process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION || ""
  );
  script.setAttribute("data-theme", process.env.NEXT_PUBLIC_GISCUS_THEME || "");
  script.setAttribute("data-lang", process.env.NEXT_PUBLIC_GISCUS_LANG || "");
  script.setAttribute(
   "data-loading",
   process.env.NEXT_PUBLIC_GISCUS_LOADING || ""
  );

  const commentSection = document.getElementById("comment-section");
  if (commentSection) {
   commentSection.appendChild(script);
  }

  return () => {
   // Cleanup the script element on component unmount
   if (commentSection) {
    commentSection.removeChild(script);
   }
  };
 }, [pathname]);

 return (
  <section className='py-2'>
   <div id='comment-section'></div>
  </section>
 );
}

export default GiscusComments;
