import { DetailsProps } from "@/types/index";
import React from "react";

const LearnMore: React.FC<DetailsProps> = ({ detailsList }) => {
  return (
    <React.Fragment>
      {detailsList.map((detail, index) => (
        <div key={index} className="flex gap-2 py-4">
          <div>
            <div className="bg-accent rounded-full p-2">{detail.icon}</div>
          </div>
          <div className="flex flex-col gap-2 pl-4">
            <p className="font-semibold">
              {detail.header}:&nbsp;
              <span className="font-normal">{detail.details}</span>
            </p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default LearnMore;
