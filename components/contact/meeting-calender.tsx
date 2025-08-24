"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect, useRef } from "react";
import Container from "../ui/container";

type IClosedEventName =
  | "iclosed_view"
  | "iclosed_potential"
  | "iclosed_qualified"
  | "iclosed_disqualified"
  | "iclosed_call_scheduled";

interface IClosedEvent {
  datalayer_event_name: IClosedEventName;
}

const MeetingCalendar = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and inject the script dynamically
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    script.type = "text/javascript";

    // Append to document head
    document.head.appendChild(script);

    // Cleanup: remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const handlePostMessage = (event: MessageEvent<IClosedEvent>) => {
      if (event.data && event.data.datalayer_event_name) {
        const eventName = event.data.datalayer_event_name;

        // Only process specific iClosed events
        const allowedEvents: IClosedEventName[] = [
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
    <section id="book-a-meeting">
      <Container className="min-h-[300px] w-full">
        <div
          className="iclosed-widget"
          data-url="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
          title="1-on-1 meeting with Shahzada"
          style={{ width: "100%", height: "620px" }}
        />
      </Container>
    </section>
  );
};

export default MeetingCalendar;
