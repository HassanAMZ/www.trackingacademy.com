import Navbar from '@/components/global/navbar';
import OfferAnalyzer from '@/components/tools/offer-analyzer';
import OfferCreator from '@/components/tools/offer-creator';
import React from 'react';

export default function page() {
  return (
    <div className="space-y-2">
      <Navbar />
      {/* <OfferAnalyzer /> */}
      <OfferCreator />
    </div>
  );
}
