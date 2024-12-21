'use client';
import { PreProps } from '@/types/index';
import { useRef, useState } from 'react';

const Pre: React.FC<PreProps> = ({ language, children }) => {
  const textInput = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current!.textContent!);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="rounded border-2 border-primary">
      <div className="relative flex items-center justify-between bg-primary px-4 py-2 text-accent">
        <span>{language}</span>
        <button onClick={onCopy} className="ml-auto flex items-center gap-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-sm h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
          {copied ? 'Code Copied!' : 'Copy code'}
        </button>
      </div>
      <div className="overflow-y-auto p-4" ref={textInput}>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default Pre;
