import React from "react";
import TagsContainer from "@/components/tag/TagsContainer";
import getBlogAndTagsData from "utils/getBlogAndTagsData";
import Footer from "@/components/footer/Footer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NavBar from "@/components/navbar/Navbar";

export default async function Page() {
 const { tags, blogs } = await getBlogAndTagsData();

 return (
  <div className='flex flex-col gap-2'>
   <TagsContainer tags={tags} type='tag' blogsData={blogs} />
  </div>
 );
}
