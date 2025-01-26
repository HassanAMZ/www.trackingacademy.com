"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Reason {
  id: number;
  title: string;
  paragraph: string;
  imageUrl: string;
}

const reasonsData: Reason[] = [
  {
    id: 1,
    title: "Comprehensive Analytics Training",
    paragraph:
      "Master the fundamentals of analytics with our structured courses designed for all skill levels. Learn how to make data-driven decisions to boost your business growth.",
    imageUrl: "/images/for-businesses/reason-data-001.png",
  },
  {
    id: 2,
    title: "Advanced Tag Manager Workshops",
    paragraph:
      "Dive deep into Google Tag Manager with our hands-on workshops. Learn how to set up, manage, and troubleshoot tags efficiently to ensure accurate data tracking.",
    imageUrl: "/images/for-businesses/reason-data-002.png",
  },
  {
    id: 3,
    title: "Expert Tracking Implementation",
    paragraph:
      "Gain practical skills in implementing and optimizing tracking solutions. Our training covers everything from basic setup to advanced tracking strategies.",
    imageUrl: "/images/for-businesses/reason-data-003.png",
  },
  {
    id: 4,
    title: "Interactive Reporting Techniques",
    paragraph:
      "Learn how to create and interpret insightful reports that drive action. Our courses teach you to use various tools to generate reports that are clear and actionable.",
    imageUrl: "/images/for-businesses/reason-data-004.png",
  },
];

export default function ReasonsData() {
  const [activeId, setActiveId] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => (prevId % reasonsData.length) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleIdClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <React.Fragment>
      <h2 className="container-secondary text-center text-2xl font-bold">
        4 Reasons Why You Should Enroll in Our Analytics and Tracking Courses
      </h2>
      <div className="grid w-full gap-2 py-10 lg:grid-cols-2 lg:gap-4">
        <section className="flex flex-col justify-between gap-2">
          {reasonsData.map((reason) => (
            <div
              key={reason.id}
              className={`flex cursor-pointer items-center rounded-lg border-2 px-4 py-8 transition-colors duration-300 ${
                activeId === reason.id
                  ? "text-complementary bg-accent"
                  : "bg-complementary hover:text-complementary"
              } hover:text-complementary hover:bg-accent`}
              onClick={() => handleIdClick(reason.id)}
            >
              <p
                className={`px-4 text-3xl font-bold lg:row-span-2 lg:pr-10 ${
                  activeId === reason.id
                    ? "text-complementary"
                    : "text-dominant"
                }`}
              >
                {reason.id}
              </p>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{reason.title}</h3>
                {activeId === reason.id && (
                  <p className="col-span-2 pb-2 text-sm lg:col-span-1 lg:pt-2">
                    {reason.paragraph}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
        <section className="grid items-center justify-center rounded-lg pt-2">
          {activeId !== null && (
            <Image
              src={
                reasonsData.find((reason) => reason.id === activeId)!.imageUrl
              }
              alt="Reason Image"
              width={1080}
              height={1080}
              className="mx-auto aspect-square w-1/2 rounded-lg lg:w-full"
            />
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
