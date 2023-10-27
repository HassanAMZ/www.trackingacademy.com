// sendBlogViewEvent.ts
"use client";

import { PostMetadata, PostMetadataProps } from "@/types/index";
import {
 GTMBlogViewProps,
 GTMBlogListViewEventProps,
 GTMCourseListViewEventProps,
} from "@/types/index";
import React, { useEffect } from "react";
import {
 initDataLayer,
 createItemFromBlog,
 gtmCategoriesFromBlogs,
 createItemFromCourses,
 gtmCategoriesFromCourses,
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

  const item = createItemFromBlog(metadata); // Use utility function

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_blog",
   event_id: Date.now(),
   ecommerce: {
    items: [item],
   },
  });
 }, [metadata]);

 return null;
};

const GTMBlogListViewEvent: React.FC<GTMBlogListViewEventProps> = ({
 blogList,
}) => {
 useEffect(() => {
  initDataLayer();

  const items = blogList.map((blog) => createItemFromBlog(blog));

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_blog_list",
   event_id: Date.now(),
   ecommerce: {
    items,
   },
  });
 }, [blogList]);

 return null;
};
const GTMCourseListViewEvent: React.FC<GTMCourseListViewEventProps> = ({
 courseList,
}) => {
 useEffect(() => {
  initDataLayer();

  const items = courseList.map((course) => createItemFromCourses(course));

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_item_list",
   event_id: Date.now(),
   ecommerce: {
    items,
   },
  });
 }, [courseList]);

 return null;
};

const GTMSignInFailedEvent: React.FC<{ error: any }> = ({ error }) => {
 useEffect(() => {
  initDataLayer();
  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signin_failed",
   error_message: error,
  });
 }, [error]);

 return null;
};
const GTMSignInSuccessEvent: React.FC<{ user: any }> = ({ user }) => {
 useEffect(() => {
  initDataLayer();
  const userData = {
   id: user.uid || undefined,
   phone: user.providerData[0]?.phoneNumber || undefined,
   email: user.email || undefined,
   address: {
    city: undefined, // Assuming address info is not available
    state: undefined,
    country: undefined,
    postal_code: undefined,
    first_name: user.displayName ? user.displayName.split(" ")[0] : undefined,
    last_name: user.displayName ? user.displayName.split(" ")[1] : undefined,
   },
  };

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signin_successful",
   user_data: userData,
  });
 }, [user]);

 return null;
};

const GTMSignOutEvent: React.FC<{ user: any }> = ({ user }) => {
 useEffect(() => {
  initDataLayer();

  const userData = {
   id: user.uid || undefined,
   phone: user.providerData[0]?.phoneNumber || undefined,
   email: user.email || undefined,
   address: {
    city: undefined, // Assuming address info is not available
    state: undefined,
    country: undefined,
    postal_code: undefined,
    first_name: user.displayName ? user.displayName.split(" ")[0] : undefined,
    last_name: user.displayName ? user.displayName.split(" ")[1] : undefined,
   },
  };
  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signout",
   user_data: userData,
  });
 }, []);

 return null; // This component doesn't render anything
};

export {
 GTMBlogViewEvent,
 GTMBlogListViewEvent,
 GTMCalendlyEvent,
 GTMSignOutEvent,
 GTMCourseListViewEvent,
 GTMSignInFailedEvent,
 GTMSignInSuccessEvent,
};
