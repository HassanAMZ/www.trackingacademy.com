'use client';

import ChatBot from '@/components/ai/ChatBot';
import Navbar from '@/components/global/navbar';
import AiSystemMessages from '@/data/gpt-system-message';

export default function Page() {
  let model = 'gpt-4o';
  let systemMessage = AiSystemMessages.UpworkModel01;
  return (
    <>
      <Navbar />
      <ChatBot />
    </>
  );
}
