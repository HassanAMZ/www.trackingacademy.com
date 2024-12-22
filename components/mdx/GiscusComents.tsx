'use client';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Container from '../ui/container';

function GiscusComments() {
  const pathname = usePathname();
  const { theme } = useTheme();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_GISCUS_SRC || '';
    script.setAttribute('data-repo', process.env.NEXT_PUBLIC_GISCUS_REPO || '');
    script.setAttribute('data-repo-id', process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '');
    script.setAttribute('data-category', process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '');
    script.setAttribute('data-category-id', process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '');
    script.setAttribute('data-mapping', pathname || '');
    script.setAttribute('data-strict', process.env.NEXT_PUBLIC_GISCUS_STRICT || '');
    script.setAttribute(
      'data-reactions-enabled',
      process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED || '',
    );
    script.setAttribute('data-emit-metadata', process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA || '');
    script.setAttribute('data-input-position', process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION || '');

    const giscusTheme =
      theme === 'dark'
        ? process.env.NEXT_PUBLIC_GISCUS_THEME_DARK || 'dark'
        : process.env.NEXT_PUBLIC_GISCUS_THEME_LIGHT || 'light';

    script.setAttribute('data-theme', giscusTheme);

    script.setAttribute('data-lang', process.env.NEXT_PUBLIC_GISCUS_LANG || '');
    script.setAttribute('data-loading', process.env.NEXT_PUBLIC_GISCUS_LOADING || '');

    const commentSection = document.getElementById('comment-section');
    if (commentSection) {
      commentSection.appendChild(script);
    }

    return () => {
      // Cleanup the script element on component unmount
      if (commentSection) {
        commentSection.removeChild(script);
      }
    };
  }, [pathname, theme]); // Added theme as a dependency

  return (
    <Container className="py-12">
      <div id="comment-section"></div>
    </Container>
  );
}

export default GiscusComments;
