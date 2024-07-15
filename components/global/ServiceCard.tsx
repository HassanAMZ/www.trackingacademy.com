import CustomLink from "@/components/mdx/CustomLink";
import Image from "next/image";

import type { ServiceCardProps } from "@/types/index";
import Link from "next/link";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  let formattedDescription = service.description.replace(/\n/g, "<br>");
  return (
    <>
      <div className="relative aspect-[4/3] max-w-full sm:h-auto">
        <Image
          className="rounded-lg"
          width={1000}
          height={750}
          src={service.featured_image_url}
          alt={service.title}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-left">
        <h3 className="line-clamp-2 py-1 font-medium">{service.title}</h3>
        <Link
          href={`/services/${service.id}`}
          className="backgroundOverlay w-full border !py-3 font-medium"
        >
          View Details&nbsp;
          <span aria-hidden="true">&nbsp; &rarr; </span>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
