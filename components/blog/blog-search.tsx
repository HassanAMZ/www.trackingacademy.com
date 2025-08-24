"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PostMetadata } from "@/types/index";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import RequestABlogForm from "./request-a-blog";
import YouTubeMetricsSuspense from "./youtube-metrics-suspense";
import { Search, FileText, Tag, Calendar, TrendingUp } from "lucide-react";

interface BlogSearchProps {
  data: PostMetadata[];
  onSearch?: (filtered: PostMetadata[]) => void; // Make optional
}

// Custom debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<PostMetadata[]>(data);

  // Debounce search term to reduce performance impact
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoize search results to avoid unnecessary recalculations
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return data;
    }

    const searchWords = debouncedSearchTerm
      .toLowerCase()
      .split(" ")
      .filter((word) => word);

    return data.filter((post) => {
      const matchesSearchTerm = searchWords.every(
        (word) =>
          post.title.toLowerCase().includes(word) ||
          post.description.toLowerCase().includes(word) ||
          post.tags.some((tag) => tag.toLowerCase().includes(word)),
      );
      return matchesSearchTerm;
    });
  }, [debouncedSearchTerm, data]);

  // Update results when search results change
  useEffect(() => {
    setResults(searchResults);
    // Only call onSearch if it's provided
    if (onSearch) {
      onSearch(searchResults);
    }
  }, [searchResults, onSearch]);

  const formatText = (text?: string) => {
    if (text) {
      return text;
    }
    return "";
  };

  const pathname = usePathname();
  const isRootBlogPage = pathname === "/blog";
  const params = useParams<{ blog?: string; tag?: string }>();
  const displayText = formatText(params.blog || params.tag);

  // Memoize stats calculations to avoid recalculating on every render
  const stats = useMemo(() => {
    const totalPosts = data.length;
    const videoPosts = data.filter((post) => post.embedId && post.embedId.trim() !== "").length;
    const uniqueTags = new Set(data.flatMap((post) => post.tags)).size;

    return { totalPosts, videoPosts, uniqueTags };
  }, [data]);

  return (
    <div className="mb-8 w-full rounded-lg border bg-card p-6">
      {/* Header Section */}
      <div className="mb-6 border-b border-border/50 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Blog Search</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{stats.totalPosts} articles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              <span>{stats.uniqueTags} topics</span>
            </div>
            {stats.videoPosts > 0 && (
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <span>{stats.videoPosts} videos</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 py-4">
        <div className="flex flex-col space-y-4">
          {/* Benefit-Driven Title and Description */}
          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <h1>
              {!isRootBlogPage && displayText && (
                <span className="text-primary capitalize">{displayText} - </span>
              )}
              Master Digital Marketing & Analytics Blogs
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Transform your business with proven tracking strategies, GTM mastery, and data-driven
              insights. Join thousands of marketers who've increased conversions by 300%+ using our
              methods.
            </p>
          </div>

          {/* Search Bar */}
          {isRootBlogPage && (
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for posts, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-border/50 bg-background/50 py-4 pr-12 pl-12 text-lg transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchTerm("")}
                    className="absolute top-1/2 right-3 h-7 w-7 -translate-y-1/2 transform rounded-full p-0 hover:bg-muted"
                  >
                    ×
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Search Results Summary */}
          {searchTerm && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Found <span className="font-semibold text-foreground">{results.length}</span> result
                {results.length !== 1 ? "s" : ""} for "{searchTerm}"
              </p>
            </div>
          )}

          {/* No Results Section */}
          {results.length === 0 && searchTerm && (
            <div className="mt-8 flex flex-col items-center rounded-lg border border-border/50 bg-muted/30 p-6">
              <span role="img" aria-label="Thinking face" className="mb-4 text-4xl">
                😭
              </span>
              <div className="space-y-3 text-center">
                <h3 className="text-lg font-semibold text-foreground">
                  No posts found for "{searchTerm}"
                </h3>
                <p className="max-w-md text-muted-foreground">
                  We couldn't find any posts matching your search.
                  <span role="img" aria-label="Shrug" className="ml-1">
                    🤷‍♂️
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Request a blog on this topic and get notified when it's published:
                </p>
                <div className="pt-2">
                  <RequestABlogForm searchTerm={searchTerm} />
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Stats Grid */}
          {!searchTerm && (
            <div className="mt-8 space-y-6">
              {/* Main Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Total Articles</span>
                  </div>
                  <div className="text-xl font-bold text-primary">{stats.totalPosts}</div>
                </div>
                <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Topics Covered</span>
                  </div>
                  <div className="text-xl font-bold text-primary">{stats.uniqueTags}</div>
                </div>
                <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-muted-foreground">Video Tutorials</span>
                  </div>
                  <div className="text-xl font-bold text-primary">{stats.videoPosts}</div>
                </div>
                {stats.videoPosts > 0 && <YouTubeMetricsSuspense />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
