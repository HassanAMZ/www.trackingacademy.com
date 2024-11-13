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
    "%cDataLayer Event: begin_checkout ",
    customStyle01,
    dataLayerEvent,
  );
}

analytics.subscribe("checkout_started", (event) => {
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
    currency: getEventData(event, "data.checkout.currencyCode"),
    value: getEventData(event, "data.checkout.totalPrice.amount"),
    items: event.data.checkout.lineItems.map((item, index) => ({
      item_id: getEventData(item, "variant.product.id"),
      item_name: getEventData(item, "variant.product.title"),
      item_brand: getEventData(item, "variant.product.vendor"),
      item_category: getEventData(item, "variant.product.type"),
      price: getEventData(item, "variant.price.amount"),
      item_variant:
        getEventData(item, "variant.title") ||
        getEventData(item, "variant.untranslatedTitle"),
      item_list_name: "Checkout",
      index: index + 1,
      product_id: getEventData(item, "variant.id"),
      product_image: getEventData(item, "variant.image.src"),
      product_url: getEventData(item, "variant.product.url"),
      product_untranslatedTitle: getEventData(
        item,
        "variant.product.untranslatedTitle",
      ),
      product_sku: getEventData(item, "variant.sku"),
      quantity: getEventData(item, "quantity"),
    })),
  };

  const dataLayerEvent = {
    event: "begin_checkout",
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
    page_data: page_data,
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
