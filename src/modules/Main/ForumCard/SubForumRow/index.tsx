import React from 'react';
import * as Styled from './styled';
import { Avatar } from '@/ui-kit/atoms/Avatar';
import { ISubForumInfo } from '../types';
import { useDeviceType } from '@/utils/useDeviceType';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';
import { formatNumeralAndWordTuple } from '@/utils/formatNumeralAndWordTuple';

export const SubForumRow = ({ name, id, moderators, messagesCount, lastTopic }: ISubForumInfo) => {
  const { isMobile } = useDeviceType();
  const shouldRenderMessagesCount = !isMobile && !!messagesCount;
  const shouldRenderLastTopicInfo = !isMobile && lastTopic;
  const topicLastMessageInfo = `Автор: ${lastTopic.authorName}, ${transformDateToRussianDDMMString(
    lastTopic.date
  )}`;

  const renderMessagesCount = () => {
    const formattedMessagesStr = formatNumeralAndWordTuple(messagesCount, [
      'сообщение',
      'сообщения',
      'сообщений'
    ]);

    const formattedMessagesCount = formattedMessagesStr.split(' ')[0];
    const formattedMessagesLabel = formattedMessagesStr.split(' ')[1];

    return (
      <Styled.CountSectionContainer>
        <Styled.MessagesCountWrapper>
          <Styled.PrimaryText>{formattedMessagesCount}</Styled.PrimaryText>
          <Styled.SecondaryText>{formattedMessagesLabel}</Styled.SecondaryText>
        </Styled.MessagesCountWrapper>
      </Styled.CountSectionContainer>
    );
  };

  const renderModeratorsList = () => (
    <Styled.SecondaryText>
      Модераторы: {moderators.reduce((acc, item) => (acc += `, ${item}`))}
    </Styled.SecondaryText>
  );

  const renderLastTopic = () => (
    <Styled.LastTopicSectionContainer>
      <Avatar src={lastTopic.avatarUrl} />
      <Styled.ViewableTopicInfoSection>
        <Styled.PrimaryText>{lastTopic.name}</Styled.PrimaryText>
        <Styled.SecondaryText>{topicLastMessageInfo}</Styled.SecondaryText>
      </Styled.ViewableTopicInfoSection>
    </Styled.LastTopicSectionContainer>
  );

  return (
    <Styled.Container>
      <Styled.MainInfoSectionContainer>
        <Avatar />
        <Styled.MainInfoContainer>
          <Styled.Link href={`/forum/${id}`}>
            <Styled.PrimaryText>{name}</Styled.PrimaryText>
          </Styled.Link>
          {moderators && renderModeratorsList()}
        </Styled.MainInfoContainer>
      </Styled.MainInfoSectionContainer>
      {shouldRenderMessagesCount && renderMessagesCount()}
      {shouldRenderLastTopicInfo && renderLastTopic()}
    </Styled.Container>
  );
};
