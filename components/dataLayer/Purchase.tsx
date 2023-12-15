import React from "react";
import {
 Heading3xl,
 Headingxl,
 ListItem,
 OrderedList,
 Paragraphmd,
 UnorderedList,
} from "@/components/typography/Heading";
import Pre from "@/components/mdx/Pre";
import AuthPre from "@/components/mdx/AuthPre";
import Note from "@/components/mdx/Note";

export default function Purchase() {
 return (
  <React.Fragment>
   <Headingxl>DataLayer Code Snippets Overview</Headingxl>
   <Paragraphmd>
    The provided code snippets aim to integrate the `dataLayer` object for
    Google Tag Manager (GTM) with a Shopify store. The main goal is to send an
    event called `custom_purchase` whenever a user visits the final /thank-you/
    page on Shopify after making the payment.
   </Paragraphmd>
   <Headingxl>Order Status DataLayer Code</Headingxl>
   <OrderedList>
    <ListItem>
     This script, embedded within a Shopify platform, serves to track
     purchase-related data for analytics purposes.
    </ListItem>
    <ListItem>
     When a user accesses a site for the first time (`first_time_accessed`), the
     script checks if the user is a registered customer. If so, it fetches the
     user's order count and total spend.
    </ListItem>
    <ListItem>
     The script then initializes the `dataLayer` object if it doesn't already
     exist and populates it with purchase details like transaction ID, total
     value, shipping, tax, currency, and details of items in the order.
    </ListItem>
    <ListItem>
     These details include individual product attributes such as the product's
     ID, SKU, name, price, brand, variant, quantity, and other related info.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`<script>
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

{% endif %}
`}
    </code>
   </AuthPre>
   <Headingxl> Steps to Add the DataLayer Code Snippets in Shopify:</Headingxl>
   <OrderedList>
    <ListItem>
     Log into Your Shopify Admin Panel:
     <UnorderedList>
      <ListItem>Visit your Shopify store's URL followed by `/admin`.</ListItem>
      <ListItem>
       Enter your login credentials to access the admin panel.
      </ListItem>
     </UnorderedList>
    </ListItem>

    <ListItem>
     Access Checkout Settings:
     <UnorderedList>
      <ListItem>On the left-hand side menu, click on `Settings`.</ListItem>
      <ListItem>From the dropdown, select `Checkout`.</ListItem>
     </UnorderedList>
    </ListItem>

    <ListItem>
     Locate the Additional Scripts Section:
     <UnorderedList>
      <ListItem>
       Scroll down until you find the `Order processing` section.
      </ListItem>
      <ListItem>
       Within this section, you'll see a text box labeled `Additional Scripts`.
       This is where you can add scripts that will run on the order status page
       after a customer completes their purchase.
      </ListItem>
     </UnorderedList>
    </ListItem>

    <ListItem>
     Paste Your Script:
     <UnorderedList>
      <ListItem>Copy the script you have.</ListItem>
      <ListItem>Paste it into the `Additional Scripts` text box.</ListItem>
     </UnorderedList>
    </ListItem>

    <ListItem>
     Save Changes:
     <UnorderedList>
      <ListItem>Copy the script you have.</ListItem>
      <ListItem>
       After you've pasted your script, scroll to the bottom of the page and
       click on the `Save` button.
      </ListItem>
     </UnorderedList>
    </ListItem>

    <ListItem>
     Test the Script (Important):
     <UnorderedList>
      <ListItem>
       {" "}
       After saving, you should make a test purchase to ensure that the script
       runs as expected on the order status page.
      </ListItem>
      <ListItem>
       Check if all data is being collected and pushed to the `dataLayer` as
       intended by your script.
      </ListItem>
     </UnorderedList>
    </ListItem>
   </OrderedList>
   <Note
    title='Note'
    content='The Additional Scripts section in the Checkout settings allows you to add scripts that will run after a customer has completed their purchase. This is a safe place to add conversion tracking codes, analytics scripts, or other scripts you want to trigger once a sale is confirmed.'
   />
  </React.Fragment>
 );
}
