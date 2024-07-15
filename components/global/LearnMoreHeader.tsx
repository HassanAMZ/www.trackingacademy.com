// LearnMoreHeader.tsx

import React from "react";
import { LearnMoreHeaderProps } from "@/types/index"; // make sure to use the actual path

const LearnMoreHeader: React.FC<LearnMoreHeaderProps> = ({ headingTexts }) => {
  if (!headingTexts.heading && !headingTexts.subHeading) return null;

  return (
    <div className="learnMoreHeader container-secondary space-y-2 py-8 text-center">
      {headingTexts.heading && (
        <div className="py-2 text-2xl font-bold">{headingTexts.heading}</div>
      )}
      {headingTexts.subHeading && (
        <div className="text-center">{headingTexts.subHeading}</div>
      )}
    </div>
  );
};

export default LearnMoreHeader;
