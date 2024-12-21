import Navbar from '@/components/global/navbar';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import getFolderData from '@/utils/getFolderData';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
  const folders = await getFolderData('app/career');

  // Filter out pages that include "thank-you" or "join-the-team" in the slug
  const filteredFolders = folders.filter(
    (folder) => !folder.slug.includes('thank-you') && !folder.slug.includes('join-the-team'),
  );

  return (
    <div>
      <Container className="space-y-5 py-4">
        <Text as="h1" className="text-center" variant="heading3xl">
          Active Jobs
        </Text>
        <div className="space-y-4">
          {filteredFolders.map((folder) => (
            <Button asChild key={folder.id}>
              <Link href={`/career/${folder.slug}`}>{folder.title}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
}
