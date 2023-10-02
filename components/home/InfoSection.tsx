import React from "react";
import { InfoSectionProps } from "@/types/index";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import ExpertInfo from "@/components/home/ExpertInfo";

const InfoSection: React.FC<InfoSectionProps> = ({
 title,
 description,
 embedId,
 testimonial,
 className,
 id,
 flexDirection = "flex-col",
 backgroundOverlay = false,
}) => {
 return (
  <ContainerLayout className={className} id={id}>
   <div
    className={`sm:pb-10 flex ${flexDirection} sm:flex-row flex-col gap-2 p-2 ${
     backgroundOverlay ? "backgroundOverlay" : ""
    } `}>
    <section className='sm:w-1/2 w-full'>
     <ExpertInfo title={title} description={description} />
    </section>
    <section className='flex justify-center flex-col sm:w-1/2 w-full'>
     {embedId && <YoutubeEmbed embedId={embedId} />}
     {testimonial && (
      <p className='hidden sm:flex py-1 text-left text-base'>{testimonial}</p>
     )}
    </section>
   </div>
  </ContainerLayout>
 );
};

export default InfoSection;
