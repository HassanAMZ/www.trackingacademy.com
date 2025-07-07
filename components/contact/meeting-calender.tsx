"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Script from "next/script";
import { useEffect } from "react";
import Container from "../ui/container";

const MeetingCalendar = () => {
  useEffect(() => {
    const handlePostMessage = (event: { data: { datalayer_event_name: any } }) => {
      if (event.data && event.data.datalayer_event_name) {
        const eventName = event.data.datalayer_event_name;
        console.log("Received postMessage:", event.data);

        // Only process specific iClosed events
        const allowedEvents = [
          "iclosed_view",
          "iclosed_potential",
          "iclosed_qualified",
          "iclosed_disqualified",
          "iclosed_call_scheduled",
        ];

        if (allowedEvents.includes(eventName)) {
          sendGTMEvent({
            event: "gtm_custom_event",
            datalayer_event_name: eventName,
          });
        }
      }
    };

    window.addEventListener("message", handlePostMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  return (
    <>
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("iClosed widget script loaded successfully");
        }}
      />
      <Container id="book-a-meeting">
        <div
          className="iclosed-widget h-full w-full"
          data-url="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
          title="1-on-1 meeting with Shahzada"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Container>
    </>
  );
};

export default MeetingCalendar;
