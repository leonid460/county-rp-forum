import React from 'react';
import * as Styled from './styled';
import { Avatar } from '@/ui-kit/atoms/Avatar';
import { ISubForumInfo } from '../types';
import { useDeviceType } from '@/utils/useDeviceType';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';

export const SubForumRow = ({ name, moderators, messagesCount, viewableTopic }: ISubForumInfo) => {
  const { isMobile } = useDeviceType();
  const shouldRenderMessagesCount = !isMobile && !!messagesCount;
  const shouldRenderViewableTopicInfo = !isMobile;
  const topicLastMessageInfo = `Автор: ${
    viewableTopic.authorName
  }, ${transformDateToRussianDDMMString(viewableTopic.date)}`;

  const renderMessagesCount = () => (
    <Styled.MessagesCountWrapper>
      <Styled.PrimaryText>{messagesCount}</Styled.PrimaryText>
      <Styled.SecondaryText>сообщений</Styled.SecondaryText>
    </Styled.MessagesCountWrapper>
  );

  const renderModeratorsList = () => (
    <Styled.SecondaryText>
      Модераторы: {moderators.reduce((acc, item) => (acc += `, ${item}`))}
    </Styled.SecondaryText>
  );

  const renderViewableTopic = () => (
    <Styled.ViewableTopicInfoSection>
      <Styled.PrimaryText>{viewableTopic.name}</Styled.PrimaryText>
      <Styled.SecondaryText>{topicLastMessageInfo}</Styled.SecondaryText>
    </Styled.ViewableTopicInfoSection>
  );

  return (
    <Styled.Container>
      <Avatar />
      <Styled.MainInfoContainer>
        <Styled.PrimaryText>{name}</Styled.PrimaryText>
        {moderators && renderModeratorsList()}
      </Styled.MainInfoContainer>
      {shouldRenderMessagesCount && renderMessagesCount()}
      {viewableTopic && (
        <>
          <Avatar src={viewableTopic.avatarUrl} />
          {shouldRenderViewableTopicInfo && renderViewableTopic()}
        </>
      )}
    </Styled.Container>
  );
};
