(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-XXXXX");

// Function to log event to console with enhanced visibility
function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: add_contact_info ", customStyle01, dataLayerEvent);
}

// Subscribe to contact info submitted events
analytics.subscribe("checkout_contact_info_submitted", (event) => {
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

  // Prepare data objects with safe fallbacks
  const page_data = {
    hostname: getEventData(event, "context.document.location.hostname"),
    location_query_string: getEventData(event, "context.document.location.href"),
    path: getEventData(event, "context.document.location.pathname"),
    referrer: getEventData(event, "context.document.referrer"),
    page_title: getEventData(event, "context.document.title"),
    url: getEventData(event, "context.document.location.href"),
  };

  const user_data = {
    id: getEventData(event, "data.checkout.order.customer.id") || event.clientId,
    phone: getEventData(event, "data.checkout.shippingAddress.phone"),
    email: getEventData(event, "data.checkout.email"),
    address: {
      city: getEventData(event, "data.checkout.shippingAddress.city"),
      address: getEventData(event, "data.checkout.shippingAddress.address1"),
      state: getEventData(event, "data.checkout.shippingAddress.state"),
      country: getEventData(event, "data.checkout.shippingAddress.country"),
      postal_code: getEventData(event, "data.checkout.shippingAddress.zip"),
      first_name: getEventData(event, "data.checkout.shippingAddress.firstName"),
      last_name: getEventData(event, "data.checkout.shippingAddress.lastName"),
    },
    language: getEventData(event, "context.navigator.language"),
    userAgent: getEventData(event, "context.navigator.userAgent"),
  };

  const event_data = {
    timestamp: event.timestamp || "",
    id: event.id || "",
  };

  // E-commerce data
  const ecommerce_data = {
    currency: getEventData(event, "data.checkout.currencyCode"),
    value: getEventData(event, "data.checkout.totalPrice.amount"),
    shipping: getEventData(event, "data.checkout.shippingLine.price.amount"),
    tax: getEventData(event, "data.checkout.totalTax.amount"),
    coupon: getEventData(event, "data.checkout.discountApplications[0].code", ""),
    items: event.data.checkout.lineItems.map((item, index) => ({
      item_id: getEventData(item, "variant.product.id"),
      item_name: getEventData(item, "variant.product.title"),
      item_brand: getEventData(item, "variant.product.vendor"),
      item_category: getEventData(item, "variant.product.type"),
      price: getEventData(item, "variant.price.amount"),
      item_variant:
        getEventData(item, "variant.title") || getEventData(item, "variant.untranslatedTitle"),
      item_list_name: "Checkout",
      index: index + 1,
      product_id: getEventData(item, "variant.id"),
      product_image: getEventData(item, "variant.image.src"),
      product_url: getEventData(item, "variant.product.url"),
      product_untranslatedTitle: getEventData(item, "variant.product.untranslatedTitle"),
      product_sku: getEventData(item, "variant.sku"),
      quantity: getEventData(item, "quantity"),
    })),
  };

  // Combine all data into a single object
  const dataLayerEvent = {
    event: "gtm_custom_event",
    datalayer_event_name: "add_contact_info",
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
    page_data: page_data,
  };

  // Push the event to dataLayer
  window.dataLayer.push(dataLayerEvent);

  // Log the event with styled console output
  logEventToConsole(dataLayerEvent);
});
