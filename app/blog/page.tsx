import getBlogsData from "utils/getBlogsData";
import CategoryContainer from "@/components/blog/category-container";
import Container from "@/components/ui/container";

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
