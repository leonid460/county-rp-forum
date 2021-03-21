import React from 'react';
import { transformDateToRussianDDMMString } from '@/utils/transformDateToRussianDDMMString';
import * as Styled from './styled';
import { ITopicHeaderProps } from './types';
import { boxShadow } from '@/ui-kit/styles/boxShadow';

export const Header = ({ title, tags, authorInfo }: ITopicHeaderProps) => {
  const renderAuthorInfo = () => (
    <Styled.AuthorInfoContainer>
      <Styled.AuthorAvatar src={authorInfo.avatarUrl} />
      <Styled.AuthorInfoTextWrapper>
        <Styled.AuthorName>{authorInfo.name}</Styled.AuthorName>
        <Styled.CreationDate>
          {transformDateToRussianDDMMString(authorInfo.creationDate)}
        </Styled.CreationDate>
      </Styled.AuthorInfoTextWrapper>
    </Styled.AuthorInfoContainer>
  );

  const renderTags = () => {
    if (!tags.length) {
      return null;
    }

    return (
      <Styled.TagsContainer>
        {tags.map((tag, index) => (
          <Styled.Tag href="#" key={String(index)}>
            {tag}
          </Styled.Tag>
        ))}
      </Styled.TagsContainer>
    );
  };

  return (
    <Styled.Container className={boxShadow}>
      <Styled.HeaderRow>
        <Styled.Title>{title}</Styled.Title>
      </Styled.HeaderRow>
      {renderAuthorInfo()}
      {renderTags()}
    </Styled.Container>
  );
};
