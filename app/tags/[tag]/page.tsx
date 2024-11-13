import React from "react";
import formatString from "utils/formatString";
import BlogContainer from "@/components/blog/container";

import getTagsData from "utils/getTagsData";

export default async function Page(props: {
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;
  let tag = params.tag;
  const data = await getTagsData();
  // Filter blogs based on the tag if tag is present in the query params
  const filteredData = tag
    ? data.filter((post) => post.tags?.some((t) => formatString(t) === tag))
    : data;
  return (
    <div className="flex flex-col gap-2">
      <BlogContainer rawData={data} data={filteredData} type="blog" />
    </div>
  );
}
