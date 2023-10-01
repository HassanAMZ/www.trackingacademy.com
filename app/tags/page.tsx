import React from "react";
import TagsContainer from "@/components/tag/TagsContainer";
import getBlogAndTagsData from "@/components/utils/getBlogAndTagsData";

export default async function Page() {
 const { tags, blogs } = await getBlogAndTagsData();

 return (
  <div className='flex flex-col gap-2'>
   <TagsContainer tags={tags} type='tag' blogsData={blogs} />
  </div>
 );
}
