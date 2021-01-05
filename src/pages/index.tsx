import React from 'react';
import { GetServerSideProps } from 'next';
import { IRawForum } from '@/api/home/types';
import { HomePageAdapters } from '@/api/home/HomePageAdapters';
import { ServicesContainer } from '@/api';
import { PageHeader } from '@/modules/Main/PageHeader';
import { ForumCard } from '@/modules/Main/ForumCard';
import Head from 'next/head';

interface IHomeProps {
  forums: IRawForum[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const forums = await ServicesContainer.HomePageService.getForums();

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
      <Head>
        <title>Форумы</title>
      </Head>
      <PageHeader>Форумы</PageHeader>
      {adaptedForumsList.map((forum) => (
        <ForumCard key={forum.name} {...forum} />
      ))}
    </>
  );
}
