import { FC, memo } from "react";
import Container from "../ui/container";

interface LoomEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
}

const LoomEmbed: FC<LoomEmbedProps> = ({ embedId, className, id }) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  return (
    <Container className={className} id={id}>
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src={`https://www.loom.com/embed/${embedId}`}
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
