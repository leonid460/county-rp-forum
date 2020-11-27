import React from 'react';
import { GetServerSideProps } from 'next';
import { IRawForum } from '@/api/home/types';
import { HomePageAdapters } from '@/api/home/HomePageAdapters';
import { HomePageMocks } from '@/api/home/HomePageMocks';
import { PageHeader } from '@/modules/Main/PageHeader';
import { ForumCard } from '@/modules/Main/ForumCard';

interface IHomeProps {
  forums: IRawForum[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const forums = await HomePageMocks.getForums();

  return {
    props: {
      forums
    }
  };
};

export default function Home({ forums }: IHomeProps) {
  const adaptedForumsList = HomePageAdapters.forums(forums);

  return (
    <>
      <PageHeader>Форум</PageHeader>
      {adaptedForumsList.map((forum) => (
        <ForumCard key={forum.name} {...forum} />
      ))}
    </>
  );
}
