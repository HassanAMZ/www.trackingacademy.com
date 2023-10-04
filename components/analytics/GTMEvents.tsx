// sendBlogViewEvent.ts
"use client";

import { PostMetadata, PostMetadataProps } from "@/types/index";
import { GTMBlogViewProps, GTMBlogListViewEventProps } from "@/types/index";
import React, { useEffect } from "react";
import {
 initDataLayer,
 createItem,
 gtmCategories,
} from "@/components/utils/gtmAnalytics";
import { useCalendlyEventListener } from "react-calendly";

const GTMCalendlyEvent: React.FC = () => {
 useCalendlyEventListener({
  onProfilePageViewed: () => {
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({
    event: "gtm_custom_event",
    datalayer_event_name: "calendly_profile_page_viewed",
   });
  },
  onDateAndTimeSelected: () => {
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({
    event: "gtm_custom_event",
    datalayer_event_name: "calendly_date_and_time_selected",
   });
  },
  onEventTypeViewed: () => {
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({
    event: "gtm_custom_event",
    datalayer_event_name: "calendly_event_type_viewed",
   });
  },
  onEventScheduled: (e) => {
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({
    event: "gtm_custom_event",
    datalayer_event_name: "calendly_event_scheduled",
    payload: e.data.payload,
   });
  },
 });

 return <React.Fragment />;
};

const GTMBlogViewEvent: React.FC<GTMBlogViewProps> = ({ metadata }) => {
 useEffect(() => {
  initDataLayer(); // Use utility function

  const item = createItem(metadata); // Use utility function

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_blog",
   event_id: Date.now(),
   ecommerce: {
    items: [item],
   },
  });
 }, [metadata]);

 return <React.Fragment></React.Fragment>;
};

const GTMBlogListViewEvent: React.FC<GTMBlogListViewEventProps> = ({
 blogList,
}) => {
 useEffect(() => {
  initDataLayer();

  const items = blogList.map((blog) => createItem(blog));

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_blog_list",
   event_id: Date.now(),
   ecommerce: {
    items,
   },
  });
 }, [blogList]);

 return <React.Fragment></React.Fragment>;
};

export { GTMBlogViewEvent, GTMBlogListViewEvent, GTMCalendlyEvent };
