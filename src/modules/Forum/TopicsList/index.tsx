import React from 'react';
import * as Styled from './styled';
import { ITopicListProps, ITopic } from './types';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';
import { formatNumeralAndWordTuple } from '@/utils/formatNumeralAndWordTuple';

export const TopicList = ({ topics, forumId }: ITopicListProps) => {
  const renderHeadingColumn = (topic: ITopic) => (
    <Styled.HeadingColumn>
      {topic.isClosed && <Styled.SvgLock />}
      <Styled.LinkToTopic href={`/forum/${forumId}/topic/${topic.id}`}>
        {topic.name}
      </Styled.LinkToTopic>
      <Styled.SecondaryText>{`Автор: ${topic.author}, ${transformDateToRussianDDMMString(
        topic.creationDate
      )}`}</Styled.SecondaryText>
    </Styled.HeadingColumn>
  );

  const renderCountersColumn = (topic: ITopic) => {
    const formattedRepliesStr = formatNumeralAndWordTuple(topic.repliesCount, [
      'ответ',
      'ответа',
      'ответов'
    ]);
    const formattedViewsStr = formatNumeralAndWordTuple(topic.viewsCount, [
      'просмотр',
      'просмотра',
      'просмотров'
    ]);

    return (
      <Styled.CountersSectionColumn>
        <Styled.MainText>{formattedRepliesStr}</Styled.MainText>
        <Styled.SecondaryText>{formattedViewsStr}</Styled.SecondaryText>
      </Styled.CountersSectionColumn>
    );
  };

  const renderLastMessageSection = (topic: ITopic) => (
    <Styled.LastMessageSectionContainer>
      <Styled.Avatar />
      <Styled.ColumnContainer>
        <Styled.MainText>{topic.lastMessageInfo.author}</Styled.MainText>
        <Styled.SecondaryText>
          {transformDateToRussianDDMMString(topic.lastMessageInfo.date)}
        </Styled.SecondaryText>
      </Styled.ColumnContainer>
    </Styled.LastMessageSectionContainer>
  );

  return (
    <Styled.Container>
      {topics.map((topic) => (
        <Styled.TopicRowContainer key={topic.id}>
          <Styled.HeadingSectionContainer>
            {renderHeadingColumn(topic)}
            {renderCountersColumn(topic)}
          </Styled.HeadingSectionContainer>
          {topic.lastMessageInfo && renderLastMessageSection(topic)}
        </Styled.TopicRowContainer>
      ))}
    </Styled.Container>
  );
};
