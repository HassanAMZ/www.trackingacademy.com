import React, { FC, memo } from 'react';

interface YoutubeEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId, className, id }) => {
  if (!embedId || embedId === 'null' || embedId === 'undefined') {
    return null;
  }

  return (
    <div className={className} id={id}>
      <div
        className='relative overflow-hidden rounded-lg'
        style={{ paddingTop: '56.25%' }}>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg'
          src={`https://www.youtube.com/embed/${embedId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded Youtube Video'
        />
      </div>
    </div>
  );
};

export default memo(YoutubeEmbed);
