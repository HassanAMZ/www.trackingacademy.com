"use client";

import React, { useState } from "react";
import CourseSearch from "@/components/courses/CourseSearch";
import CourseContent from "@/components/courses/CourseContent";
import { CourseContainerProps } from "@/types/index";
import ContainerLayout from "../layouts/ContainerLayout";

const CourseContainer: React.FC<CourseContainerProps> = ({
 data,
 type,
 rawData,
}) => {
 const [filteredData, setFilteredData] = useState(data);

 return (
  <ContainerLayout className='flex flex-col gap-2'>
   <CourseSearch
    data={data}
    onSearch={(filtered) => setFilteredData(filtered)}
   />
   <CourseContent rawData={rawData} data={filteredData} type={type} />
  </ContainerLayout>
 );
};

export default CourseContainer;
