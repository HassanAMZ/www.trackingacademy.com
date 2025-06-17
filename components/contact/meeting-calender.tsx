"use client";

import React, { useEffect, useRef } from "react";
import Container from "../ui/container";

const MeetingCalender = ({ type = "google" }) => {
  const hubspotContainerRef = useRef(null);

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
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;

      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [type]);

  const renderCalendar = () => {
    if (type === "hubspot") {
      const prefillData = getPrefillDataFromStorage();

      const queryParams = new URLSearchParams();

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
