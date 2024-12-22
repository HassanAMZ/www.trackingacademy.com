import Text from '@/components/ui/text';
import Link from 'next/link';
import React from 'react';

import LearnMore from '@/components/global/LearnMore';
import { TwoGridContentProps } from '@/types/index';

const TwoGridContent: React.FC<TwoGridContentProps> = ({
  learnMoreHeader,
  detailsList,
  primaryLink,
}) => (
  <div className="pb-2">
    <section className="backgroundOverlay p-4 lg:p-10">
      <div className="lg:grid lg:grid-cols-1">
        <div>
          <Text as="h4" variant="headingLg" className="py-2 text-center lg:text-left">
            {learnMoreHeader}
          </Text>
          <LearnMore detailsList={detailsList} />
          <Link
            className="flex w-full items-center justify-center rounded-lg px-6 py-4 font-semibold"
            href={primaryLink.src}
          >
            {primaryLink.text}
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default TwoGridContent;
