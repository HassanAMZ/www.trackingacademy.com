import React from "react";
import { Paragraphmd, Headingxl } from "@/components/typography/Heading";

interface NotesProps {
 title: string;
 content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
 return (
  <div id='noteMdxComponents' className=''>
   <div className='backgroundOverlay p-2 md:p-4 '>
    <Paragraphmd>
     <strong>{title}:&nbsp; </strong>
     <span className='textOpacity80'>{content}</span>
    </Paragraphmd>
   </div>
  </div>
 );
};

export default Note;
