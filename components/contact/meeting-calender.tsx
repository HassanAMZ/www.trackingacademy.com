"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import Container from "../ui/container";

const MeetingCalendar = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () =>
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "calendly_profile_viewed",
        value: "profile_page_viewed",
      }),
    onDateAndTimeSelected: () =>
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "calendly_date_selected",
        value: "date_and_time_selected",
      }),
    onEventTypeViewed: () =>
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "calendly_event_type_viewed",
        value: "event_type_viewed",
      }),
    onEventScheduled: (e) =>
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "calendly_meeting_scheduled",
        value: "event_scheduled",
        event_data: e.data.payload,
      }),
    onPageHeightResize: (e) =>
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "calendly_page_resize",
        value: "page_height_resize",
        height: e.data.payload.height,
      }),
  });

  return (
    <Container id="book-a-meeting">
      <InlineWidget
        className="calendly-inline-widget min-h-[90vh] w-full"
        url="https://calendly.com/shahzadaalihassan/1-on-1-meeting-with-shahzada?hide_gdpr_banner=1"
      />
    </Container>
  );
};

export default MeetingCalendar;
