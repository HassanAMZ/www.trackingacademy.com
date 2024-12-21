import React from 'react';
import getTools from 'utils/getTools';
import ToolsHeroSection from '@/components/tools/ToolsHeroSection';

export default async function Page() {
  const toolNames = await getTools();

  return (
    <div className="flex flex-col gap-2">
      <ToolsHeroSection />
    </div>
  );
}
