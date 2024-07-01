// sendBlogViewEvent.ts
'use client';

import React, { useEffect } from 'react';
import { initDataLayer } from 'utils/gtmAnalytics';

interface GTMCustomEventProps {
 eventName: string;
 eventDetails: Array<{ [key: string]: any }>;
}

const GTMCustomEvent: React.FC<GTMCustomEventProps> = ({
 eventName,
 eventDetails,
}) => {
 useEffect(() => {
  initDataLayer();

  const eventPayload = {
   event: 'gtm_custom_event',
   datalayer_event_name: eventName,
   ...eventDetails.reduce((acc, detail) => ({ ...acc, ...detail }), {}),
  };

  window.dataLayer.push(eventPayload);
 }, [eventName, eventDetails]);

 return null;
};

export { GTMCustomEvent };
