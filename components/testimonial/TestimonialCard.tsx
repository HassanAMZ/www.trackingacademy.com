import Image from "next/image";
import { TestimonialCardProps } from "@/types/index";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  person,
  className,
}) => {
  return (
    <section className={`text-center ${(className || "") ?? ""}`}>
      <div className="py-3 text-center">
        <blockquote className="flex h-full flex-col items-center justify-center gap-5 overflow-hidden p-2">
          <span>★★★★★</span>
          <Image
            className="w-20 rounded-full lg:w-32"
            width={person.image.width}
            height={person.image.height}
            src={person.image.src}
            alt={person.image.alt}
          />
          <h6 className="line-clamp-3 text-center font-semibold">
            {person.testimonial}
          </h6>
          <p className="text-sm">{person.position}</p>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialCard;
