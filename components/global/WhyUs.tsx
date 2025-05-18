// LearnMoreHeader.tsx

import { WhyUsProps } from "@/types/index"; // make sure to use the actual path

import Link from "next/link";
import React from "react";

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
            <h4 className="py-2">{headingTexts.heading}</h4>
          )}
          {paragraphTexts && (
            <h4>
              {paragraphTexts.primary}
              <span>{paragraphTexts.secondary}</span>
            </h4>
          )}
        </div>
        <button className="bg-complementary rounded-lg border-2 border-gray-100 p-2 text-left">
          <Link className="text-accent font-semibold" href={links.primary.src}>
            {links.primary.text}
          </Link>
        </button>
      </section>
    </React.Fragment>
  );
};

export default WhyUs;
