import React from "react";
import Container from "../ui/container";

const GoogleCalender = () => {
  return (
    <div>
      <Container className="max-w-5xl">
        <div className="flex w-full items-center justify-center rounded-lg">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
            className="min-h-[75vh] w-full rounded-lg border"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default GoogleCalender;
