import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ServicesContainer } from '@/api';
import { IRawTopicInfo } from '@/api/topic/types';
import { TopicPageAdaptors } from '@/api/topic/TopicPageAdaptors';
import { Header } from '@/modules/Topic/Header';
import { PageSelector } from '@/modules/Topic/PageSelector';
import { TopicPost } from '@/modules/Topic/TopicPost';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { topicId } = context.params;
  const topicInfo = await ServicesContainer.TopicPageService.getTopicInfo(topicId as string);

  return {
    props: topicInfo
  };
};

const Topic = ({ name, authorInfo, tags }: IRawTopicInfo) => {
  const adaptedAuthorInfo = TopicPageAdaptors.authorInfo(authorInfo);

  const longUsername = 'exampleUser12345678910sadasdasda';
  const longGroupName = 'exampleGroupUser12345678910sadasdasda';
  const exampleText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Placerat vestibulum lectus mauris ultrices eros. In mollis nunc sed id semper risus in hendrerit gravida. Interdum varius sit amet mattis vulputate. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Mauris nunc congue nisi vitae suscipit. Egestas purus viverra accumsan in nisl nisi scelerisque.';

  const props = {
    username: longUsername,
    groupName: longGroupName,
    avatarUrl: '',
    date: new Date(),
    quoteAuthor: longUsername,
    quoteSourceLink: '#',
    quoteText: exampleText,
    postText: exampleText
  };

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Header title={name} authorInfo={adaptedAuthorInfo} tags={tags || []} />
      <PageSelector />
      <TopicPost {...props} />
      <TopicPost {...props} />
      <TopicPost {...props} />
      <TopicPost {...props} />
    </>
  );
};

export default Topic;
