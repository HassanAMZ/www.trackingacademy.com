// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import Container from "@/components/ui/container";
// import { ArrowRight, CheckCircle } from "lucide-react";
// import Image from "next/image";
// import { ReactElement, useState } from "react";
// import type React from "react";

// // TypeScript interfaces for props
// interface OfferItem {
//   title?: string;
//   description?: string;
//   icon?: ReactElement;
//   benefits?: string[];
//   image?: string;
//   price?: string;
// }

// interface OfferDetailsProps {
//   headerTitle?: string;
//   headerDescription?: string;
//   offerItems?: OfferItem[];
// }

// const OfferDetails: React.FC<OfferDetailsProps> = ({
//   headerTitle,
//   headerDescription,
//   offerItems = [],
// }) => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="py-16 relative">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
//       <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform origin-top-right" />

//       <Container className="relative z-10">
//         {/* Header Section */}
//         {headerTitle && (
//           <div className="mb-16 text-center">
//             <Badge
//               variant="outline"
//               className="mb-4 px-4 py-1 border-primary/20 bg-primary/5"
//             >
//               Premium Solutions
//             </Badge>
//             <h2 className="mb-4 text-4xl font-bold tracking-tight">
//               {headerTitle}
//             </h2>
//             {headerDescription && (
//               <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
//                 {headerDescription}
//               </p>
//             )}
//           </div>
//         )}

//         {/* Premium Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {offerItems.map((item, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-xl border border-border/40 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Decorative corner accent */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />

//               {/* Card content */}
//               <div className="p-6 h-full flex flex-col">
//                 {/* Icon and title */}
//                 <div className="flex items-center mb-4">
//                   {item.icon && item.icon}
//                   <h3 className="font-semibold text-xl">{item.title}</h3>
//                 </div>

//                 {/* Description */}
//                 {item.description && (
//                   <p className="text-muted-foreground mb-6">
//                     {item.description}
//                   </p>
//                 )}

//                 {/* Image with overlay */}
//                 {item.image && (
//                   <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title || "Offer"}
//                       fill
//                       className={`object-cover transition-transform duration-700 ${
//                         hoveredCard === index ? "scale-110" : "scale-100"
//                       }`}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     {item.price && (
//                       <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium">
//                         Value: {item.price}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Benefits */}
//                 {item.benefits && item.benefits.length > 0 && (
//                   <div className="space-y-3 mt-auto">
//                     <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
//                       Key Benefits
//                     </h4>
//                     <ul className="space-y-2">
//                       {item.benefits.map((benefit, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <CheckCircle className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
//                           <span className="text-sm">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Learn more button */}
//                 <Button
//                   variant="ghost"
//                   className="mt-6 w-full justify-between group-hover:bg-primary/10 transition-colors"
//                 >
//                   <span>Learn more</span>
//                   <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default OfferDetails;
"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import type React from "react";

// TypeScript interfaces for props
interface OfferItem {
  title?: string;
  description?: string;
  icon?: ReactElement;
  benefits?: string[];
  image?: string;
  price?: string;
}

interface OfferDetailsProps {
  headerTitle?: string;
  headerDescription?: string;
  offerItems?: OfferItem[];
}

const OfferDetails: React.FC<OfferDetailsProps> = ({
  headerTitle,
  headerDescription,
  offerItems = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === offerItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? offerItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const activeItem = offerItems[activeIndex];

  return (
    <section className="py-16 overflow-hidden">
      <Container className="space-y-4">
        {/* Header Section */}
        {headerTitle && (
          <div className=" text-center">
            <h2>{headerTitle}</h2>
            {headerDescription && (
              <p className="max-w-3xl mx-auto text-muted-foreground">
                {headerDescription}
              </p>
            )}
          </div>
        )}

        {/* Showcase Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {offerItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx < activeIndex ? "left" : "right");
                  setActiveIndex(idx);
                }}
                className={`w-3 h-3 transition-all ${idx === activeIndex ? "bg-primary w-8" : "bg-muted"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className=" h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Service Selection */}
        <div className="py-4 md:flex hidden flex-row gap-4">
          {offerItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx < activeIndex ? "left" : "right");
                setActiveIndex(idx);
              }}
              className={`p-4 text-center rounded-lg transition-all ${
                idx === activeIndex
                  ? "bg-primary/10 border-primary border shadow-md"
                  : "bg-card hover:bg-muted/50 border border-border/50"
              }`}
            >
              {item.icon && item.icon}
              <span
                className={`text-sm font-medium ${idx === activeIndex ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Showcase */}
        <div className="relative bg-gradient-to-br from-primary/5 to-background p-8 border border-border/50 ">
          {activeItem && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Content Section - 3 columns */}
              <div
                className={`lg:col-span-3 py-8 space-y-8 transition-all duration-500 ${
                  isAnimating
                    ? direction === "right"
                      ? "translate-x-10 opacity-0"
                      : "-translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  {activeItem.icon && activeItem.icon}
                  <h2 className="line-clamp-1">{activeItem.title}</h2>
                </div>

                {activeItem.description && (
                  <p className="text-muted-foreground line-clamp-1">
                    {activeItem.description}
                  </p>
                )}

                {activeItem.benefits && activeItem.benefits.length > 0 && (
                  <div className="space-y-4 mt-6">
                    <h4>What you'll get:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeItem.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="mr-3 mt-1 p-1 rounded-full bg-primary/20">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.price && (
                  <div className="mt-8">
                    <div className="inline-block bg-primary text-primary-foreground rounded-lg px-6 py-2 text-lg font-semibold">
                      Total Value: {activeItem.price}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Button className="px-8 py-6 text-lg rounded-lg">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Image Section - 2 columns */}
              <div
                className={`lg:col-span-2 transition-all duration-500 ${
                  isAnimating
                    ? direction === "right"
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                {activeItem.image && (
                  <div className="relative h-80 w-full overflow-hidden shadow transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                    <Image
                      src={activeItem.image || "/placeholder.svg"}
                      alt={activeItem.title || "Offer visualization"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5  translate-y-1/2 -translate-x-1/2" />
        </div>
      </Container>
    </section>
  );
};

export default OfferDetails;
