import Script from "next/script";
import React from "react";

export default function GoogleTagManager() {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

  return (
    <>
      {isProduction && (
        <React.Fragment>
          <Script id="google-tag-manager" strategy="lazyOnload">
            {`(function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s);
                j.async = true;
                j.src = "https://load.road.trackingacademy.com/1z6ztxquqcp.js?" + i;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', '42poe=aWQ9R1RNLU1DS1A3Sks%3D&page=1');
            `}
          </Script>
        </React.Fragment>
      )}

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://load.road.trackingacademy.com/ns.html?id=GTM-MCKP7JK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
}
