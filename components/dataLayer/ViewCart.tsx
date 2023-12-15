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

export default function ViewCart() {
 return (
  <React.Fragment>
   <Paragraphmd>
    This section focuses on capturing detailed data like item_id, item_name,
    value, quantity, etc., when the "custom_view_cart" event is triggered. The
    code snippets provided are designed to integrate the `dataLayer` object with
    Google Tag Manager (GTM) in a Shopify store context. The primary objective
    is to send an event named `custom_view_cart` whenever a user views the cart
    page in Shopify.
   </Paragraphmd>
   <Headingxl>Head DataLayer Code</Headingxl>
   <Paragraphmd>
    This code snippet ensures the initialization of the `dataLayer` array and
    includes a specific snippet called 'datalayer-cart' for rendering on cart
    pages.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- render 'datalayer-cart' -%}
`}
    </code>
   </AuthPre>
   <Headingxl> Cart DataLayer Code</Headingxl>
   <Paragraphmd>
    This snippet contains the logic to populate the `dataLayer` object with
    product details whenever a View Cart event is triggered:
   </Paragraphmd>
   <OrderedList>
    <ListItem>
     Initial Logging: Confirms the script is loaded correctly.
    </ListItem>
    <ListItem>
     Cart Data & Product Details: Retrieves and formats cart data from Shopify
     for Google's ecommerce tracking.
    </ListItem>
    <ListItem>
     Cart Total Value: Calculates the total value of items in the cart.
    </ListItem>
    <ListItem>
     View Cart Event Listener: Sets up a listener for when the cart page loads,
     updating the `dataLayer` with the current cart information.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`<script>
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
</script>

`}
    </code>
   </AuthPre>
   <Headingxl> Theme DataLayer Code</Headingxl>
   <Paragraphmd>
    This code renders the `head-datalayer` snippet. Depending on the setup of
    your Shopify theme, this is likely where the head datalayer code resides.
    Add this code GTM Body Code.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`{% render 'head-datalayer' %}
`}
    </code>
   </AuthPre>
   <Headingxl> Steps to Add the DataLayer Code Snippets in Shopify:</Headingxl>
   <OrderedList>
    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Backup: </span>
      Before making any changes, always backup your current theme.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Access Theme Files: </span>
      Login to your Shopify Admin. Then, go to Online Store {">"} Themes. Click
      on the "Actions" dropdown for your live theme and select "Edit code".
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Head DataLayer Code: </span>
      In the left sidebar, locate and click on `theme.liquid`. Insert the "Head
      DataLayer Code" snippet within the `{"<head>"}` tags.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Checkout DataLayer Code: </span>
      Click "Add a new snippet" depending on your Shopify version. Name it
      `datalayer-cart.liquid`. Insert the "Cart DataLayer Code" snippet into
      this new file. Save changes.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Theme DataLayer Code: </span>
      Determine where you want this code to render (usually within the `
      {"<head>"}` tags in `theme.liquid`). Insert the "Theme DataLayer Code"
      snippet in the desired location. Save changes.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Test: </span>
      Visit a product page on your Shopify store. Open browser's developer
      console. Confirm that the `custom_view_item` event is fired and the
      `dataLayer` object contains the correct product details.
     </Paragraphmd>
    </ListItem>
   </OrderedList>
   <Paragraphmd>
    The custom prefixes added to event names (like 'custom_view_cart') are
    intended to prevent conflicts with other possible integrations or plugins
    that might be using standard event names.
   </Paragraphmd>
  </React.Fragment>
 );
}
