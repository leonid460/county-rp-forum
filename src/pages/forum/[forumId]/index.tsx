import React from 'react';
import Head from 'next/head';
import { PageContentContainer } from '@/ui-kit/atoms/PageContentContainer';
import { Header } from '@/modules/Forum/Header';
import { IRawForumInfo } from '@/api/forum/types';
import { GetServerSideProps } from 'next';
import { ForumPageAdaptors } from '@/api/forum/ForumPageAdaptors';
import { ServicesContainer } from '@/api';
import { TopicList } from '@/modules/Forum/TopicsList';

type IForumPageProps = IRawForumInfo;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { forumId } = context.params;
  const forumInfo = await ServicesContainer.ForumPageService.getForumInfo(forumId as string);

  return {
    props: forumInfo
  };
};

const Forum = ({ name, id, topics }: IForumPageProps) => {
  const adaptedTopics = ForumPageAdaptors.topics(topics);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <PageContentContainer>
        <Header>{name}</Header>
        <TopicList forumId={id} topics={adaptedTopics} />
      </PageContentContainer>
    </>
  );
};

export default Forum;
