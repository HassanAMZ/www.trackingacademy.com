import React from "react";
import {
 Headingxl,
 ListItem,
 OrderedList,
 Paragraphsm,
} from "../typography/Heading";
import AuthPre from "../mdx/AuthPre";
import Note from "../mdx/Note";

export default function ConfiguringGTM() {
 return (
  <React.Fragment>
   <Paragraphsm>
    This guide walks you through the process of configuring Google Tag Manager
    on your Shopify store, enabling effective tracking and management of TikTok
    Ads.
   </Paragraphsm>

   <Headingxl>Setting Up Google Tag Manager Scripts</Headingxl>
   <Paragraphsm>
    First, add the Google Tag Manager scripts to your Shopify store. These
    scripts are critical for tracking user interactions and collecting valuable
    data.
   </Paragraphsm>
   <Headingxl>Head GTM Code</Headingxl>

   <AuthPre>
    <code>
     {`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->`}
    </code>
   </AuthPre>
   <Headingxl>Body GTM Code</Headingxl>

   <AuthPre>
    <code>
     {`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
    </code>
   </AuthPre>
   <Headingxl>Inserting GTM Container Codes</Headingxl>
   <Paragraphsm>
    Next, insert the head and body scripts from the Google Tag Manager container
    into your Shopify store’s theme files.
   </Paragraphsm>
   <OrderedList>
    <ListItem>
     Locate and open the theme.liquid file in your Shopify admin.
    </ListItem>
    <ListItem>
     Paste the GTM container head script right after the opening {"<head>"} tag.
    </ListItem>
    <ListItem>
     Paste the GTM container body script immediately after the opening{" "}
     {"<body>"} tag.
    </ListItem>
   </OrderedList>

   <Headingxl>Validating the Setup</Headingxl>
   <Paragraphsm>
    After inserting the scripts, it’s important to validate the setup to ensure
    that Google Tag Manager is functioning correctly on your Shopify store.
   </Paragraphsm>

   <Headingxl>Steps for Configuring GTM on Shopify:</Headingxl>
   <OrderedList>
    <ListItem>
     Log in to your Shopify admin panel and navigate to the Themes section.
    </ListItem>
    <ListItem>Select your active theme and click on 'Edit code'.</ListItem>
    <ListItem>
     Find the theme.liquid file and insert the GTM scripts as instructed above.
    </ListItem>
    <ListItem>
     Save your changes and test the setup using the GTM preview mode.
    </ListItem>
   </OrderedList>

   <Headingxl>Integrating TikTok Ads and Pixel Tracking</Headingxl>
   <Paragraphsm>
    The first step in integrating TikTok Ads and Pixel Tracking is configuring
    the Google Tag Manager on your Shopify store. This process involves a few
    critical steps:
   </Paragraphsm>

   <Headingxl>Adding Scripts to Your Shopify Store</Headingxl>
   <Paragraphsm>
    To begin, you need to add the head and body scripts from Google Tag Manager
    to your Shopify store. This can be done by accessing the Google Tag Manager
    container to retrieve these scripts. Remember, while only the head script is
    essential, including both ensures thorough implementation.
   </Paragraphsm>

   <Headingxl>Locating the Theme File for Tracking</Headingxl>
   <Paragraphsm>
    The next step is to locate and edit your theme file in Shopify. This file is
    typically the first or second file listed in your theme directory. Once
    located, insert the Google Tag Manager scripts under the opening head tag
    and the opening body tag of your theme file.
   </Paragraphsm>

   <Headingxl>Formatting and Saving Changes</Headingxl>
   <Paragraphsm>
    After pasting the scripts, it's important to format the changes using the
    'Format Liquid' feature in Shopify. This ensures the code is properly
    structured, making it more readable and less prone to errors.
   </Paragraphsm>

   <Headingxl>Previewing Google Tag Manager</Headingxl>
   <Paragraphsm>
    To ensure that everything is set up correctly, use the Google Tag Manager’s
    preview function. This will allow you to verify that the container is firing
    correctly on your Shopify store.
   </Paragraphsm>

   <Paragraphsm>
    This setup ensures that Google Tag Manager is properly configured in your
    Shopify store, laying the groundwork for other Analytics and Ads tracking
    and optimization.
   </Paragraphsm>
   <Note
    title={"Note"}
    content={
     "Remember to replace 'GTM-XXXX' with your actual Google Tag Manager container ID."
    }
   />
  </React.Fragment>
 );
}
