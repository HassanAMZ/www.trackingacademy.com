import { BuilderComponent } from '@builder.io/react';
interface BlogBodyProps {
  content: any;
}

export default function BlogBody({ content }: BlogBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <BuilderComponent model={'page'} content={content} />
    </div>
  );
}
