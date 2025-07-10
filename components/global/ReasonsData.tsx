"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Reason {
  id: number;
  title: string;
  paragraph: string;
  imageUrl: string;
}

interface ReasonsDataProps {
  title: string;
  reasons: Reason[];
  intervalTime?: number; // Optional prop to control the interval time
}

const ReasonsData: React.FC<ReasonsDataProps> = ({ title, reasons, intervalTime = 2000 }) => {
  const [activeId, setActiveId] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => (prevId % reasons.length) + 1);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [reasons.length, intervalTime]);

  const handleIdClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <React.Fragment>
      <h2 className="container-secondary text-center text-2xl font-bold">{title}</h2>
      <div className="grid w-full gap-2 py-10 lg:grid-cols-2 lg:gap-4">
        <section className="flex flex-col justify-between gap-2">
          {reasons.map((reason) => (
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
                className={`px-4 text-3xl font-black lg:row-span-2 lg:pr-10 ${
                  activeId === reason.id ? "text-complementary" : "text-dominant"
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
              priority={false}
              src={reasons.find((reason) => reason.id === activeId)!.imageUrl}
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
};

export default ReasonsData;
