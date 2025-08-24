"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function CallBookedClient() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const email = queryParams.get("invitee_email");
    const fullName = queryParams.get("invitee_full_name") || "";
    const phone = queryParams.get("text_reminder_number") || "";
    const city = queryParams.get("city") || "";
    const country = queryParams.get("country") || "";
    const userId = queryParams.get("invitee_uuid") || "";

    const [firstName = "", lastName = ""] = fullName.split(" ");

    if (email) localStorage.setItem("email_address", decodeURIComponent(email));
    if (firstName) localStorage.setItem("first_name", decodeURIComponent(firstName));
    if (lastName) localStorage.setItem("last_name", decodeURIComponent(lastName));
    if (phone) localStorage.setItem("phone_number", decodeURIComponent(phone));
    if (city) localStorage.setItem("city", decodeURIComponent(city));
    if (country) localStorage.setItem("country", decodeURIComponent(country));
    if (userId) localStorage.setItem("user_id", decodeURIComponent(userId));

    const hasScheduled = sessionStorage.getItem("gtm_schedule_triggered");
    if (!hasScheduled) {
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "schedule",
        user_data: {
          id: userId,
          email,
          phone,
          address: {
            firstName,
            lastName,
          },
        },
      });
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "generate_lead",
        user_data: {
          id: userId,
          email,
          phone,
          address: {
            firstName,
            lastName,
          },
        },
      });
      sessionStorage.setItem("gtm_schedule_triggered", "true");
    }
  }, []);

  return null; // This component doesn't render anything, it just handles side effects
}
