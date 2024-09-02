// Initialize the dataLayer
window.dataLayer = window.dataLayer || [];
dataLayer.push({ ecommerce: null });

// Function to log event to console with enhanced visibility
function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    "color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;";
  console.log("%cDataLayer Event: add_to_cart ", customStyle01, dataLayerEvent);
}

// Subscribe to product added to cart events
analytics.subscribe("product_added_to_cart", (event) => {
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
    currency: getEventData(
      event,
      "data.cartLine.merchandise.price.currencyCode"
    ),
    value: getEventData(event, "data.cartLine.cost.totalAmount.amount"),
    items: [
      {
        item_id: getEventData(event, "data.cartLine.merchandise.product.id"),
        item_name: getEventData(
          event,
          "data.cartLine.merchandise.product.title"
        ),
        item_brand: getEventData(
          event,
          "data.cartLine.merchandise.product.vendor"
        ),
        item_category: getEventData(
          event,
          "data.cartLine.merchandise.product.type"
        ),
        price: getEventData(event, "data.cartLine.merchandise.price.amount"),
        item_variant:
          getEventData(event, "data.cartLine.merchandise.title") ||
          getEventData(event, "data.cartLine.merchandise.untranslatedTitle"),
        item_list_name: "Cart",
        index: 0,
        product_id: getEventData(event, "data.cartLine.merchandise.id"),
        product_image: getEventData(
          event,
          "data.cartLine.merchandise.image.src"
        ),
        product_url: getEventData(
          event,
          "data.cartLine.merchandise.product.url"
        ),
        product_untranslatedTitle: getEventData(
          event,
          "data.cartLine.merchandise.product.untranslatedTitle"
        ),
        product_sku: getEventData(event, "data.cartLine.merchandise.sku"),
        quantity: getEventData(event, "data.cartLine.quantity"),
      },
    ],
  };

  // Combine all data into a single object
  const dataLayerEvent = {
    event: "gtm_custom_event",
    datalayer_event_name: "add_to_cart",
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
  };

  // Push the event to dataLayer
  window.dataLayer.push(dataLayerEvent);

  // Log the event with styled console output
  logEventToConsole(dataLayerEvent);
});
