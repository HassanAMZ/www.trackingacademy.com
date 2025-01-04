// TagSearch.tsx
"use client";
import { TagSearchProps } from "@/types/index"; // Ensure you have this type
import React, { useEffect, useState } from "react";

const TagSearch: React.FC<TagSearchProps> = ({ tags, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = tags.filter((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    onSearch(results);
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search for a tag..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-complementary mb-2 rounded-lg border p-2"
      />
    </div>
  );
};

export default TagSearch;
