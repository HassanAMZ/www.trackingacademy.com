'use client';

import React, { useEffect } from 'react';
import { initDataLayer } from 'utils/gtmAnalytics';

interface GTMCustomEventProps {
 eventName: string;
 eventDetails?: { [key: string]: any };
 userData?: { [key: string]: any };
}

const GTMCustomEvent: React.FC<GTMCustomEventProps> = ({
 eventName,
 eventDetails,
 userData,
}) => {
 useEffect(() => {
  initDataLayer();

  const eventPayload = {
   event: 'gtm_custom_event',
   datalayer_event_name: eventName,
   ...(userData ? { user_data: userData } : {}),
   ...(eventDetails ? { event_details: eventDetails } : {}),
  };

  window.dataLayer.push(eventPayload);
 }, [eventName, eventDetails, userData]);

 return null;
};

export { GTMCustomEvent };
