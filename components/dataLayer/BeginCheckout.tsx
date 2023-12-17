import React from "react";
import {
 Heading3xl,
 Heading4xl,
 ListItem,
 OrderedList,
 Paragraphmd,
 UnorderedList,
} from "@/components/typography/Heading";
import Pre from "@/components/mdx/Pre";
import AuthPre from "@/components/mdx/AuthPre";

export default function BeginCheckout() {
 return (
  <React.Fragment>
   <Paragraphmd>
    This section is for those who wish to capture more data, like the item_id,
    item_name, value, quantity, etc., when the "custom_begin_checkout" event is
    triggered. The provided code snippets aim to integrate the `dataLayer`
    object for Google Tag Manager (GTM) with a Shopify store. The main goal is
    to send an event called `custom_begin_checkout` whenever a user clicks the
    Begin Checkout button on the Cart page on Shopify.
   </Paragraphmd>
   <Heading4xl className={`!text-2xl py-2 `}>Head DataLayer Code</Heading4xl>
   <Paragraphmd>
    This code initializes the `dataLayer` array if it hasn't been already. It
    then checks if the current page template is a 'product' page and renders a
    specific snippet called 'datalayer-checkout' on all pages.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- render 'datalayer-checkout' -%}
`}
    </code>
   </AuthPre>
   <Heading4xl className={`!text-2xl py-2 `}>
    {" "}
    Checkout DataLayer Code
   </Heading4xl>
   This code snippet contains the main logic for populating the `dataLayer`
   object with product details whenever a Begin Checkout Event is triggered on
   the Cart page:
   <OrderedList>
    <ListItem>
     {" "}
     Initial Logging:Outputs a message to verify the script is loaded.
    </ListItem>
    <ListItem>
     Cart Data & Product Details: Retrieves cart data from Shopify and
     transforms cart items for Google's ecommerce tracking format.
    </ListItem>
    <ListItem>
     Cart Total Value: Computes the total value of items in the cart.
    </ListItem>
    <ListItem>
     Begin Checkout Event Listener: It waits for the page to load and then
     identifies checkout buttons. For each button: Clears previous `dataLayer`
     ecommerce data on click and pushes new ecommerce data to the `dataLayer`
     for Google Tag Manager tracking.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`<script>
// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Find all checkout buttons
  const checkoutButtons = document.querySelectorAll('[name="checkout"]');

  checkoutButtons.forEach(button => {
    // Add click event listener to each checkout button
    button.addEventListener('click', () => {
      // Fetch the latest cart data
      fetch('/cart.js')
        .then(response => response.json())
        .then(cartData => {
          // Map the cart items to the format required by GA4
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

          // Calculate the total value of the cart
          const cartTotalValue = cartData.items.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
          }, 0);

          // Reset the dataLayer for the new event
          dataLayer.push({ ecommerce: null });

          // Push the updated cart data to the dataLayer
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

`}
    </code>
   </AuthPre>
   <Heading4xl className={`!text-2xl py-2 `}> Theme DataLayer Code</Heading4xl>
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
   <Heading4xl className={`!text-2xl py-2 `}>
    {" "}
    Steps to Add the DataLayer Code Snippets in Shopify:
   </Heading4xl>
   <OrderedList>
    <ListItem>
     <span className='font-bold'>Backup:</span> Before making any changes,
     always backup your current theme.
    </ListItem>
    <ListItem>
     Access Theme Files:
     <UnorderedList>
      <ListItem>Login to your Shopify Admin. </ListItem>
      <ListItem>Go to Online Store {">"} Themes. </ListItem>
      <ListItem>
       Click on the "Actions" dropdown for your live theme and select "Edit
       code"
      </ListItem>
     </UnorderedList>
    </ListItem>
    <ListItem>
     Add Head DataLayer Code:
     <UnorderedList>
      <ListItem>
       In the left sidebar, locate and click on `theme.liquid`.
      </ListItem>
      <ListItem>
       Insert the "Head DataLayer Code" snippet within the `{"<head>"}` tags.
      </ListItem>
     </UnorderedList>
    </ListItem>
    <ListItem>
     Add Checkout DataLayer Code::
     <UnorderedList>
      <ListItem>
       Click "Add a new snippet" depending on your Shopify version.
      </ListItem>
      <ListItem>Name it `datalayer-checkout.liquid`.</ListItem>
      <ListItem>
       Insert the "Checkout DataLayer Code" snippet into this new file.
      </ListItem>
      <ListItem>Save changes.</ListItem>
     </UnorderedList>
    </ListItem>
    <ListItem>
     Add Theme DataLayer Code:
     <UnorderedList>
      <ListItem>
       Determine where you want this code to render (usually within the`
       {"<head>"}` tags in `theme.liquid`).
      </ListItem>
      <ListItem>
       Insert the "Theme DataLayer Code" snippet in the desired location.
      </ListItem>
      <ListItem>Save changes.</ListItem>
     </UnorderedList>
    </ListItem>
    <ListItem>
     Test:
     <UnorderedList>
      <ListItem>
       Visit a Cart page on your Shopify store and click BeginChecout button.
      </ListItem>
      <ListItem>Open browser's developer console.</ListItem>
      <ListItem>
       Confirm that the `custom_begin_checkout` event is fired and the
       `dataLayer` object contains the correct product details.
      </ListItem>
     </UnorderedList>
    </ListItem>
   </OrderedList>
   The custom prefixes added to event names (like 'custom_begin_checkout')
   prevent any conflicts with other possible integrations or plugins that might
   be using standard event names.
  </React.Fragment>
 );
}
