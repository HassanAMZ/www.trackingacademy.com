"use client";

import React, { useState, useMemo } from "react";
import {
  BlogContentProps,
  CategoryContainerProps,
  PostMetadata,
} from "@/types/index";
import BlogSearch from "@/components/blog/search";
import SingleBlogCard from "@/components/blog/single-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactMe from "./contact-me";

const BlogContent: React.FC<BlogContentProps> = ({
  data,
  type,
  rawData,
  featuredPostId,
}) => {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const remainingPosts = data.slice(0, visiblePosts);

  const featuredPost = useMemo(
    () => data.find((post) => post.blogId === featuredPostId),
    [data, featuredPostId],
  );

  const loadMoreHandler = () => {
    setVisiblePosts((prevValue) => prevValue + 9);
  };

  return (
    <div className="space-y-8">
      {featuredPost && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Featured Post</h2>
          <SingleBlogCard post={featuredPost} type={type} isMain={true} />
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {remainingPosts.map((post, index) => (
          <SingleBlogCard post={post} type={type} key={index} />
        ))}
      </div>
      {visiblePosts < data.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMoreHandler}>Load More Posts</Button>
        </div>
      )}
    </div>
  );
};

const CategoryContainer: React.FC<CategoryContainerProps> = ({
  data,
  type,
  rawData,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const allTags = data.flatMap((post) => post.tags);
    const uniqueTags = ["All", ...new Set(allTags)];
    return uniqueTags.slice(0, 6); // Limit to 6 categories including "All"
  }, [data]);

  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((post) => post.tags.includes(category)));
    }
  };

  return (
    <div className="space-y-8">
      <BlogSearch
        data={data}
        onSearch={(filtered) => setFilteredData(filtered)}
      />
      <div className="grid gap-2 lg:grid-cols-[1fr,250px]">
        <Tabs defaultValue="All" className="col-span-1 col-start-1 w-full">
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => filterByCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeCategory}>
            <BlogContent
              rawData={rawData}
              data={filteredData}
              type={type}
              featuredPostId={1}
            />
          </TabsContent>
        </Tabs>
        <ContactMe />
      </div>
    </div>
  );
};

export default CategoryContainer;
