import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
const clientImages = [
  "/images/clients/001.svg",
  "/images/clients/003.svg",
  "/images/clients/004.svg",
  "/images/clients/005.svg",
  "/images/clients/002.svg",
  "/images/clients/006.svg",
];

export default function WorkHistory() {
  return (
    <Container className="grid grid-cols-3 items-center justify-center gap-2 lg:grid-cols-6">
      {clientImages.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-secondary object-contain filter"
        >
          <Image
            src={image}
            alt={`Client ${index}`}
            width={1920}
            height={540}
            className="scale-125 brightness-200 grayscale filter"
          />
        </div>
      ))}
    </Container>
  );
}
