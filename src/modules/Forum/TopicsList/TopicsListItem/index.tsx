import React from 'react';
import * as Styled from './styled';
import { ITopic } from '@/modules/Forum/TopicsList/types';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';
import { formatNumeralAndWordTuple } from '@/utils/formatNumeralAndWordTuple';

export const TopicsListItem = ({ topic }: { topic: ITopic; forumId: string }) => {
  const renderTags = (tags: ITopic['tags']) =>
    tags.map((tag, index) => (
      <Styled.Tag key={`${tag}-${index}`} href="#">
        {tag}
      </Styled.Tag>
    ));

  const renderHeadingColumn = () => (
    <Styled.HeadingColumn>
      {topic.isClosed && <Styled.SvgLock />}
      <Styled.TagAndNameWrapper>
        <>{renderTags(topic.tags)}</>
        <Styled.LinkToTopic href={`topic/${topic.id}`}>{topic.name}</Styled.LinkToTopic>
      </Styled.TagAndNameWrapper>
      <Styled.SecondaryText style={{ wordBreak: 'break-word' }}>
        {`Автор: ${topic.author}, ${transformDateToRussianDDMMString(topic.creationDate)}`}
      </Styled.SecondaryText>
    </Styled.HeadingColumn>
  );

  const renderCountersColumn = () => {
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

  const renderLastMessageSection = () => (
    <Styled.LastMessageSectionContainer>
      <Styled.Avatar />
      <Styled.ColumnContainer>
        <Styled.MainText style={{ wordBreak: 'break-word' }}>
          {topic.lastMessageInfo.author}
        </Styled.MainText>
        <Styled.SecondaryText>
          {transformDateToRussianDDMMString(topic.lastMessageInfo.date)}
        </Styled.SecondaryText>
      </Styled.ColumnContainer>
    </Styled.LastMessageSectionContainer>
  );

  return (
    <Styled.ListItemContainer>
      <Styled.HeadingSectionContainer>
        {renderHeadingColumn()}
        {renderCountersColumn()}
      </Styled.HeadingSectionContainer>
      {topic.lastMessageInfo && renderLastMessageSection()}
    </Styled.ListItemContainer>
  );
};
