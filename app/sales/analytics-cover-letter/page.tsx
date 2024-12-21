'use client';

import AiSystemMessages from '@/data/gpt-system-message';
import { useChat } from 'ai/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
import Markdown from 'react-markdown';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/global/navbar';
import Text from '@/components/ui/text';
import ChatBot from '@/components/ai/ChatBot';

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
