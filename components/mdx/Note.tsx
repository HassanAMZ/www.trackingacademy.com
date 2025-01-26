import React from "react";

interface NotesProps {
  title: string;
  content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
  return (
    <div className="py-2">
      <div className="bg-complementary rounded-lg p-2 lg:p-4">
        <p className="text-dominant">
          <strong>{title}:&nbsp; </strong>
          <span>{content}</span>
        </p>
      </div>
    </div>
  );
};

export default Note;
