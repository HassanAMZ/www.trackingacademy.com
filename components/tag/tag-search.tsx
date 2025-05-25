"use client";

import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

interface TagSearchProps {
  tags: string[];
  onSearch: (filteredTags: string[]) => void;
}

const TagSearch: React.FC<TagSearchProps> = ({ tags, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const filtered = tags.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      onSearch(filtered);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, tags, onSearch]);

  return (
    <div className="relative mb-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="text-muted-foreground h-4 w-4" />
        </div>
        <Input
          type="search"
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10"
        />
      </div>
      {searchTerm && (
        <p className="text-muted-foreground mt-2 text-sm">
          Showing results for "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default TagSearch;
