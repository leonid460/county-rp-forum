import React from 'react';
import * as Styled from '@/modules/Topic/TopicPost/styled';
import { IAuthorBlockProps } from './types';

export const AuthorBlock = ({ avatarUrl, username, groupName }: IAuthorBlockProps) => (
  <Styled.UserSection>
    <Styled.Avatar src={avatarUrl} />
    <Styled.UserSectionNameAndGroupWrapper>
      <Styled.UserSectionUserName>{username}</Styled.UserSectionUserName>
      <Styled.UserSectionGroupName>{groupName}</Styled.UserSectionGroupName>
    </Styled.UserSectionNameAndGroupWrapper>
  </Styled.UserSection>
);
