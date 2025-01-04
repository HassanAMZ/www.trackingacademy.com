"use client";

import CourseContent from "@/components/courses/CourseContent";
import CourseSearch from "@/components/courses/CourseSearch";
import { CourseContainerProps } from "@/types/index";
import React, { useState } from "react";
import ContainerLayout from "../layouts/ContainerLayout";

const CourseContainer: React.FC<CourseContainerProps> = ({
  data,
  type,
  rawData,
}) => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <ContainerLayout className="flex flex-col gap-2">
      <CourseSearch
        data={data}
        onSearch={(filtered) => setFilteredData(filtered)}
      />
      <CourseContent rawData={rawData} data={filteredData} type={type} />
    </ContainerLayout>
  );
};

export default CourseContainer;
