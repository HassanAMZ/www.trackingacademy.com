import {
 CourseMetadata,
 CourseMetadataProps,
 PostMetadata,
 PostMetadataProps,
} from "@/types/index";

const gtmCategoriesFromBlogs = ({ metadata }: PostMetadataProps) => {
 const sortedTags = [...metadata.tags].sort();
 let categories: { [key: string]: string } = {};

 if (sortedTags.length <= 5) {
  sortedTags.forEach((tag, index) => {
   let key = index === 0 ? "item_category" : `item_category${index + 1}`;
   categories[key] = tag;
  });
 } else {
  for (let i = 0; i < 4; i++) {
   let key = i === 0 ? "item_category" : `item_category${i + 1}`;
   categories[key] = sortedTags[i];
  }
  categories["item_category5"] = sortedTags.slice(4).join(", ");
 }

 return categories;
};
const gtmCategoriesFromCourses = ({ metadata }: CourseMetadataProps) => {
 const sortedTags = [...metadata.tags].sort();
 let categories: { [key: string]: string } = {};

 if (sortedTags.length <= 5) {
  sortedTags.forEach((tag, index) => {
   let key = index === 0 ? "item_category" : `item_category${index + 1}`;
   categories[key] = tag;
  });
 } else {
  for (let i = 0; i < 4; i++) {
   let key = i === 0 ? "item_category" : `item_category${i + 1}`;
   categories[key] = sortedTags[i];
  }
  categories["item_category5"] = sortedTags.slice(4).join(", ");
 }

 return categories;
};

const initDataLayer = () => {
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
  ecommerce: null,
  event: "cleanup",
  datalayer_event_name: "ecommerce_null",
 });
};

const createItemFromBlog = (metadata: PostMetadata) => {
 const categories = gtmCategoriesFromBlogs({ metadata });
 return {
  item_id: metadata.blogId,
  item_name: metadata.title,
  date: metadata.date,
  item_description: metadata.description.slice(0, 20),
  ...categories,
 };
};
const createItemFromCourses = (metadata: CourseMetadata) => {
 const categories = gtmCategoriesFromCourses({ metadata });
 return {
  item_id: metadata.courseId,
  item_name: metadata.title,
  date: metadata.date,
  item_description: metadata.description.slice(0, 20),
  ...categories,
 };
};

export {
 createItemFromBlog,
 createItemFromCourses,
 initDataLayer,
 gtmCategoriesFromBlogs,
 gtmCategoriesFromCourses,
};
