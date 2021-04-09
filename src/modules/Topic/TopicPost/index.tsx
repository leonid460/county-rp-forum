import React from 'react';
import * as Styled from './styled';
import { boxShadow } from '@/ui-kit/styles/boxShadow';
import { transformDateToRussianDDMMYYString } from '@/utils/transformDateToRussianDDMMString';
import { AuthorBlock } from './AuthorBlock';
import { Quote } from './Quote';
import { ITopicPostProps } from './types';

export const TopicPost = ({
  username,
  groupName,
  avatarUrl,
  date,
  quoteAuthor,
  quoteSourceLink,
  quoteText,
  postText
}: ITopicPostProps) => {
  const formattedDate = transformDateToRussianDDMMYYString(date);

  return (
    <Styled.Container className={boxShadow}>
      <AuthorBlock avatarUrl={avatarUrl} username={username} groupName={groupName} />
      <Styled.ContentSection>
        <Styled.PublicationDate>Опубликовано {formattedDate}</Styled.PublicationDate>
        <Quote author={quoteAuthor} quotedPostLink={quoteSourceLink} text={quoteText} />
        <Styled.PostText>{postText}</Styled.PostText>
        <Styled.Separator />
      </Styled.ContentSection>
    </Styled.Container>
  );
};
