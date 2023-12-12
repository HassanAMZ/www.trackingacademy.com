import React from "react";
import {
 Heading3xl,
 Headingxl,
 ListItem,
 OrderedList,
 Paragraphmd,
 UnorderedList,
} from "../typography/Heading";
import Pre from "../mdx/Pre";
import AuthPre from "../mdx/AuthPre";

export default function ViewItemList() {
 return (
  <React.Fragment>
   <Headingxl>Head DataLayer Code</Headingxl>
   <Paragraphmd>
    This code initializes the `dataLayer` array if it hasn't been already. It
    then checks if the current page template is a 'collection' page and renders
    a specific snippet called 'datalayer-collection'.
   </Paragraphmd>
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
   <Paragraphmd>
    This code snippet contains the main logic for populating the `dataLayer`
    object with product details whenever a collection page is viewed. It
    constructs an `itemObject` containing various product details. On document
    load, it pushes this data to the `dataLayer` object.
   </Paragraphmd>
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
   <Paragraphmd>
    This code renders the `head-datalayer` snippet. Depending on the setup of
    your Shopify theme, this is likely where the head datalayer code resides.
    Add this code below GTM Body Code.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`{% render 'head-datalayer' %}
`}
    </code>
   </AuthPre>
   <Headingxl> Steps to Add the DataLayer Code Snippets in Shopify:</Headingxl>
   <Paragraphmd>
    Backup Before making any changes, always backup your current theme.
   </Paragraphmd>
   <Paragraphmd>
    Access Theme Files Login to your Shopify Admin. Go to Online Store {">"}{" "}
    Themes. Click on the "Actions" dropdown for your live theme and select "Edit
    code".
   </Paragraphmd>
   <Paragraphmd>
    Add Head DataLayer Code In the left sidebar, locate and click on
    `theme.liquid`. Insert the "Head DataLayer Code" snippet within the
    {"<head>"} tags.
   </Paragraphmd>
   <Paragraphmd>
    Add Collection DataLayer Code Click "Add a new snippet" depending on your
    Shopify version. Name it `datalayer-collection.liquid`. Insert the
    "Collection DataLayer Code" snippet into this new file. Save changes.
   </Paragraphmd>
   <Paragraphmd>
    Add Theme DataLayer Code Determine where you want this code to render
    (usually within the {"<head>"} tags in `theme.liquid`). Insert the "Theme
    DataLayer Code" snippet in the desired location. Save changes.
   </Paragraphmd>
   <Paragraphmd>
    Test Visit a product page on your Shopify store. Open browser's developer
    console. Confirm that the `custom_view_item` event is fired and the
    `dataLayer` object contains the correct product details.
   </Paragraphmd>
   <Paragraphmd>
    Remember, these instructions assume a typical Shopify setup. Some custom
    themes might require a different approach. Always test thoroughly before and
    after making changes.
   </Paragraphmd>
  </React.Fragment>
 );
}
