"use client";
import React, { useState } from "react";
import SingleCourseCard from "@/components/courses/SingleCourseCard";
import { CourseContentProps } from "@/types/index";
import { Headingxl } from "@/components/typography/Heading";

const CourseContent: React.FC<CourseContentProps> = ({
 data,
 type,
 rawData,
}) => {
 const [visiblePosts, setVisiblePosts] = useState(9); // Display first 9 courses by default

 const mainCoursePost = rawData?.find((course) => course.courseId === "00001")!;
 const visibleCourseLinks = data.slice(0, visiblePosts).map((course, index) => (
  <React.Fragment key={index}>
   <SingleCourseCard course={course} type={type} />
  </React.Fragment>
 ));

 const loadMoreHandler = () => {
  setVisiblePosts((prevValue) => prevValue + 9); // Load 9 more courses
 };

 return (
  <React.Fragment>
   {/* <SingleCourseCard isMain={true} course={mainCoursePost} type={type} /> */}
   <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>
    {visibleCourseLinks}
   </div>
   {visiblePosts < data.length && (
    <button
     onClick={loadMoreHandler}
     className='bg-gray-800 border  py-2 px-4 rounded'>
     <Headingxl>Load More Courses</Headingxl>
    </button>
   )}
  </React.Fragment>
 );
};

export default CourseContent;
