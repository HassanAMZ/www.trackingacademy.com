import React from "react";
import { Paragraphmd, Headingxl } from "@/components/typography/Heading";

interface NotesProps {
 title: string;
 content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
 return (
  <div className='py-2'>
   <div className='p-2 lg:p-4 bg-complementary rounded-md '>
    <Paragraphmd className='text-dominant'>
     <strong>{title}:&nbsp; </strong>
     <span className=''>{content}</span>
    </Paragraphmd>
   </div>
  </div>
 );
};

export default Note;
