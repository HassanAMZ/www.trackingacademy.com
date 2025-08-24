"use client";

import { Button } from "@/components/ui/button";
import { PostMetadata } from "@/types/index";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

interface BlogPaginationProps {
  data: PostMetadata[];
  type: string;
  onPageChange: (posts: PostMetadata[]) => void;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ data, type, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const POSTS_PER_PAGE = 12;

  const totalPages = Math.ceil(data.length / POSTS_PER_PAGE);
  const hasMorePosts = currentPage < totalPages;
  const remainingPosts = data.length - currentPage * POSTS_PER_PAGE;

  const loadMorePosts = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    const nextPage = currentPage + 1;
    const postsToShow = data.slice(0, nextPage * POSTS_PER_PAGE);
    setCurrentPage(nextPage);
    onPageChange(postsToShow);
    setIsLoading(false);
  };

  if (!hasMorePosts) {
    return null;
  }

  return (
    <div className="mt-12 text-center">
      <Button
        onClick={loadMorePosts}
        disabled={isLoading}
        className="bg-primary px-8 py-3 text-base font-medium transition-colors hover:bg-primary/90 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          `Load More Posts (${remainingPosts} remaining)`
        )}
      </Button>

      {/* Progress indicator */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {Math.min(currentPage * POSTS_PER_PAGE, data.length)} of {data.length} posts
      </div>
    </div>
  );
};

export default BlogPagination;
