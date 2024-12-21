'use client';

import React, { useState, useEffect } from 'react';
import { CourseSearchProps } from '@/types/index';

const CourseSearch: React.FC<CourseSearchProps> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = data.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    onSearch(results);
  }, [searchTerm]); // only react to searchTerm changes

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-complementary mb-2 rounded-lg border-2 bg-transparent p-2"
      />
    </div>
  );
};

export default CourseSearch;
