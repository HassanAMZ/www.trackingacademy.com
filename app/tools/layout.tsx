import React, { ReactNode } from "react";

export const metadata = {
  title: "Tools - TrackingAcademy",
  description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <>{children}</>
    </React.Fragment>
  );
}
