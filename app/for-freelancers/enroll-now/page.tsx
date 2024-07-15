import EnrollNowForm from "@/components/for-freelancers/enroll-now";
import Offer from "@/components/for-freelancers/offer";
import WorkHistory from "@/components/home/work-history";
import React from "react";

export default function EnrollNow() {
  return (
    <main>
      <EnrollNowForm />
      <WorkHistory />
      <Offer />
    </main>
  );
}
