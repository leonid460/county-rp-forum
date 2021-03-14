import React from 'react';
import * as Styled from './styled';
import { ITopicListProps } from './types';
import { TopicsListItem } from './TopicsListItem';

export const TopicList = ({ topics, forumId }: ITopicListProps) => {
  return (
    <Styled.Container>
      {topics.map((topic) => (
        <TopicsListItem key={topic.id} topic={topic} forumId={forumId} />
      ))}
    </Styled.Container>
  );
};
