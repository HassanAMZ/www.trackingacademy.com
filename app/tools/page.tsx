import ToolsHeroSection from '@/components/tools/ToolsHeroSection';
import getTools from 'utils/getTools';

export default async function Page() {
  const toolNames = await getTools();

  return (
    <div className="flex flex-col gap-2">
      <ToolsHeroSection />
    </div>
  );
}
