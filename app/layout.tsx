import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ThemeProvider } from '@/components/global/theme-provider';
import Navbar from '@/components/global/navbar';
import { AuthContextProvider } from './context/AuthContext';
import GTMAnalytics from '@/components/analytics/GTMAnalytics';
import VercelAnalytics from '@/components/analytics/VercelAnalytics';
import CanonicalTag from '@/components/seo/CanonicalTag';
import { ReactNode, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrackingAcademy - Top Rated Web Analytics Agency',
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <Navbar />

            {children}
          </ThemeProvider>

          <Suspense>
            <GTMAnalytics />
            <VercelAnalytics />
            <CanonicalTag />
            <SpeedInsights />
          </Suspense>
        </AuthContextProvider>
      </body>
    </html>
  );
}
