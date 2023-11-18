import React from "react";
import {
 Heading3xl,
 Headingxl,
 ListItem,
 OrderedList,
 Paragraphsm,
 UnorderedList,
} from "../typography/Heading";
import Pre from "../mdx/Pre";
import AuthPre from "../mdx/AuthPre";

export default function ViewItemList() {
 return (
  <React.Fragment>
   <Headingxl>Head DataLayer Code</Headingxl>
   <Paragraphsm>
    This code initializes the `dataLayer` array if it hasn't been already. It
    then checks if the current page template is a 'collection' page and renders
    a specific snippet called 'datalayer-collection'.
   </Paragraphsm>
   <AuthPre>
    <code>
     {`<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- if template == 'collection' -%}
  {%- render 'datalayer-collection', collection: collection -%}
{%- endif -%}
`}
    </code>
   </AuthPre>
   <Headingxl>Collection DataLayer Code</Headingxl>
   <OrderedList>
    <ListItem>
     This code snippet contains the main logic for populating the `dataLayer`
     object with product details whenever a collection page is viewed.
    </ListItem>
    <ListItem>
     It constructs an `itemObject` containing various product details.
    </ListItem>
    <ListItem>
     On document load, it pushes this data to the `dataLayer` object.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`<script>
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
`}
    </code>
   </AuthPre>
   <Headingxl> Theme DataLayer Code</Headingxl>
   <Paragraphsm>
    This code renders the `head-datalayer` snippet. Depending on the setup of
    your Shopify theme, this is likely where the head datalayer code resides.
    Add this code below GTM Body Code.
   </Paragraphsm>
   <AuthPre>
    <code>
     {`{% render 'head-datalayer' %}
`}
    </code>
   </AuthPre>
   <Headingxl> Steps to Add the DataLayer Code Snippets in Shopify:</Headingxl>
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
     Add Collection DataLayer Code:
     <UnorderedList>
      <ListItem>
       Click "Add a new snippet" depending on your Shopify version.
      </ListItem>
      <ListItem>Name it `datalayer-collection.liquid`.</ListItem>
      <ListItem>
       Insert the "Collection DataLayer Code" snippet into this new file.
      </ListItem>
      <ListItem>Save changes.</ListItem>
     </UnorderedList>
    </ListItem>
    <ListItem>
     Add Theme DataLayer Code:
     <UnorderedList>
      <ListItem>
       Determine where you want this code to render (usually within the
       {`<head>`} tags in `theme.liquid`).
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
      <ListItem>Visit a product page on your Shopify store.</ListItem>
      <ListItem>Open browser's developer console.</ListItem>
      <ListItem>
       Confirm that the `custom_view_item` event is fired and the `dataLayer`
       object contains the correct product details.
      </ListItem>
     </UnorderedList>
    </ListItem>
   </OrderedList>
   Remember, these instructions assume a typical Shopify setup. Some custom
   themes might require a different approach. Always test thoroughly before and
   after making changes.
  </React.Fragment>
 );
}
