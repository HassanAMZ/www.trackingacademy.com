'use client';

import React, { useState, useEffect } from 'react';
import { PostMetadata } from '@/types/index';
import { BlogSearchProps } from '@/types/index';
import { usePathname, useParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import RequestABlogForm from './request-a-blog';

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<PostMetadata[]>(data);
  useEffect(() => {
    const searchWords = searchTerm
      .toLowerCase()
      .split(' ')
      .filter((word) => word);
    const filtered = data.filter((post) => {
      const matchesSearchTerm = searchWords.every(
        (word) =>
          post.title.toLowerCase().includes(word) ||
          post.description.toLowerCase().includes(word) ||
          post.tags.some((tag) => tag.toLowerCase().includes(word)),
      );

      return matchesSearchTerm;
    });

    setResults(filtered);
    onSearch(filtered);
  }, [searchTerm]);

  const formatText = (text?: string) => {
    if (text) {
      return text.replace(/-/g, ' ');
    }
    return '';
  };

  const pathname = usePathname();
  const isRootBlogPage = pathname === '/blog';
  const params = useParams<{ blog?: string; tag?: string }>();
  const displayText = formatText(params.blog || params.tag);

  return (
    <Card className="rounded-t-lg">
      <CardHeader>
        <Text as="h1" variant="heading3xl" className="text-center">
          {!isRootBlogPage && displayText && <span className="capitalize">{displayText} - </span>}
          Articles, Ideas and Inspiration!
        </Text>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Text as="p" variant="bodyMd" className="text-center">
          A helpful blog for web analysts, trying to make sense of marketing with{' '}
          {!isRootBlogPage && displayText && <span className="capitalize">{displayText}, </span>}
          tag manager, analytics and tracking scripts.
        </Text>
        {isRootBlogPage && (
          <div className="relative mt-4 flex w-full max-w-md items-center">
            <Input
              type="text"
              placeholder="Search for a post..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-12"
            />
            <Button className="absolute right-0 top-0 h-full w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        )}
        {results.length === 0 && (
          <div className="mt-6 flex flex-col items-center">
            <span role="img" aria-label="Thinking face" className="text-6xl">
              😭
            </span>
            <Text as="p" variant="bodyMd" className="mt-4 text-center">
              We couldn't find any posts matching your search '{searchTerm}'.
              <span role="img" aria-label="Shrug">
                {' '}
                🤷‍♂️
              </span>
              Request a blog on this topic and get notified when it's published:
            </Text>
            <RequestABlogForm searchTerm={searchTerm} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogSearch;
