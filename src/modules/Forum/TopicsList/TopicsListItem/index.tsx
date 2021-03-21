import React from 'react';
import * as Styled from './styled';
import { ITopic } from '@/modules/Forum/TopicsList/types';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';
import { formatNumeralAndWordTuple } from '@/utils/formatNumeralAndWordTuple';

export const TopicsListItem = ({ topic }: { topic: ITopic }) => {
  const renderTitleColumnPart = () => (
    <Styled.TitlePartContainer>
      <Styled.LinkToTopic href={`topic/${topic.id}`}>{topic.name}</Styled.LinkToTopic>
      <Styled.AboutAuthorTextWrapper>
        <Styled.AuthorName>Автор: {topic.author}</Styled.AuthorName>
        <Styled.TopicCreationDate>
          {`, ${transformDateToRussianDDMMString(topic.creationDate)}`}
        </Styled.TopicCreationDate>
      </Styled.AboutAuthorTextWrapper>
    </Styled.TitlePartContainer>
  );

  const renderCountersPart = () => {
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
      <Styled.CountersColumnContainer>
        <Styled.MainText>{formattedRepliesStr}</Styled.MainText>
        <Styled.SecondaryText>{formattedViewsStr}</Styled.SecondaryText>
      </Styled.CountersColumnContainer>
    );
  };

  const renderLastMessageInfoPart = () => (
    <Styled.LastMessageInfoContainer>
      <Styled.Avatar />
      <Styled.LastMessageInfoTextWrapper>
        <Styled.LastMessageAuthorName as="div">
          {topic.lastMessageInfo.author}
        </Styled.LastMessageAuthorName>
        <Styled.SecondaryText>
          {transformDateToRussianDDMMString(topic.lastMessageInfo.date)}
        </Styled.SecondaryText>
      </Styled.LastMessageInfoTextWrapper>
    </Styled.LastMessageInfoContainer>
  );

  return (
    <Styled.ItemContainer>
      <Styled.ContentAndLockContainer>
        <Styled.LockIconContainer>{topic.isClosed && <Styled.SvgLock />}</Styled.LockIconContainer>
        <Styled.ItemContentContainer>
          {renderTitleColumnPart()}
          {renderCountersPart()}
          {topic.lastMessageInfo && renderLastMessageInfoPart()}
        </Styled.ItemContentContainer>
      </Styled.ContentAndLockContainer>
      {topic.tags && (
        <Styled.TagsContainer>
          {topic.tags.map((tag, index) => (
            <Styled.Tag key={`${tag}-${index}`} href="#">
              {tag}
            </Styled.Tag>
          ))}
        </Styled.TagsContainer>
      )}
    </Styled.ItemContainer>
  );
};
