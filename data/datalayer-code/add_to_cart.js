window.dataLayer = window.dataLayer || [];

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-EXAMPLE');

function logEventToConsole(dataLayerEvent) {
  const customStyle01 =
    'color: #FFFF00; background-color: #000000; font-size: 10px; font-weight: bold; padding: 2px 0;';
  console.log('%cDataLayer Event: add_to_cart ', customStyle01, dataLayerEvent);
}

analytics.subscribe('product_added_to_cart', (event) => {
  const getEventData = (obj, path, fallback = '') => {
    return (
      path.split('.').reduce((acc, part) => {
        if (acc && part.includes('[')) {
          const [key, index] = part.replace(']', '').split('[');
          return acc[key] ? acc[key][index] : undefined;
        }
        return acc ? acc[part] : undefined;
      }, obj) || fallback
    );
  };
  const page_data = {
    hostname: getEventData(event, 'context.document.location.hostname'),
    location_query_string: getEventData(event, 'context.document.location.href'),
    path: getEventData(event, 'context.document.location.pathname'),
    referrer: getEventData(event, 'context.document.referrer'),
    page_title: getEventData(event, 'context.document.title'),
    url: getEventData(event, 'context.document.location.href'),
  };

  const user_data = {
    id: event.clientId,
    language: getEventData(event, 'context.navigator.language'),
    userAgent: getEventData(event, 'context.navigator.userAgent'),
  };

  const event_data = {
    timestamp: event.timestamp || '',
    id: event.id || '',
  };

  const ecommerce_data = {
    currency: getEventData(event, 'data.cartLine.merchandise.price.currencyCode'),
    value: getEventData(event, 'data.cartLine.cost.totalAmount.amount'),
    items: [
      {
        item_id: getEventData(event, 'data.cartLine.merchandise.product.id'),
        item_name: getEventData(event, 'data.cartLine.merchandise.product.title'),
        item_brand: getEventData(event, 'data.cartLine.merchandise.product.vendor'),
        item_category: getEventData(event, 'data.cartLine.merchandise.product.type'),
        price: getEventData(event, 'data.cartLine.merchandise.price.amount'),
        item_variant:
          getEventData(event, 'data.cartLine.merchandise.title') ||
          getEventData(event, 'data.cartLine.merchandise.untranslatedTitle'),
        item_list_name: 'Cart',
        index: 0,
        product_id: getEventData(event, 'data.cartLine.merchandise.id'),
        product_image: getEventData(event, 'data.cartLine.merchandise.image.src'),
        product_url: getEventData(event, 'data.cartLine.merchandise.product.url'),
        product_untranslatedTitle: getEventData(
          event,
          'data.cartLine.merchandise.product.untranslatedTitle',
        ),
        product_sku: getEventData(event, 'data.cartLine.merchandise.sku'),
        quantity: getEventData(event, 'data.cartLine.quantity'),
      },
    ],
  };
  const dataLayerEvent = {
    event: 'add_to_cart',
    page_data: page_data,
    user_data: user_data,
    event_data: event_data,
    ecommerce: ecommerce_data,
  };
  const newUrl = new URL(dataLayerEvent.page_data.location_query_string, window.location.origin);
  const newTitle = dataLayerEvent.page_data.page_title;

  if (newUrl && newTitle) {
    history.pushState(null, newTitle, newUrl.toString());
  }

  dataLayer.push({ ecommerce: null });

  window.dataLayer.push(dataLayerEvent);
  logEventToConsole(dataLayerEvent);
});
