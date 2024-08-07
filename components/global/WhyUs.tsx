// LearnMoreHeader.tsx

import React from "react";
import Text from "@/components/ui/text";

import { LearnMoreHeaderProps, WhyUsProps } from "@/types/index"; // make sure to use the actual path
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";

const WhyUs: React.FC<WhyUsProps> = ({
  links,
  headingTexts,
  paragraphTexts,
}) => {
  if (!headingTexts.heading && !headingTexts.subHeading) return null;

  return (
    <React.Fragment>
      <section className="bg-dominant text-complementary space-y-5 rounded-lg px-5 py-12 lg:px-20 lg:py-16">
        <div className="space-y-2 text-left">
          {headingTexts.heading && (
            <Text as="h4" variant="headingLg" className="py-2">
              {headingTexts.heading}
            </Text>
          )}
          {paragraphTexts && (
            <Text as="h4" variant="headingLg">
              {paragraphTexts.primary}
              <span>{paragraphTexts.secondary}</span>
            </Text>
          )}
        </div>
        <button className="bg-complementary rounded-lg border-2 border-gray-100 p-2 text-left">
          <Link className="font-semibold text-accent" href={links.primary.src}>
            {links.primary.text}
          </Link>
        </button>
      </section>
    </React.Fragment>
  );
};

export default WhyUs;
