import Script from "next/script";
import React from "react";

export default function Instantly() {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

  return (
    <>
      {isProduction && (
        <React.Fragment>
          <Script
            id="instantly-vtag"
            strategy="lazyOnload"
            src="https://r2.leadsy.ai/tag.js"
            data-pid="JXDRJz3mayeC46i6"
            data-version="062024"
          />
        </React.Fragment>
      )}
    </>
  );
}
