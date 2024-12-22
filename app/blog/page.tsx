import BlogContainer from '@/components/blog/container';
import Container from '@/components/ui/container';
import getBlogsData from 'utils/getBlogsData';

export default async function Page() {
  const data = await getBlogsData('app/blog');

  const sortedData = (await Promise.all(data))
    .filter((item) => item.draft === false)
    .sort((a, b) => b.blogId - a.blogId);

  return (
    <Container>
      <BlogContainer data={sortedData} type={'blog'} />
    </Container>
  );
}
