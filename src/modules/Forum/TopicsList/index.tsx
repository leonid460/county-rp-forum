import React from 'react';
import * as Styled from './styled';
import { ITopicListProps } from './types';
import { TopicsListItem } from './TopicsListItem';

export const TopicList = ({ topics }: ITopicListProps) => {
  return (
    <Styled.Container>
      {topics.map((topic) => (
        <TopicsListItem key={topic.id} topic={topic} />
      ))}
    </Styled.Container>
  );
};
