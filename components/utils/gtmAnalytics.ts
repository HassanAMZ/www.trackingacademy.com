import { PostMetadata, PostMetadataProps } from "@/types/index";

const gtmCategories = ({ metadata }: PostMetadataProps) => {
 const sortedTags = [...metadata.tags].sort();
 let categories: { [key: string]: string } = {};
 if (sortedTags.length <= 4) {
  sortedTags.forEach((tag, index) => {
   categories[`category_${index + 1}`] = tag;
  });
 } else {
  for (let i = 0; i < 4; i++) {
   categories[`category_${i + 1}`] = sortedTags[i];
  }
  categories["category_5"] = sortedTags.slice(4).join(", ");
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

const createItem = (metadata: PostMetadata) => {
 const categories = gtmCategories({ metadata });
 return {
  id: metadata.blogId,
  name: metadata.title,
  date: metadata.date,
  description: metadata.description.slice(0, 20),
  ...categories,
 };
};

export { createItem, initDataLayer, gtmCategories };
