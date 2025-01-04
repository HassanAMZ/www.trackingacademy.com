import Image from "next/image";
import React from "react";

import { SingleGridContentProps } from "@/types/index";

const SingleGridContent: React.FC<SingleGridContentProps> = ({
  imagesData,
  headingTexts,
  paragraphTexts,
}) => {
  return (
    <section className="bg-dominant text-complementary grid rounded-lg p-6 lg:p-12">
      <div className="order-1 flex w-full items-center justify-center">
        {imagesData && (
          <Image
            alt={imagesData.alt}
            src={imagesData.src}
            width={imagesData.width}
            height={imagesData.height}
          />
        )}
      </div>
      <div className="py-4">
        <h4 className="pb-2 text-xl font-bold lg:pb-4">
          {headingTexts.heading}
        </h4>
        {paragraphTexts && (
          <p className="py-1 font-semibold">
            {paragraphTexts?.primary}&nbsp;
            <span className="textOpacity80 font-normal">
              {paragraphTexts?.secondary}
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default SingleGridContent;
