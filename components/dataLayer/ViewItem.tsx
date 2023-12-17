import React from "react";
import {
 Headingxl,
 ListItem,
 Paragraphmd,
 OrderedList,
 Heading4xl,
} from "@/components/typography/Heading";
import AuthPre from "@/components/mdx/AuthPre";
import Note from "@/components/mdx/Note";

export default function ViewItem() {
 return (
  <React.Fragment>
   <Heading4xl className={`!text-2xl py-2 `}>Head DataLayer Code</Heading4xl>
   <Paragraphmd>
    This code initializes the `dataLayer` array if it hasn't been already. It
    then checks if the current page template is a 'product' page and renders a
    specific snippet called 'datalayer-product'.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- if template contains 'product' -%}
  {%- render 'datalayer-product', product: product -%}
{%- endif -%}
`}
    </code>
   </AuthPre>
   <Heading4xl className={`!text-2xl py-2 `}>Product DataLayer Code</Heading4xl>
   <OrderedList>
    <ListItem>
     This code snippet contains the main logic for populating the `dataLayer`
     object with product details whenever a product page is viewed:
    </ListItem>
    <ListItem>It first captures the current variant of the product.</ListItem>
    <ListItem>
     It constructs an `itemObject` containing various product details.
    </ListItem>
    <ListItem>
     On document load, it pushes this data to the `dataLayer` object.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`{%- liquid assign current_variant = product.selected_or_first_available_variant -%}

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
      <span className='font-bold'>Add Product DataLayer Code: </span>
      Click "Add a new snippet" depending on your Shopify version. Name it
      `datalayer-product.liquid`. Insert the "Product DataLayer Code" snippet
      into this new file. Save changes.
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
   <Note
    title={"Remember"}
    content={`These instructions assume a typical Shopify setup. Some custom
   themes might require a different approach. Always test thoroughly before and
   after making changes.`}
   />
  </React.Fragment>
 );
}
