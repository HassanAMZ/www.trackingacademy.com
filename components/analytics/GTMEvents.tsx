"use client";

import React, { useEffect } from "react";

const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ecommerce: null,
    event: "cleanup",
    datalayer_event_name: "ecommerce_null",
  });
};

export interface GTMCustomEventProps {
  event_name: string;
  event_details?: { [key: string]: any };
  user_data?: { [key: string]: any };
}

const GTMCustomEvent: React.FC<GTMCustomEventProps> = ({
  event_name,
  event_details,
  user_data,
}) => {
  useEffect(() => {
    initDataLayer();
    const eventPayload = {
      event: "gtm_custom_event",
      datalayer_event_name: event_name,
      ...(user_data ? { user_data: user_data } : {}),
      ...(event_details ? { event_details: event_details } : {}),
    };
    window.dataLayer.push(eventPayload);
  }, [event_name, event_details, user_data]);

  return null;
};

export { GTMCustomEvent };
