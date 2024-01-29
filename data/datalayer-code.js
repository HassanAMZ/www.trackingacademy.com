const datalayerCode = {
 viewItem: {
  head: `<script>
  window.dataLayer = window.dataLayer || [];
</script>

{%- if template contains 'product' -%}
  {%- render 'datalayer-product', product: product -%}
{%- endif -%}`,
  main: `{%- liquid assign current_variant = product.selected_or_first_available_variant -%}

<script>
console.log("datalayer-product snippet is loaded")
var itemObject = {
    item_id: {{ current_variant.id | json }},
    id: {{ current_variant.id | json }},
    item_name: {{ product.title | json }},
    currency: {{ shop.currency | json }},
    item_brand: {{ product.vendor | json }},
    item_category: {{ product.type | json }},
    item_variant: {{ current_variant.title | json }},
    price: {{ current_variant.price }} / 100,
    google_business_vertical: 'retail',
    quantity: 1
}

document.addEventListener('DOMContentLoaded', () => {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "custom_view_item",
        ecommerce: {
        value: itemObject.price,
        currency: {{ shop.currency | json }},
            items: [itemObject]
        }
    });
})
</script>`,
  theme: `{% render 'head-datalayer' %}`,
 },
 addToCart: {
  head: `
    <script>
        window.dataLayer = window.dataLayer || [];
    </script>

    {%- if template contains 'product' -%}
        {%- render 'datalayer-product', product: product -%}
    {%- endif -%}
     `,
  main: `
    {%- liquid
        assign current_variant = product.selected_or_first_available_variant
      -%}
      
      <script>
        console.log("datalayer-product snippet is loaded")
        var itemObject = {
            item_id: {{ current_variant.id | json }},
            id: {{ current_variant.id | json }},
            item_name: {{ product.title | json }},
            currency: {{ shop.currency | json }},
            item_brand: {{ product.vendor | json }},
            item_category: {{ product.type | json }},
            item_variant: {{ current_variant.title | json }},
            price: {{ current_variant.price }} / 100,
            google_business_vertical: 'retail',
            quantity: 1
        }
      
        document.addEventListener('DOMContentLoaded', () => {
            const addToCartBtn = document.querySelector('[name="add"]')
            addToCartBtn?.addEventListener('click', () => {
                dataLayer.push({ ecommerce: null });
                dataLayer.push({
                    event: "custom_add_to_cart",
                    ecommerce: {
                    currency: {{ shop.currency | json }},
                        items: [itemObject]
                    }
                });
            })
        })
      </script>
     `,
  theme: `
     {% render 'head-datalayer' %}
     `,
 },
 viewItemList: {
  head: `
    <script>
        window.dataLayer = window.dataLayer || [];
    </script>
  
    {%- if template == 'collection' -%}
        {%- render 'datalayer-collection', collection: collection -%}
    {%- endif -%}
       `,
  main: `<script>
         console.log("datalayer-collection snippet is loaded")
    dataLayer.push({ ecommerce: null });  
    dataLayer.push({
        event: "custom_view_item_list",
        ecommerce: {
            item_list_name: {{ collection.title | json }},
            items: [{%- for product in collection.products -%}
                {
                    item_id: {{ product.id | json }},
                    id: {{ product.id | json }},
                    item_name: {{ product.title | json }},
                    currency: {{ shop.currency | json }},
                    index: {{ forloop.index | json }},
                    item_brand: {{ product.vendor | json }},
                    item_category: {{ product.type | json }},
                    item_list_name: {{ collection.title | json }},
                    item_variant: {{ product.selected_or_first_available_variant.title | json }},
                    price: {{ product.selected_or_first_available_variant.price | json }} / 100,
                google_business_vertical: 'retail',
                    quantity: 1
                }{%- unless forloop.last -%},{%- endunless -%}
            {%- endfor -%}]
        }
    });
    </script>
`,
  theme: `
       {% render 'head-datalayer' %}
       `,
 },
 beginCheckout: {
  head: `
      <script>
          window.dataLayer = window.dataLayer || [];
      </script>
    
      {%- render 'datalayer-checkout' -%}
         `,
  main: `<script>

  document.addEventListener('DOMContentLoaded', () => {
    const checkoutButtons = document.querySelectorAll('[name="checkout"]');
  
    checkoutButtons.forEach(button => {
      button.addEventListener('click', () => {
        fetch('/cart.js')
          .then(response => response.json())
          .then(cartData => {
            const productDetails = cartData.items.map(item => ({
              item_id: item.id,
              id: item.id,
              item_name: item.product_title,
              item_brand: item.vendor,
              item_category: item.product_type,
              quantity: item.quantity,
              currency: cartData.currency,
              google_business_vertical: 'retail',
              price: parseFloat(item.price / 100.0)
            }));
  
            const cartTotalValue = cartData.items.reduce((acc, item) => {
              return acc + (item.price * item.quantity);
            }, 0);
  
            dataLayer.push({ ecommerce: null });
  
            dataLayer.push({
              event: "custom_begin_checkout",
              ecommerce: {
                items: productDetails,
                value: parseFloat(cartTotalValue / 100.0),
                currency: cartData.currency
              }
            });
          })
          .catch(error => console.error('Error fetching cart data:', error));
      });
    });
  });
  </script>
  `,
  theme: `{% render 'head-datalayer' %}`,
 },
 purchase: {
  main: `<script>
    window.dataLayer = window.dataLayer || [];
    {% if customer %}
      dataLayer.push({
        'event': 'user_data',
        'ecommerce':{
        'currency': {{ shop.currency | json }},
        },
        'user_data': {
          'user_id': "{{ customer.id | default: undefined }}",
          'email_address': "{{ customer.email | default: undefined }}",
          'address': {
            {% if customer.default_address %}
              'city': "{{ customer.default_address.city | default: undefined }}",
              'address': "{{ customer.default_address.address1 | default: undefined }} {{ customer.default_address.address2 | default: undefined }}",
              'state': "{{ customer.default_address.province | default: undefined }}",
              'country': "{{ customer.default_address.country | default: undefined }}",
              'postal_code': "{{ customer.default_address.zip | default: undefined }}",
              'first_name': "{{ customer.default_address.first_name | default: undefined }}",
              'last_name': "{{ customer.default_address.last_name | default: undefined }}"
            {% else %}
              'first_name': "{{ customer.first_name | default: undefined }}",
              'last_name': "{{ customer.last_name | default: undefined }}"
            {% endif %}
          }
        }
      });
  {% endif %}
</script>
     
{% if first_time_accessed %}

<script>
    {% if customer %}
       var orders_count = '{{ customer.orders_count }}'
       var total_spent  = '{{ customer.total_spent }}'
    {% endif %}
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null });
    var transaction_id = '{{ order_number }}' || undefined ;
    var value = {{ checkout.subtotal_price | divided_by: 100.0 }} || 0;
    var shipping = {{ order.shipping_price | divided_by: 100.0 }} || 0;
    var tax = {{ order.tax_price | divided_by: 100.0 }} || 0;
    var coupon_code = Shopify.checkout.discount?.code || '';
    var currency = '{{ currency }}' || 'USD';
    var line_items = [];
    Shopify.checkout.line_items.forEach((product_line_item, index) => {
        line_items.push({
            'item_id': product_line_item.product_id || undefined ,
            'item_sku': product_line_item.sku || undefined ,
            'item_name': product_line_item.title || undefined ,
            'affiliation': Shopify.shop || undefined ,
            'price': product_line_item.price || 0,
            'item_brand': product_line_item.vendor || undefined ,
            'item_variant': product_line_item.variant_title || undefined ,
            'item_variant_id': product_line_item.variant_id || undefined ,
            'quantity': product_line_item.quantity || 1,
            'currency': currency,
            'index': index,
            'google_business_vertical': 'retail'
        });
    });
    dataLayer.push({
        'event': 'custom_purchase',
        'datalayer_event_name': "purchase",
        'ecommerce': {
            'timestamp': Shopify.checkout.created_at,
            'transaction_id': transaction_id,
            'value': value,
            'orders_count': orders_count || undefined,
            'total_spent' : total_spent || undefined,
            'shipping': shipping,
            'tax': tax,
            'coupon': coupon_code,
            'currency': currency,
            'discount_amount': Shopify.checkout?.discount?.amount || undefined,
            'items': line_items,
        },
    });
</script>

{% endif %}`,
 },
 viewCart: {
  head: `<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- render 'datalayer-cart' -%}`,

  main: `<script>
    // Script to run when the cart page is loaded or updated
    document.addEventListener('DOMContentLoaded', () => {
      // Fetch the latest cart data
      fetch('/cart.js')
        .then(response => response.json())
        .then(cartData => {
          // Format cart items for GA4
          const productDetails = cartData.items.map(item => ({
            item_id: item.id,
            id: item.id,
            item_name: item.product_title,
            item_brand: item.vendor,
            item_category: item.product_type,
            quantity: item.quantity,
            currency: cartData.currency,
            price: parseFloat(item.price / 100.0)
          }));
    
          // Calculate total cart value
          const cartTotalValue = cartData.items.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
          }, 0);
    
          // Update dataLayer with cart info
          dataLayer.push({
            event: "custom_view_cart",
            ecommerce: {
              items: productDetails,
              value: parseFloat(cartTotalValue / 100.0),
              currency: cartData.currency
            }
          });
        })
        .catch(error => console.error('Error fetching cart data:', error));
    });
    </script>`,
  theme: `{% render 'head-datalayer' %}`,
 },
 googleTagManager: {
  head: `<!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');</script>
  <!-- End Google Tag Manager -->`,
  body: `<!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  `,
 },
};

export default datalayerCode;
