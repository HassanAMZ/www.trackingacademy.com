"use client";

import React, { useEffect, useRef } from "react";
import Container from "../ui/container";

const MeetingCalender = ({ type = "hubspot" }) => {
  const hubspotContainerRef = useRef(null);

  // Get prefill data from localStorage
  const getPrefillDataFromStorage = () => {
    try {
      return {
        firstName: localStorage.getItem("first_name") || "",
        lastName: localStorage.getItem("last_name") || "",
        email: localStorage.getItem("email_address") || "",
        phone: localStorage.getItem("phone_number") || "",
      };
    } catch (error) {
      console.warn("Could not access localStorage:", error);
      return {};
    }
  };

  useEffect(() => {
    if (type === "hubspot") {
      // Load HubSpot script dynamically
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;

      // Append script to head
      document.head.appendChild(script);

      // Cleanup function to remove script when component unmounts or type changes
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [type]);

  const renderCalendar = () => {
    if (type === "hubspot") {
      // Get prefill data from localStorage
      const prefillData = getPrefillDataFromStorage();

      // Build query string from localStorage data
      const queryParams = new URLSearchParams();

      // Map localStorage data to HubSpot field names
      if (prefillData.firstName)
        queryParams.set("firstname", prefillData.firstName);
      if (prefillData.lastName)
        queryParams.set("lastname", prefillData.lastName);
      if (prefillData.email) queryParams.set("email", prefillData.email);
      if (prefillData.phone) queryParams.set("phone", prefillData.phone);

      const queryString = queryParams.toString();
      const hubspotUrl = `https://meetings.hubspot.com/shahzada-ali?embed=true${queryString ? "&" + queryString : ""}`;

      return (
        <div
          ref={hubspotContainerRef}
          className="meetings-iframe-container min-h-[75vh] w-full rounded-lg"
          data-src={hubspotUrl}
        />
      );
    }

    // Default to Google Calendar
    return (
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
        className="min-h-[75vh] w-full rounded-lg"
        title="Google Calendar"
      />
    );
  };

  return (
    <Container>
      <div className="flex w-full items-center justify-center rounded-lg">
        {renderCalendar()}
      </div>
    </Container>
  );
};

export default MeetingCalender;
