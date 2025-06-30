import React from "react";
import Script from "next/script";

export default function GoogleTagManager() {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

  return (
    <>
      {isProduction ? (
        <React.Fragment>
          <Script id="google-tag-manager" strategy="lazyOnload">
            {`!function() {
                "use strict";

                function l(e) {
                    for (var t = e, r = 0, n = document.cookie.split(";"); r < n.length; r++) {
                        var o = n[r].split("=");
                        if (o[0].trim() === t) return o[1]
                    }
                }

                function s(e) {
                    return localStorage.getItem(e)
                }

                function u(e) {
                    return window[e]
                }

                function A(e, t) {
                    e = document.querySelector(e);
                    return t ? null == e ? void 0 : e.getAttribute(t) : null == e ? void 0 : e.textContent
                }
                var e = window,
                    t = document,
                    r = "script",
                    n = "dataLayer",
                    o = "https://road.trackingacademy.com",
                    a = "https://load.road.trackingacademy.com",
                    i = "1z6ztxquqcp",
                    c = "42poe=aWQ9R1RNLU1DS1A3Sks%3D&page=1",
                    g = "stapeUserId",
                    v = "",
                    E = "",
                    d = !1;
                try {
                    var d = !!g && (m = navigator.userAgent, !!(m = new RegExp("Version/([0-9._]+)(.*Mobile)?.*Safari.*").exec(m))) && 16.4 <= parseFloat(m[1]),
                        f = "stapeUserId" === g,
                        I = d && !f ? function(e, t, r) {
                            void 0 === t && (t = "");
                            var n = {
                                    cookie: l,
                                    localStorage: s,
                                    jsVariable: u,
                                    cssSelector: A
                                },
                                t = Array.isArray(t) ? t : [t];
                            if (e && n[e])
                                for (var o = n[e], a = 0, i = t; a < i.length; a++) {
                                    var c = i[a],
                                        c = r ? o(c, r) : o(c);
                                    if (c) return c
                                } else console.warn("invalid uid source", e)
                        }(g, v, E) : void 0;
                    d = d && (!!I || f)
                } catch (e) {
                    console.error(e)
                }
                var m = e,
                    g = (m[n] = m[n] || [], m[n].push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    }), t.getElementsByTagName(r)[0]),
                    v = I ? "&bi=" + encodeURIComponent(I) : "",
                    E = t.createElement(r),
                    f = (d && (i = 8 < i.length ? i.replace(/([a-z]{8}$)/, "kp$1") : "kp" + i), !d && a ? a : o);
                E.async = !0, E.src = f + "/" + i + ".js?" + c + v, null != (e = g.parentNode) && e.insertBefore(E, g)
            }();
            `}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://load.road.trackingacademy.com/ns.html?id=GTM-MCKP7JK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </React.Fragment>
      ) : (
        <Script id="mock-datalayer" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
      )}
    </>
  );
}
