import React from "react";

interface NotesProps {
 title: string;
 content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
 return (
  <div className='rounded-md text-left bg-gray-900 bg-opacity-5 shadow-md p-4'>
   <strong>{title}</strong>: {content}
  </div>
 );
};

export default Note;
