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
  console.log(
    "%cDataLayer Event: view_item_list ",
    customStyle01,
    dataLayerEvent,
  );
}

analytics.subscribe("collection_viewed", (event) => {
  const getEventData = (obj, path, fallback = "") => {
    return (
      path.split(".").reduce((acc, part) => {
        if (acc && part.includes("[")) {
          const [key, index] = part.replace("]", "").split("[");
          return acc[key] ? acc[key][index] : undefined;
        }
        return acc ? acc[part] : undefined;
      }, obj) || fallback
    );
  };
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

  const ecommerce_data = {
    currency: getEventData(
      event,
      "data.collection.productVariants[0].price.currencyCode",
    ),
    value: event.data.collection.productVariants
      .reduce((total, variant) => total + variant.price.amount, 0)
      .toString(),
    item_list_name: getEventData(event, "data.collection.title"),
    items: event.data.collection.productVariants.map((variant, index) => ({
      item_list_id:
        getEventData(event, "data.collection.id") ||
        getEventData(event, "data.collection.title"),
      item_list_name: getEventData(event, "data.collection.title"),
      item_id: getEventData(variant, "product.id"),
      item_name: getEventData(variant, "product.title"),
      item_brand: getEventData(variant, "product.vendor"),
      item_category: getEventData(variant, "product.type"),
      price: getEventData(variant, "price.amount").toString(),
      item_variant: getEventData(variant, "title"),
      index: index,
      product_id: getEventData(variant, "id"),
      product_image: getEventData(variant, "image.src"),
      product_url: getEventData(variant, "product.url"),
      quantity: 1,
    })),
  };

  const dataLayerEvent = {
    event: "view_item_list",
    page_data: page_data,
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
  };

  const newUrl = new URL(
    page_data.location_query_string,
    window.location.origin,
  );
  const newTitle = page_data.page_title;

  if (newUrl && newTitle) {
    history.pushState(null, newTitle, newUrl.toString());
  }
  window.dataLayer = window.dataLayer || [];

  dataLayer.push({ ecommerce: null });

  window.dataLayer.push(dataLayerEvent);

  logEventToConsole(dataLayerEvent);
});
