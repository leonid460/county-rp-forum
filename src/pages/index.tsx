import React from 'react';
import { PageHeader } from '@/modules/Main/PageHeader';
import { ForumCard } from '@/modules/Main/ForumCard';

export default function Home() {
  const forums = [{ name: 'Форум 1' }];

  return (
    <>
      <PageHeader>Форум</PageHeader>
      {forums.map((forum) => (
        <ForumCard key={forum.name} {...forum} />
      ))}
    </>
  );
}
