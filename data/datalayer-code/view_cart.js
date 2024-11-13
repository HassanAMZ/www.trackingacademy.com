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
  console.log("%cDataLayer Event: view_cart ", customStyle01, dataLayerEvent);
}

analytics.subscribe("cart_viewed", (event) => {
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
    currency: getEventData(event, "data.cart.cost.totalAmount.currencyCode"),
    value: getEventData(event, "data.cart.cost.totalAmount.amount"),
    items: event.data.cart.lines.map((line, index) => ({
      item_id: getEventData(line, "merchandise.product.id"),
      item_name: getEventData(line, "merchandise.product.title"),
      item_brand: getEventData(line, "merchandise.product.vendor"),
      item_category: getEventData(line, "merchandise.product.type"),
      price: getEventData(line, "merchandise.price.amount"),
      item_variant:
        getEventData(line, "merchandise.title") ||
        getEventData(line, "merchandise.untranslatedTitle"),
      item_list_name: "Cart",
      index: index + 1,
      product_id: getEventData(line, "merchandise.id"),
      product_image: getEventData(line, "merchandise.image.src"),
      product_url: getEventData(line, "merchandise.product.url"),
      product_untranslatedTitle: getEventData(
        line,
        "merchandise.product.untranslatedTitle",
      ),
      product_sku: getEventData(line, "merchandise.sku"),
      quantity: getEventData(line, "quantity"),
    })),
  };

  const dataLayerEvent = {
    event: "view_cart",
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

  dataLayer.push({ ecommerce: null });
  window.dataLayer.push(dataLayerEvent);
  logEventToConsole(dataLayerEvent);
});
