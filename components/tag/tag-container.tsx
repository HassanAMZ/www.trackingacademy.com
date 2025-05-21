"use client";

import { PostMetadata } from "@/types/index";
import { normalizeTag, normalizeTags } from "@/utils/normalizeTags";
import { Filter, Search, Tag as TagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import TagGrid from "./tag-grid";

interface TagContainerProps {
  tags: string[];
  blogsData: PostMetadata[];
}

// Get common tag categories (if applicable to your blog)
const getTagCategories = (tags: string[]) => {
  // This is a simplified example - you can expand based on your blog's needs
  const categories = [
    { name: "All", filter: () => true },
    { name: "Popular", filter: (tag: string, count: number) => count > 3 },
    {
      name: "Technology",
      filter: (tag: string) =>
        ["javascript", "react", "nextjs", "typescript", "programming"].includes(
          tag.toLowerCase(),
        ),
    },
    {
      name: "Design",
      filter: (tag: string) =>
        ["design", "ui", "ux", "css", "tailwind"].includes(tag.toLowerCase()),
    },
    // Add more categories as needed
  ];

  return categories;
};

const TagsContainer: React.FC<TagContainerProps> = ({ tags, blogsData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Normalize tags to prevent case duplicates
  const normalizedTags = normalizeTags(tags);

  // Calculate counts for each tag
  const tagWithCounts = normalizedTags.map((tag) => {
    // When counting blogs, we need to use the normalized version of each tag
    const count = blogsData.filter((blog) =>
      blog.tags.some((blogTag) => normalizeTag(blogTag) === tag),
    ).length;
    return { tag, count };
  });

  // Tag categories for filtering
  const categories = getTagCategories(tags);

  // Filter tags based on search and category
  useEffect(() => {
    const applyFilters = () => {
      let filtered = normalizedTags; // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      } // Apply category filter
      const selectedCategoryObj = categories.find(
        (cat) => cat.name === selectedCategory,
      );
      if (selectedCategoryObj && selectedCategory !== "All") {
        filtered = filtered.filter((tag) => {
          const count = blogsData.filter((blog) =>
            blog.tags.some((blogTag) => normalizeTag(blogTag) === tag),
          ).length;
          return selectedCategoryObj.filter(tag, count);
        });
      }
      setFilteredTags(filtered);
    };
    applyFilters();
  }, [searchTerm, selectedCategory, normalizedTags, blogsData]);

  return (
    <div className="space-y-6">
      <Card className="w-full shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TagIcon className="h-5 w-5 text-primary" />
              <span>Find Tags</span>
            </div>{" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Filter className="h-4 w-4" />
                  <span>{selectedCategory}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => setSelectedCategory(category.name)}
                    className={
                      selectedCategory === category.name ? "bg-muted" : ""
                    }
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </CardTitle>
        </CardHeader>{" "}
        <CardContent>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>{" "}
          {filteredTags.length > 0 ? (
            <p className="text-sm text-muted-foreground mb-4">
              Found {filteredTags.length} tags{" "}
              {searchTerm && `matching "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              No tags found matching your criteria. Try adjusting your search.
            </p>
          )}
        </CardContent>
      </Card>{" "}
      {filteredTags.length > 0 && (
        <TagGrid tags={filteredTags} blogs={blogsData} />
      )}
    </div>
  );
};

export default TagsContainer;
