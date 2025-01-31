import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import { HeroProps } from "@/types/index";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

const HeroComponent: React.FC<HeroProps> = ({ textGroup, links, images }) => {
  return (
    <React.Fragment>
      <section className="text-complementary bg-dominant relative flex h-full flex-col items-center justify-center rounded-lg shadow-sm lg:h-[80vh]">
        {images?.background?.desktop && (
          <Image
            alt="Shahzada Ali Hassan"
            src={images.background.desktop}
            height={1080}
            width={1920}
            className="hidden opacity-75 sm:block"
          />
        )}
        {images?.background?.mobile && (
          <Image
            alt="Mountains"
            src={images.background.mobile}
            height={1080}
            width={1920}
            className="block object-right-bottom opacity-50 sm:hidden"
          />
        )}
        <div className="relativ z-10 flex flex-col items-start justify-center px-4 py-20 sm:px-8 lg:px-14 lg:py-24">
          <aside className="space-y-5 pb-6">
            {images.group?.list && (
              <div className="relative h-10 w-10">
                {images.group.list.map((image, index) => (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    key={index}
                    className={`absolute rounded-full opacity-90 ${
                      index === 0 ? "left-0 top-0 z-10" : ""
                    } ${index === 1 ? "left-4 top-0 z-20" : ""} ${
                      index === 2 ? "left-8 top-0 z-30" : ""
                    } ${index === 3 ? "left-12 top-0 z-30" : ""} `}
                  />
                ))}
              </div>
            )}
            {textGroup.welcomeText && (
              <p className="text-left">{textGroup.welcomeText}</p>
            )}
            {textGroup.heading && (
              <h1 className="text-3xl font-bold">{textGroup.heading}</h1>
            )}
            {textGroup.subHeading && (
              <div>
                <p className="text-xl font-bold">
                  {textGroup.subHeading.one}
                  <span className="font-normal">
                    {textGroup.subHeading.two}
                  </span>
                </p>
              </div>
            )}
          </aside>

          <div className="flex gap-2 text-lg">
            <Link href={links.primary.src} className="link-primary">
              {links.primary.text}
            </Link>
            {links.secondary && (
              <Link href={links.secondary.src} className="link-secondary">
                {links.secondary.text}
              </Link>
            )}
          </div>
        </div>
      </section>
      {textGroup.learnMore && (
        <LearnMoreHeader
          headingTexts={{
            heading: textGroup.learnMore.heading,
            subHeading: textGroup.learnMore.subHeading,
          }}
        />
      )}
    </React.Fragment>
  );
};

export default HeroComponent;
