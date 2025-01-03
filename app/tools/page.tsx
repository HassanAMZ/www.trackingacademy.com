import ToolsHeroSection from '@/components/tools/ToolsHeroSection';
import Container from '@/components/ui/container';
import getTools from 'utils/getTools';

export default async function Page() {
  const toolNames = await getTools();

  return (
    <Container className="flex flex-col gap-2">
      <ToolsHeroSection />
    </Container>
  );
}
