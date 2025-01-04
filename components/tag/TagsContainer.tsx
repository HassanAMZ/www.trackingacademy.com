// TagsContainer.tsx
"use client";
import TagContent from "@/components/tag/TagContent";
import TagSearch from "@/components/tag/TagSearch";
import { TagContainerProps } from "@/types/index"; // Ensure you have this type
import React, { useState } from "react";

const TagsContainer: React.FC<TagContainerProps> = ({
  tags,
  type,
  blogsData,
}) => {
  const [filteredTags, setFilteredTags] = useState(tags);
  return (
    <div className="flex flex-col gap-2">
      <TagSearch
        tags={tags}
        onSearch={(filtered) => setFilteredTags(filtered)}
      />
      <TagContent tags={filteredTags} type={type} blogsData={blogsData} />
    </div>
  );
};

export default TagsContainer;
