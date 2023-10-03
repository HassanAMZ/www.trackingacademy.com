import React from "react";

interface NotesProps {
 title: string;
 content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
 return (
  <div className='backgroundOverlay'>
   <strong>{title}</strong>: {content}
  </div>
 );
};

export default Note;
