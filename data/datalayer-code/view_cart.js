// Initialize the dataLayer
window.dataLayer = window.dataLayer || [];
dataLayer.push({ ecommerce: null });

// Function to log event to console with enhanced visibility
function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: view_cart ", customStyle01, dataLayerEvent);
}

// Subscribe to cart viewed events
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
        "merchandise.product.untranslatedTitle"
      ),
      product_sku: getEventData(line, "merchandise.sku"),
      quantity: getEventData(line, "quantity"),
    })),
  };

  // Combine all data into a single object
  const dataLayerEvent = {
    event: "gtm_custom_event",
    datalayer_event_name: "view_cart",
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
