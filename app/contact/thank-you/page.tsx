import { GTMContactFormSubmission } from "@/components/analytics/GTMEvents";
import ThankYou from "@/components/contact/ThankYou";
import React from "react";

const Page = () => {
 return (
  <>
   <iframe
    src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true'
    style={{ border: 0, width: "100%", height: "100vh" }}
    frameBorder='0'></iframe>
   {/* <ThankYou /> */}
   <GTMContactFormSubmission />
  </>
 );
};

export default Page;
