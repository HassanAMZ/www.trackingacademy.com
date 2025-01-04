window.dataLayer = window.dataLayer || [];

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-EXAMPLE");

function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: page_view ", customStyle01, dataLayerEvent);
}

analytics.subscribe("page_viewed", (event) => {
  const getEventData = (obj, path, fallback = "") =>
    path.split(".").reduce((acc, part) => acc && acc[part], obj) || fallback;

  const page_data = {
    hostname: getEventData(event, "context.document.location.hostname"),
    location_query_string: getEventData(
      event,
      "context.document.location.href",
    ),
    path: getEventData(event, "context.document.location.pathname"),
    referrer: getEventData(event, "context.document.referrer"),
    page_title: getEventData(event, "context.document.title"),
    url: getEventData(event, "context.document.location.href"),
  };

  const user_data = {
    id: event.clientId,
    language: getEventData(event, "context.navigator.language"),
    userAgent: getEventData(event, "context.navigator.userAgent"),
  };
  const event_data = {
    timestamp: event.timestamp || "",
    id: event.id || "",
  };
  const dataLayerEvent = {
    event: "page_view",
    page_data: page_data,
    user_data: user_data,
    event_data: event_data,
  };

  const newUrl = new URL(
    dataLayerEvent.page_data.location_query_string,
    window.location.origin,
  );
  const newTitle = dataLayerEvent.page_data.page_title;

  if (newUrl && newTitle) {
    history.pushState(null, newTitle, newUrl.toString());
  }
  window.dataLayer.push(dataLayerEvent);
  logEventToConsole(dataLayerEvent);
  window.dataLayer.push(dataLayerEvent);
  logEventToConsole(dataLayerEvent);
});
