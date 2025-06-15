import { FC, memo } from "react";
import Container from "../ui/container";

interface LoomEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
  backgroundImage?: string;
  hideControls?: boolean;
}

const LoomEmbed: FC<LoomEmbedProps> = ({
  embedId,
  className,
  id,
  backgroundImage,
  hideControls = true,
}) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  const buildEmbedUrl = (id: string, hideControls: boolean) => {
    const baseUrl = `https://www.loom.com/embed/${id}`;

    if (!hideControls) {
      return baseUrl;
    }

    const params = new URLSearchParams({
      hide_owner: "true",
      hide_top_bar: "true",
      hide_title: "true",
      hide_video_source: "true",
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <Container className={className} id={id}>
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          paddingTop: "56.25%",
          ...(backgroundImage && {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }),
        }}
      >
        <iframe
          src={buildEmbedUrl(embedId, hideControls)}
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded Loom Video"
        />
      </div>
    </Container>
  );
};

export default memo(LoomEmbed);
