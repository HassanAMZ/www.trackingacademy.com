import React from "react";
import {
 Heading4xl,
 ListItem,
 OrderedList,
 Paragraphmd,
} from "@/components/typography/Heading";
import AuthPre from "@/components/mdx/AuthPre";
import Note from "@/components/mdx/Note";

export default function TikTokPageView() {
 return (
  <React.Fragment>
   <Paragraphmd>
    Next, we focus on adding the TikTok base configuration tag in GTM. This
    process requires obtaining the TikTok Pixel ID and the base script from your
    TikTok Ads Manager. Once obtained, these are added to GTM as a custom HTML
    tag. For ease of future use, we also create a variable for the TikTok Pixel
    ID.
   </Paragraphmd>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 1: Accessing TikTok Ads Manager
   </Heading4xl>
   <OrderedList>
    <ListItem>Log in to your TikTok Ads Manager account.</ListItem>
    <ListItem>
     If you’re new to TikTok ads, create a new pixel by navigating to the pixel
     section. For existing users, note down your pixel ID.
    </ListItem>
   </OrderedList>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 2: Manual Pixel Setup
   </Heading4xl>
   <OrderedList>
    <ListItem>
     Choose to set up the pixel manually for a more tailored approach.
    </ListItem>
    <ListItem>
     Name your pixel and ensure to bypass any automatic setup options.
    </ListItem>
   </OrderedList>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 3: Adding the Pixel to Google Tag Manager
   </Heading4xl>
   <OrderedList>
    <ListItem>Open your Google Tag Manager dashboard.</ListItem>
    <ListItem>Create a new custom HTML tag.</ListItem>
    <ListItem>Paste the TikTok pixel code into this tag.</ListItem>
    <ListItem>
     Configure the trigger for this tag to fire on all pages, enabling page view
     tracking.
    </ListItem>
   </OrderedList>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 4: Creating a Variable for the Pixel ID
   </Heading4xl>
   <OrderedList>
    <ListItem>In Google Tag Manager, create a new variable.</ListItem>
    <ListItem>Assign your TikTok pixel ID to this variable.</ListItem>
    <ListItem>
     This step ensures ease of updating the pixel ID in the future, maintaining
     consistency across your tracking setup.
    </ListItem>
   </OrderedList>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 5: Testing TikTok Pixel Events
   </Heading4xl>
   <OrderedList>
    <ListItem>
     Use tools like the TikTok Pixel Helper browser extension.
    </ListItem>
    <ListItem>
     Navigate through your Shopify store and verify if the pixel events (like
     page views) are firing correctly.
    </ListItem>
    <ListItem>
     Ensure that all desired events are being tracked accurately.
    </ListItem>
   </OrderedList>

   <Heading4xl className={`!text-2xl py-2 `}>
    Step 6: Publish Your Changes
   </Heading4xl>
   <OrderedList>
    <ListItem>
     After successful testing, go back to Google Tag Manager.
    </ListItem>
    <ListItem>Review your configurations and publish the changes.</ListItem>
    <ListItem>
     This action will make the TikTok pixel live on your Shopify store.
    </ListItem>
   </OrderedList>

   <Paragraphmd>
    By following these steps, you'll have a fully functional TikTok pixel set up
    in your Shopify store, providing valuable insights into your customer's
    interactions and behaviors.
   </Paragraphmd>
  </React.Fragment>
 );
}
