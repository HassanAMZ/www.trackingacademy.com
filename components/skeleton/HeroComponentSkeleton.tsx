import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";

const HeroComponentSkeleton: React.FC = () => {
  return (
    <ContainerLayout>
      <div className="backgroundOverlay flex animate-pulse flex-col space-y-4 px-5 py-20 lg:p-14">
        {/* Skeleton for image group */}
        <div className="flex">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-8 w-8 rounded-full bg-gray-300"></div>
          ))}
        </div>

        {/* Skeleton for headings and text */}
        <div className="space-y-2">
          <div className="h-12 w-3/4 rounded bg-gray-300"></div>
          <div className="h-12 w-3/5 rounded bg-gray-300"></div>
          <div className="h-6 w-1/2 rounded bg-gray-300"></div>
          <div className="h-6 rounded bg-gray-300"></div>
        </div>

        {/* Skeleton for buttons */}
        <div className="flex space-x-4">
          <div className="h-10 w-24 rounded bg-gray-300"></div>
          <div className="h-10 w-24 rounded bg-gray-300"></div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default HeroComponentSkeleton;
