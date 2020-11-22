import React from 'react';
import { PageHeader } from '@/modules/Main/PageHeader';
import { ForumCard } from '@/modules/Main/ForumCard';
import { IForumCardProps } from '@/modules/Main/ForumCard/types';

export default function Home() {
  const forums: IForumCardProps[] = [
    {
      name: 'Форум 1',
      subForums: [
        {
          name: 'Форум 3',
          moderators: ['test1', 'test2'],
          messagesCount: 666,
          viewableTopic: { name: 'Topic', authorName: 'User', date: new Date() }
        },
        {
          name: 'Форум 4',
          moderators: ['test1', 'test2'],
          messagesCount: 666,
          viewableTopic: { name: 'Topic', authorName: 'User', date: new Date() }
        }
      ]
    },
    {
      name: 'Форум 2',
      subForums: [
        {
          name: 'Форум 5',
          moderators: ['test1', 'test2'],
          messagesCount: 666,
          viewableTopic: { name: 'Topic', authorName: 'User', date: new Date() }
        },
        {
          name: 'Форум 6',
          moderators: ['test1', 'test2'],
          messagesCount: 666,
          viewableTopic: { name: 'Topic', authorName: 'User', date: new Date() }
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader>Форум</PageHeader>
      {forums.map((forum) => (
        <ForumCard key={forum.name} {...forum} />
      ))}
    </>
  );
}
