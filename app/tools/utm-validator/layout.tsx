import React, { ReactNode } from 'react';

export const metadata = {
  title: 'UTM Validator tool - TrackingAcademy',
  description: `helps you Check and Validate UTM parameters to effectively track traffic acquistion.`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
