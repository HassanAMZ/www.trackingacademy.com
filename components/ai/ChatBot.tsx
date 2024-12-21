import React, { useRef, useState } from 'react';
import { useChat } from 'ai/react';
import { Message } from 'ai';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Send, StopCircle, RotateCcw, Trash2, ImagePlus } from 'lucide-react';
import { AnthropicModels, OpenAiModels } from '@/data/gpt-models';
import AiSystemMessages from '@/data/gpt-system-message';
import Container from '../ui/container';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function ChatBot() {
  const [provider, setProvider] = useState<'anthropic' | 'openai'>('anthropic');
  const [model, setModel] = useState(
    provider === 'anthropic' ? AnthropicModels[0] : OpenAiModels[0],
  );
  const [systemMessage, setSystemMessage] = useState<string>(Object.keys(AiSystemMessages)[0]);
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reload: reloadChat,
    stop,
    setMessages,
  } = useChat({
    body: {
      model,
      provider,
      systemMessage: AiSystemMessages[systemMessage as keyof typeof AiSystemMessages],
    },
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });

  const handleProviderChange = (value: 'anthropic' | 'openai') => {
    setProvider(value);
    setModel(value === 'anthropic' ? AnthropicModels[0] : OpenAiModels[0]);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const handleSystemMessageChange = (value: string) => {
    setSystemMessage(value);
  };

  const handleDelete = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    handleSubmit(e, {
      experimental_attachments: files,
    });
    setFiles(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleReload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reloadChat();
  };

  return (
    <Container className="flex h-screen items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <span>AI Chat</span>
            <div className="flex gap-2">
              <Select value={provider} onValueChange={handleProviderChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="openai">OpenAI</SelectItem>
                </SelectContent>
              </Select>

              <Select value={model} onValueChange={handleModelChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {(provider === 'anthropic' ? AnthropicModels : OpenAiModels).map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={systemMessage} onValueChange={handleSystemMessageChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select personality" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(AiSystemMessages).map((key) => (
                    <SelectItem key={key} value={key}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="h-[500px] space-y-4 overflow-y-auto rounded-lg bg-secondary/10 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex max-w-[80%] flex-col gap-2 ${
                    message.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <Markdown>{message.content}</Markdown>
                  </div>

                  {message.experimental_attachments
                    ?.filter((attachment) => attachment.contentType?.startsWith('image/'))
                    .map((attachment, index) => (
                      <Image
                        key={`${message.id}-${index}`}
                        src={attachment.url}
                        alt={`${attachment.name}`}
                        className="max-w-[200px] rounded-lg"
                        width={1920}
                        height={1080}
                      />
                    ))}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(message.id)}
                    className="opacity-50 hover:opacity-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center gap-2 text-destructive">
                <p>An error occurred. Please try again.</p>
                <Button onClick={handleReload} variant="outline" size="sm">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retry
                </Button>
              </div>
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="flex gap-2">
            <Input
              type="file"
              onChange={(e) => setFiles(e.target.files || undefined)}
              ref={fileInputRef}
              className="hidden"
              multiple
              accept="image/*"
            />

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImagePlus className="h-4 w-4" />
            </Button>

            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />

            {isLoading ? (
              <Button type="button" onClick={stop} variant="destructive">
                <StopCircle className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={!input && !files}>
                <Send className="h-4 w-4" />
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
