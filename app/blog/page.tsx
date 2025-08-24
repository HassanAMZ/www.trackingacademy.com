import CategoryContainer from "@/components/blog/category-container";
import Container from "@/components/ui/container";
import getBlogsData from "utils/getBlogsData";

// Revalidate every hour for fresh content
export const revalidate = 3600;

export default async function Page() {
  const data = await getBlogsData("app/_blog-markdown");
  const sortedData = (await Promise.all(data))
    .filter((item) => item.draft === false)
    .sort((a, b) => b.blogId - a.blogId);

  return (
    <Container>
      <CategoryContainer data={sortedData} type={"blog"} />
    </Container>
  );
}
