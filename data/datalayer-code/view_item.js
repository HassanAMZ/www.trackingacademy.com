// Initialize the dataLayer
window.dataLayer = window.dataLayer || [];
dataLayer.push({ ecommerce: null });

// Function to log event to console with enhanced visibility
function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: view_item ", customStyle01, dataLayerEvent);
}

// Subscribe to product viewed events
analytics.subscribe("product_viewed", (event) => {
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
    location_query_string: getEventData(
      event,
      "context.document.location.href"
    ),
    path: getEventData(event, "context.document.location.pathname"),
    referrer: getEventData(event, "context.document.referrer"),
    page_title: getEventData(event, "context.document.title"),
    url: getEventData(event, "context.document.location.href"),
  };

  const user_data = {
    id:
      getEventData(event, "data.checkout.order.customer.id") || event.clientId,
    language: getEventData(event, "context.navigator.language"),
    userAgent: getEventData(event, "context.navigator.userAgent"),
  };

  const event_data = {
    timestamp: event.timestamp || "",
    id: event.id || "",
  };

  // E-commerce data
  const ecommerce_data = {
    currency: getEventData(event, "data.productVariant.price.currencyCode"),
    value: getEventData(event, "data.productVariant.price.amount"),
    items: [
      {
        item_id: getEventData(event, "data.productVariant.product.id"),
        item_name: getEventData(event, "data.productVariant.product.title"),
        item_brand: getEventData(event, "data.productVariant.product.vendor"),
        item_category: getEventData(event, "data.productVariant.product.type"),
        price: getEventData(event, "data.productVariant.price.amount"),
        item_variant: getEventData(event, "data.productVariant.title"),
        item_list_name: "Product Page",
        index: 0,
        product_id: getEventData(event, "data.productVariant.id"),
        product_image: getEventData(event, "data.productVariant.image.src"),
        product_url: getEventData(event, "data.productVariant.product.url"),
        product_untranslatedTitle: getEventData(
          event,
          "data.productVariant.untranslatedTitle"
        ),
        product_sku: getEventData(event, "data.productVariant.sku"),
        quantity: 1,
      },
    ],
  };

  // Combine all data into a single object
  const dataLayerEvent = {
    event: "gtm_custom_event",
    datalayer_event_name: "view_item",
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
  };

  // Push the event to dataLayer
  window.dataLayer.push(dataLayerEvent);

  // Log the event with styled console output
  logEventToConsole(dataLayerEvent);
});
