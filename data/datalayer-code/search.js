// Initialize the dataLayer
window.dataLayer = window.dataLayer || [];
dataLayer.push({ ecommerce: null });

// Function to log event to console with enhanced visibility
function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: search", customStyle01, dataLayerEvent);
}

// Subscribe to search submitted events
analytics.subscribe("search_submitted", (event) => {
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
      "context.document.location.href",
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
    search_query: getEventData(event, "data.searchResult.query"),
    items: event.data.searchResult.productVariants.map((variant, index) => ({
      item_id: getEventData(variant, "product.id"),
      item_name: getEventData(variant, "product.title"),
      item_brand: getEventData(variant, "product.vendor"),
      item_category: getEventData(variant, "product.type"),
      price: getEventData(variant, "price.amount"),
      item_variant:
        getEventData(variant, "title") ||
        getEventData(variant, "untranslatedTitle"),
      item_list_name: "Search Results",
      index: index + 1,
      product_id: getEventData(variant, "id"),
      product_image: getEventData(variant, "image.src"),
      product_url: getEventData(variant, "product.url"),
      product_untranslatedTitle: getEventData(
        variant,
        "product.untranslatedTitle",
      ),
      product_sku: getEventData(variant, "sku"),
    })),
  };

  // Combine all data into a single object
  const dataLayerEvent = {
    event: "gtm_custom_event",
    datalayer_event_name: "search",
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
