import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ServicesContainer } from '@/api';
import { IRawTopicInfo } from '@/api/topic/types';
import { TopicPageAdaptors } from '@/api/topic/TopicPageAdaptors';
import { Header } from '@/modules/Topic/Header';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { topicId } = context.params;
  const topicInfo = await ServicesContainer.TopicPageService.getTopicInfo(topicId as string);

  return {
    props: topicInfo
  };
};

const Topic = ({ name, authorInfo, tags }: IRawTopicInfo) => {
  const adaptedAuthorInfo = TopicPageAdaptors.authorInfo(authorInfo);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Header title={name} authorInfo={adaptedAuthorInfo} tags={tags || []} />
    </>
  );
};

export default Topic;
